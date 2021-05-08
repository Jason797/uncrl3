import React from "react";

class CreatePlayer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            playerName: '',
            steamID: ''
        }
        this.callAPI=this.callAPI.bind(this);
        this.changepText=this.changepText.bind(this);
        this.changesText=this.changesText.bind(this);
    }


    callAPI () {
        // instantiate a headers object
        var myHeaders = new Headers();
        // add content type header to object
        myHeaders.append("Content-Type", "application/json");
        // using built in JSON utility package turn object to string and store in a variable
        var raw = JSON.stringify({"playerName":this.state.playerName,"steamID":this.state.steamID});
        // create a JSON object with parameters for API call and store in a variable
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        // make API call with parameters and use promises to get response
        fetch("https://woek5w1kjg.execute-api.us-east-1.amazonaws.com/dev", requestOptions)
        .then(response => response.text())
        .then(result => alert("User " + JSON.parse(result).body + " Created"))
        .catch(error => console.log('error', error));
    }

    changepText(e) {
        this.setState({playerName: e.target.value})
    }

    changesText(e) {
        this.setState({steamID: e.target.value})
    }

    render() {
        return (
        <div>
           <form>
           <label>Player Name :</label>
            <textarea class="text" onChange={this.changepText}></textarea>
            <label>Steam ID :</label>
            <textarea class="text" onChange={this.changesText}></textarea>
            <button type="button" onClick={this.callAPI}>Call API</button>
           </form>
        </div>

        )
    }
}

export default CreatePlayer;