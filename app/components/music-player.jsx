import React from "react";

import PlayButton from "./play-button.jsx";
import FileLoadButton from "./file-load-button.jsx";

import Visualizer from "./visualizer.jsx";
import VisualizerList from "./visualizer-list.jsx";

import Loader from "../loaders/local-loader.js";
import BarVisualizer from "../visualizers/bar-visualizer.js";

class MusicPlayer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            audio: null,
            CurrentVisualizer: BarVisualizer
        };
    }

    audioFileChange(file) {
        var src = Loader(file);
        this.setState({
            audio: new Audio(src),
            CurrentVisualizer: this.state.CurrentVisualizer
        });
    }

    currentVisualizerChange(visualizer) {
        this.setState({
            audio: this.state.audio,
            CurrentVisualizer: visualizer
        });
    }

    render() {
        const playButton = this.state.audio ?
            <PlayButton audio={this.state.audio} /> :
            null;

        return (
            <div>
                <FileLoadButton fileChange={this.audioFileChange.bind(this)} />
                {playButton}
                <VisualizerList selectionChanged={this.currentVisualizerChange.bind(this)} />
                <br/>
                <Visualizer audio={this.state.audio} effect={this.state.CurrentVisualizer} />
            </div>
        );
    }
}

export default MusicPlayer;
