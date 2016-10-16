import Visualizer from "./visualizer.js";

const RADIUS = 25;

class CircleDotVisualizer extends Visualizer {
    constructor(canvas) {
        super(canvas);

        this.dots = {
            center: {
                x: this.size.width / 2,
                y: this.size.height / 2
            },
            size: 5
        };
    }

    draw(spectrum) {
        let count = 360 <= spectrum.length ? 360 : spectrum.length;
        let angle = 2 * Math.PI / count;

        const rotate = (v) => {
            return {
                x: v.x * Math.cos(angle) - v.y * Math.sin(angle),
                y: v.x * Math.sin(angle) + v.y * Math.cos(angle)
            };
        };

        let d = { x: 0, y: -1 };

        this.g.fillRect(0, 0, this.size.width, this.size.height, "#000");

        for(var i = 0; i < count; i++) {
            let m = spectrum[i];
            this.g.fillRect(d.x * (m + RADIUS) + this.dots.center.x, d.y * (m + RADIUS) + this.dots.center.y, this.dots.size, this.dots.size, "#fff");
            d = rotate(d);
        }
    }
}

export default CircleDotVisualizer;
