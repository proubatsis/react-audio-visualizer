import Visualizer from "./visualizer.js";

const BAR_COUNT = 128;

class BarVisualizer extends Visualizer {
    constructor(canvas) {
        super(canvas);

        this.bar = {
            multiplier: 1,
            width: this.size.width / BAR_COUNT
        };
    }

    draw(spectrum) {
        let count = Math.max(BAR_COUNT, spectrum.length);

        this.g.fillRect(0, 0, this.size.width, this.size.height, "#000");

        for(var i = 0; i < count; i++) {
            let barHeight = spectrum[i] * this.bar.multiplier;
            this.g.fillRect(i * this.bar.width, this.size.height - barHeight, this.bar.width, barHeight, "#fff");
        }
    }
}

export default BarVisualizer;
