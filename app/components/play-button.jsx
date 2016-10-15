import React from "react";
import classNames from "classnames";

class PlayButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isPlaying: false
        };
    }

    togglePlaying() {
        this.setState({
            isPlaying: !this.state.isPlaying
        });
    }

    render() {
        var btnClasses = classNames({
            "fa-play-circle": !this.state.isPlaying,
            "fa-pause-circle": this.state.isPlaying,
            "fa": true,
            "fa-4x": true
        });

        var btnStyles = {
            color: "#ff8b00",
            cursor: "pointer"
        };

        return (
            <div
                className={btnClasses}
                style={btnStyles}
                onClick={this.togglePlaying.bind(this)}
            />
        );
    }
}

export default PlayButton;
