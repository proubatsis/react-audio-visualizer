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

const createSegment = (shape, moveDirection) => {
    return { shape, moveDirection };
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

            this.g.fillShape(triangle);
        }
    }
}

export default PieVisualizer;
