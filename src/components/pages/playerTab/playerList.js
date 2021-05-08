import Player from './player';
import React from "react";

class PlayerList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},
            showingPlayers: false,
            players: []
        }
        this.fetchData = this.fetchData.bind(this);
    }
    
    async fetchData() {
        await fetch("https://woek5w1kjg.execute-api.us-east-1.amazonaws.com/dev")
        .then(response => response.json())
        .then(r => this.setState({data: r}))

        
        
        let playerlist = []
        for (let i=0; i < this.state.data.body.Items.length; i++) {
            console.log("working")
            playerlist.push(<Player name = {this.state.data.body.Items[i].ID} url = {this.state.data.body.Items[i].SteamURL}/>)
        }
        
        this.setState({players: playerlist, showingPlayers: true})

    }

    render() {
        

        
        return (  
            <div className="container-fluid">

                <h1>Player List</h1>

                {this.state.showingPlayers ?
                <div>
                    {this.state.players}
                </div>
                :
                <div>
                    <button className="submit" onClick={this.fetchData}>Get Player List</button>
                </div>
                }

            </div>
        );
    }
}
  export default PlayerList;