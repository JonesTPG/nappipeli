import React, { Component } from 'react';


class Players extends Component {
  constructor(props) {
    super(props);
    this.state = { players: [] };  
}

  
  // listen to player updates and set the state
  // accordingly.
  componentDidMount() {
    //use the API in the first time so the player can see if there is others playing
    //when he/she enters the page.
    this.getConnectedPlayers();
    let socket = this.props.socket;
    socket.on('playerUpdate', function(data) {
        this.setState({
          players: data
        }); 
    }.bind(this));
  }
  
  getConnectedPlayers = () => {
    // Get connected players initially with an API request.
    // Later on websocket connection is used to update players, 
    fetch('/api/players')
      .then(res => res.json())
      .then(players => this.setState({ players }));
  }

  render() {
    const { players } = this.state;

    return (
      <div className="App">
        {/* Render the passwords if we have them */}
        {players.length ? (
          <div>
            <h1>Yhdistetyt pelaajat:</h1>
            <ul className="players">
              {players.map((player) =>
                <li key={player.username}>
                  {player.username}
                </li>
              )}
            </ul>
            
          </div>
        ) : (
          // Render a helpful message otherwise
          <div>
            <h1>Ei yhdistettyjä pelaajia</h1>
            
          </div>
        )}
      </div>
    );
  }
}

export default Players;
