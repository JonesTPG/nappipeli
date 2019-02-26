import React, { Component } from 'react';


class Players extends Component {
  // Initialize state
  state = { players: [] }

  // Fetch passwords after first mount
  componentDidMount() {
    this.getConnectedPlayers();
  }

  getConnectedPlayers = () => {
    // Get connected players
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
            <h1>Current players:</h1>
            <ul className="players">
              {players.map((player) =>
                <li key={player.username}>
                  {player.username}
                </li>
              )}
            </ul>
            <button
              className="more"
              onClick={this.getConnectedPlayers}>
              Get More
            </button>
          </div>
        ) : (
          // Render a helpful message otherwise
          <div>
            <h1>No connected players</h1>
            <button
              className="more"
              onClick={this.getConnectedPlayers}>
              Try Again?
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Players;
