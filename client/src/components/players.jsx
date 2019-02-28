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
      <>
        {/* Render the players if we have them */}
        {players.length ? (
          <div>
            <h4>Yhdistetyt pelaajat:</h4>
            <ul className="collection">
              {players.map((player) =>
                    <li className="collection-item avatar" key={player.username}>
                      <i class="material-icons circle blue">star</i>
                      <span className="title">{player.username}</span>
                      <p>Aloitti pelaamisen {player.connected} <br></br>
                      </p> 
                    </li>
              )}
            </ul>
         </div>
        ) : (
          // There are no connected players at the moment.
        <h4>Ei yhdistettyjä pelaajia</h4> 
        )}
      </>
    );
  }
}

export default Players;
