import React from "react";
class NewsPiece extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log("hello")
        return (
            <div className="container-fluid">
                <div className="newsItem">
                    <p class = "piece">{this.props.title}</p>
                    <p class = "piece">{this.props.author}</p>
                    <p class = "piece">{this.props.contents}</p>
                </div>
            </div>
        );
    }
}
  export default NewsPiece;