import React from "react";

class FileLoadButton extends React.Component {
    constructor(props) {
        super(props);
    }

    handleFileChange(event) {
        const files = event.target.files;
        if(files && files.length > 0) {
            this.props.fileChange(files[0]);
        }
    }

    render() {
        const btnClasses = "fa fa-upload fa-4x";
        const btnStyles = {
            position: "relative",
            overflow: "hidden",
            color: "#ff8b00",
            marginLeft: "0.5em",
            marginRight: "0.5em"
        };

        const inputStyles = {
            position: "absolute",
            top: 0,
            right: 0,
            margin: 0,
            padding: 0,
            cursor: "pointer",
            height: "100%"
        };

        return (
            <div className={btnClasses} style={btnStyles}>
                <input
                    type="file"
                    style={inputStyles}
                    onChange={this.handleFileChange.bind(this)}
                />
            </div>
        );
    }
}

export default FileLoadButton;
