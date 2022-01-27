import React from "react";
import Button from "./Button";

class Pagination extends React.Component {
    render() {
        // console.log(this.props)
        return (
            <div>
                {this.props.pages.map(page => <Button page = {page} onPageChange={this.props.onPageChange}/>)}
            </div>
        )
    }
}

export default Pagination;