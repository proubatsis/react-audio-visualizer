import React from "react";
import BarVisualizer from "../visualizers/bar-visualizer.js";

const CANVAS_SCALE = 0.75;

class Visualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            effectInstance: null
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            effectInstance: new nextProps.effect(this.refs.visualizerCanvas)
        });

        // Start the visualization when the audio property is not null
        if(this.props.audio != nextProps.audio && nextProps.audio && nextProps.audio instanceof window.Audio) {
            // Setup analyzer
            let actx = new AudioContext();
            let asrc = actx.createMediaElementSource(nextProps.audio);
            let analyzer = actx.createAnalyser();

            asrc.connect(analyzer);
            asrc.connect(actx.destination);
            let spectrum = new Uint8Array(analyzer.frequencyBinCount);

            // Setup visualizer
            let vis = new this.props.effect(this.refs.visualizerCanvas);
            this.setState({
                effectInstance: vis
            });

            // Draw loop
            const draw = () => {
                analyzer.getByteFrequencyData(spectrum);

                this.state.effectInstance.draw(spectrum);
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
