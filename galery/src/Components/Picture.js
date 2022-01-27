import React from "react";
import Popup from "./Popup";

class Picture extends React.Component {

    openBigPicture = () => {
        // console.log(this.props);
        this.props.showBigImage(this.props);
    }

    closeBigPicture = () => {
        this.props.closeBigImage(this.props.closeBigImage);
    }

    render() {
        // console.log(this.props.showBigImage);
        // console.log(this.props);
        // console.log(this.props.urlBig);
        return (
            <div className="picture">
                <img src={this.props.url} onClick={this.openBigPicture}></img>
            </div>
        )
    }
}

export default Picture;
