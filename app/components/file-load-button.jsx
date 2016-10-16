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

    fileButtonClicked() {
        this.refs.fileInput.click();
    }

    render() {
        const btnClasses = "fa fa-upload fa-4x";
        const btnStyles = {
            color: "#ff8b00",
            marginLeft: "0.5em",
            marginRight: "0.5em",
            cursor: "pointer"
        };

        const inputStyles = {
            display: "none"
        };

        return (
            <div className={btnClasses} style={btnStyles} onClick={this.fileButtonClicked.bind(this)}>
                <input
                    type="file"
                    style={inputStyles}
                    onChange={this.handleFileChange.bind(this)}
                    ref="fileInput"
                />
            </div>
        );
    }
}

export default FileLoadButton;
