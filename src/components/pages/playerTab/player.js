import React from "react";
class Player extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container-fluid">
                <div>
                    free {this.props.name} {this.props.url}
                </div>

            </div>
        );
    }
}
  export default Player;