import Graphics from "../graphics/graphics.js";

class Visualizer {
    constructor(canvas) {
        let ctx = canvas.getContext("2d");
        this.g = new Graphics(ctx);

        this.size = {
            width: canvas.width,
            height: canvas.height
        };
    }
}

export default Visualizer;
