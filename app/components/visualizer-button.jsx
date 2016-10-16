import React from "react";

class VisualizerButton extends React.Component {
    constructor(props) {
        super(props);
    }

    clicked() {
        this.props.visualizerSelect(this.props.visualizerName);
    }

    render() {
        const btnStyle = {
            background: "#ff8b00",
            color: "#fff",
            cursor: "pointer",
            padding: "0.25em"
        };

        return (
            <div style={btnStyle} onClick={this.clicked.bind(this)}>
                <p><i style={{paddingRight: "0.25em"}} className="fa fa-square"></i>{this.props.visualizerName}</p>
            </div>
        );
    }
}

export default VisualizerButton;
