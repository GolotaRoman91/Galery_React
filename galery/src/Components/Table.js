import React from "react";
import Picture from "./Picture";

class Table extends React.Component {
    render() {
        // console.log(this.props)
        return (
            <div className="pictures">
                {this.props.pictures.map(picture => <Picture key={picture.id} url = {picture.thumbnailUrl} urlBig = {picture.url} showBigImage = {this.props.showBigImage} closeBigImage = {this.props.closeBigImage}/>)}
            </div>
        )
    }
}

export default Table;
