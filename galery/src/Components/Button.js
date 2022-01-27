import React from "react";

class Button extends React.Component {

    pageRender = () => {
        this.props.onPageChange(this.props.page)
        console.log(this.props.page);
    }

    render() {
        // console.log(this.props)
        return (
            <button onClick={this.pageRender}>{this.props.page}</button>
        )
    }
}

export default Button;