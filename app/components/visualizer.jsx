import React from "react";
import BarVisualizer from "../visualizers/bar-visualizer.js";

const CANVAS_SCALE = 0.75;

class Visualizer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        // Start the visualization when the audio property is not null
        if(this.props.audio) {
            // Setup analyzer
            let actx = new AudioContext();
            let asrc = actx.createMediaElementSource(this.props.audio);
            let analyzer = actx.createAnalyser();

            asrc.connect(analyzer);
            asrc.connect(actx.destination);
            let spectrum = new Uint8Array(analyzer.frequencyBinCount);

            // Setup visualizer
            let vis = new BarVisualizer(this.refs.visualizerCanvas);

            // Draw loop
            const draw = () => {
                analyzer.getByteFrequencyData(spectrum);

                vis.draw(spectrum);
                window.requestAnimationFrame(draw);
            };

            window.requestAnimationFrame(draw);
        }
    }

    render() {
        let cWidth = window.innerWidth * CANVAS_SCALE;
        let cHeight = window.innerHeight * CANVAS_SCALE;

        return (
            <canvas width={cWidth} height={cHeight} ref="visualizerCanvas">
                Please use a modern browser!
            </canvas>
        );
    }
}

export default Visualizer;
