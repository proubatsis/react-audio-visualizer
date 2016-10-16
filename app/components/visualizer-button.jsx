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
            color: "#fff",
            cursor: "pointer",
            marginLeft: "1em",
            marginRight: "1em"
        };

        return (
            <div style={btnStyle} onClick={this.clicked.bind(this)}>
                <p><i style={{paddingRight: "0.25em"}} className="fa fa-circle"></i>{this.props.visualizerName}</p>
            </div>
        );
    }
}

export default VisualizerButton;
