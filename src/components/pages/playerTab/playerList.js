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
            let players = ''
            let id = this.state.data.body.Items[i].SteamURL;
            let url = "https://shielded-caverns-79295.herokuapp.com/http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=EEADF4A02AFD8E02BD752346BFA0A470&steamids=" + id;
            await fetch(url)
            .then(r => r.json())
            .then(r => players = r.response.players[0])

            if (players == null) {
                continue
            }

            playerlist.push(<Player steamName = {players.personaname} name = {this.state.data.body.Items[i].ID.slice(1,-1)} avatar={players.avatar} profileurl={players.profileurl}/>)
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