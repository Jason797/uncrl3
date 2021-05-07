import Player from './player';
import React from "react";


class PlayerList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
    }



    render() {
        this.state.data = ["content", "content", "content", "content", "content", "content", "content", "content", "content", "content", ]
        let players=[]
        for (let i=0; i<10; i++) {
            players.push(<Player data = {this.state.data[i]}/>)
        }


        
        return (  
            <div className="container-fluid">

                <h1>Player List</h1>
                <div>
                    {players}
                </div>

            </div>
        );
    }
}
  export default PlayerList;