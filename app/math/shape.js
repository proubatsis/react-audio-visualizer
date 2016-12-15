import Vector from "./vector.js";

const create = (points, color) => {
    return { points, color };
};

const transformPoints = (transformation, shape) => {
    return {
        color: shape.color,
        points: shape.points.map((p) => {
            return transformation(p);
        })
    };
};

const scale = (scaleFactor, shape) => {
    const transformation = (p) => Vector.scale(scaleFactor, p);
    return transformPoints(transformation, shape);
};

const rotate = (angle, shape) => {
    const transformation = (p) => Vector.rotate(angle, p);
    return transformPoints(transformation, shape);
};

export default { create, scale, rotate };
