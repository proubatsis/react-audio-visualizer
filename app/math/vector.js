const create = (x, y) => {
    return {
        x: x,
        y: y
    };
};

const scale = (k, v) => {
    return {
        x: k * v.x,
        y: k * v.y
    };
};

const rotate = (angle, v) => {
    return {
        x: v.x * Math.cos(angle) - v.y * Math.sin(angle),
        y: v.x * Math.sin(angle) + v.y * Math.cos(angle)
    };
};

export default { create, scale, rotate };
