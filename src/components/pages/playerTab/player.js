import React from "react";
class Player extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container-fluid">
                <div>
                    Data from parent is: {this.props.data}
                </div>

            </div>
        );
    }
}
  export default Player;