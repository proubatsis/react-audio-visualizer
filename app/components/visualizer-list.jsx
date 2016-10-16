import React from "react";
import VisualizerButton from "./visualizer-button.jsx";

import BarVisualizer from "../visualizers/bar-visualizer.js";
import CircleDotVisualizer from "../visualizers/circle-dot-visualizer.js";

const vState = (name, visualizer, selected = false) => {
    return {
        name: name,
        visualizer: visualizer,
        selected: selected
    };
};

class VisualizerList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visualizers: [
                vState("Bar", BarVisualizer, true),
                vState("Circle Dot", CircleDotVisualizer)
            ]
        };
    }

    selectionChanged(visualizerName) {
        let found = null;
        let vStates = this.state.visualizers.map((v) => {
            if(v.name == visualizerName) {
                found = vState(v.name, v.visualizer, true);
                return found;
            }
            return vState(v.name, v.visualizer);
        });

        this.setState({
            visualizers: vStates
        });

        this.props.selectionChanged(found.visualizer);
    }

    render() {
        const elements = this.state.visualizers.map((v, i) => {
            return (
                <li key={i}>
                    <VisualizerButton
                        visualizerName={v.name}
                        visualizerSelect={this.selectionChanged.bind(this)}
                    />
                </li>
            );
        });

        return (
            <ul style={{listStyle: "none"}}>
                {elements}
            </ul>
        );
    }
}

export default VisualizerList;
