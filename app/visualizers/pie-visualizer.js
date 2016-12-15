import Visualizer from "./visualizer.js";
import Vector from "../math/vector.js";
import Shape from "../math/shape.js";

const SEGMENTS = 32;
const BASE_RADIUS = 64;

const ANGLE = 360.0 / SEGMENTS;
const ANGLE_RADS = (2 * Math.PI) / SEGMENTS;
const TRIG_ANGLE = (Math.PI - ANGLE_RADS) / 2;

const HORIZ = Math.cos(TRIG_ANGLE);
const VERT = Math.sin(TRIG_ANGLE);

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
            shape = Shape.rotate(i * ANGLE_RADS);
            shape = Shape.translate(this.size.width / 2, this.size.height / 2, shape);

            this.segments.push(createSegment(
                shape,
                Vector.create(Math.sin(i * ANGLE_RADS), -Math.cos(i * ANGLE_RADS))
            ));
        }
    }
}

export default PieVisualizer;
