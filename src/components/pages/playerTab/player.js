import React from "react";
class Player extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container-fluid">
                <div>
                    <ul className="person">
                        <li className="personli">
                        <img src = {this.props.avatar} />
                        </li>
                        <li className="personli">
                        {this.props.name}
                        </li>
                        <li className="personli">
                        "{this.props.steamName}"
                        </li>
                        <li className="personli">
                        <a href={this.props.profileurl}>Steam Link</a>
                        </li>
                    </ul>
                </div>

            </div>
        );
    }
}
  export default Player;