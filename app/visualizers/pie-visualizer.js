import Visualizer from "./visualizer.js";
import Vector from "../math/vector.js";
import Shape from "../math/shape.js";
import Util from "../math/util.js";

const SEGMENTS = 32;
const BASE_RADIUS = 64;

const ANGLE = 360.0 / SEGMENTS;
const ANGLE_RADS = (2 * Math.PI) / SEGMENTS;
const TRIG_ANGLE = (Math.PI - ANGLE_RADS) / 2;

const HORIZ = Math.cos(TRIG_ANGLE);
const VERT = Math.sin(TRIG_ANGLE);

const BASE_INDEX = 16;
const SUM_SLICE = 8;

const SCALE = 256.0;

const ONE_THIRD_SEGS = SEGMENTS / 3 + 1;

const createSegment = (shape, moveDirection) => {
    return { shape, moveDirection };
};
//
// const int ONE_THIRD_SEGS = SEGMENTS / 3 + 1;
// float t = (i % ONE_THIRD_SEGS) / (float)ONE_THIRD_SEGS;
// int r = 0, g = 0, b = 0;
//
// if(i < ONE_THIRD_SEGS)
// {
//     r = (int)interpolate(255, 0, t);
//     g = (int)interpolate(0, 255, t);
// }else if(i >= ONE_THIRD_SEGS && i < 2 * ONE_THIRD_SEGS)
// {
//     g = (int)interpolate(255, 0, t);
//     b = (int)interpolate(0, 255, t);
// }else
// {
//     b = (int)interpolate(255, 0, t);
//     r = (int)interpolate(0, 255, t);
// }
//
// float scale = sum * 100 + 0.1f;
// return sf::Color((sf::Uint8)(r * scale), sf::Uint8(g * scale), sf::Uint8(b * scale));

const getColor = (i, mag) => {
    const interpolate = (a, b, x) => (x * x * (3 - 2 * x)) * (b - a) + a;

    const t = (i % ONE_THIRD_SEGS) / (ONE_THIRD_SEGS * 1.0);
    let r = 0;
    let g = 0;
    let b = 0;

    if(i < ONE_THIRD_SEGS) {
        r = Math.floor(interpolate(255, 0, t));
        g = Math.floor(interpolate(0, 255, t));
    }
    else if(i >= ONE_THIRD_SEGS && i < 2 * ONE_THIRD_SEGS) {
        g = Math.floor(interpolate(255, 0, t));
        b = Math.floor(interpolate(0, 255, t));
    }
    else {
        b = Math.floor(interpolate(255, 0, t));
        r = Math.floor(interpolate(0, 255, t));
    }

    return `rgba(${r}, ${g}, ${b}, 1.0)`;
};

// *                              *
//    *                        *
//       *      ANGLE       *
//          *            *
//             *      *
// TRIG_ANGLE      *       TRIG_ANGLE
//*************************************

class PieVisualizer extends Visualizer {
    constructor(canvas) {
        super(canvas);

        this.segments = [];
        for(var i = 0; i < SEGMENTS; i++) {
            let points = [];
            points.push(Vector.create(0, 0));
            points.push(Vector.create(BASE_RADIUS * HORIZ, -BASE_RADIUS * VERT));
            points.push(Vector.create(-BASE_RADIUS * HORIZ, -BASE_RADIUS * VERT));

            let shape = Shape.create(points, "#f00");
            shape = Shape.rotate(i * ANGLE_RADS, shape);
            shape = Shape.translate(this.size.width / 2, this.size.height / 2, shape);

            this.segments.push(createSegment(
                shape,
                Vector.create(Math.sin(i * ANGLE_RADS), -Math.cos(i * ANGLE_RADS))
            ));
        }
    }

    draw(spectrum) {
        let sums = [];
        spectrum = Array.from(spectrum).map((s) => s / 255.0);

        sums.push(Util.arraySum(spectrum, 0, SUM_SLICE));
        sums.push(Util.arraySum(spectrum, SUM_SLICE, SUM_SLICE));

        for(let i = 0; i < this.segments.length; i++)
            sums.push(Util.arraySum(spectrum, BASE_INDEX + SUM_SLICE * i, SUM_SLICE));

        const smax = Math.max(...sums);
        this.g.fillRect(0, 0, this.size.width, this.size.height, "#000");
        for(let i = 0; i < this.segments.length; i++) {
            let d = sums[i + 2];
            d /= smax;
            d *= Math.exp(4 * d - 4);
            d *= SCALE;

            let t = i / 31.0;
            t = Math.exp(3 * t - 4) + 0.5;
            d *= t;

            // Transform triangle
            let triangle = this.segments[i].shape;
            triangle = Shape.setPosition(
                this.size.width / 2 + this.segments[i].moveDirection.x * d,
                this.size.height / 2 + this.segments[i].moveDirection.y * d,
                triangle
            );
            triangle.color = getColor(i, d);

            this.g.fillShape(triangle);
        }
    }
}

export default PieVisualizer;
