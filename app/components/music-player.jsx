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
            audio: this.state.Audio,
            CurrentVisualizer: visualizer
        });
    }

    render() {
        const playButton = this.state.audio ?
            <PlayButton audio={this.state.audio} /> :
            null;

        return (
            <div>
                <Visualizer audio={this.state.audio} effect={this.state.CurrentVisualizer} />
                <FileLoadButton fileChange={this.audioFileChange.bind(this)} />
                {playButton}
                <VisualizerList selectionChanged={this.currentVisualizerChange.bind(this)} />
            </div>
        );
    }
}

export default MusicPlayer;
