import React from "react";

import PlayButton from "./play-button.jsx";
import FileLoadButton from "./file-load-button.jsx";

import Loader from "../loaders/local-loader.js";

class MusicPlayer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            audio: null
        };
    }

    audioFileChange(file) {
        var src = Loader(file);
        this.setState({
            audio: new Audio(src)
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
            </div>
        );
    }
}

export default MusicPlayer;
