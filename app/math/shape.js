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

const translate = (x, y, shape) => {
    const transformation = (p) => Vector.create(p.x + x, p.y + y);
    return transformPoints(transformation, shape);
};

const setPosition = (x, y, shape) => {
    const origin = shape.points[0];
    return translate(x - origin.x, y - origin.y, shape);
};

export default { create, scale, rotate, translate, setPosition };
