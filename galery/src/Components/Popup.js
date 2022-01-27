import React from "react";
import './Popup.css';

class Popup extends React.Component {
    render = () => {
        // console.log(this.props.url.url);    
        return(
            <div className="visible" onDoubleClick={this.props.closeBigImage}>
                <img className="bigPicture" src={this.props.url.urlBig}></img>
            </div>
        )
    }
}

export default Popup;