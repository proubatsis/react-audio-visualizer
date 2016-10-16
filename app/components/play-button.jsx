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
        if(this.props.audio) {
            if(this.state.isPlaying) {
                this.props.audio.pause();
            }
            else {
                this.props.audio.play();
            }
        }

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
            cursor: "pointer",
            marginLeft: "0.5em",
            marginRight: "0.5em"
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
