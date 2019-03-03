import React, { Component } from 'react';
import { Modal, Button } from 'react-materialize';


/*this component renders some mobile-only buttons. */

class MobileButtons extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            players: [],
            winners: []
         }
    }

    componentDidMount() {
        //listen to changes and update state accordingly.
        let socket = this.props.socket;

        socket.on('playerUpdate', function(data) {
            this.setState({
            players: data
            }); 
        }.bind(this));

        socket.on('previousWinners', function(data) {
            this.setState({
              winners: data
            }); 
        }.bind(this));
    }


    render() {
        let players = this.state.players;
        let winners = this.state.winners;

        return ( 

            <div className="mobile-buttons">
                    <br></br><br></br><br></br>
                    
                    <Modal
                        header='Kaikki voittajat'
                        trigger={<Button className="blue darken-1">Näytä kaikki voittajat</Button>}>

                        <ul className="collection">
                            {winners.map((winner) =>
                                <li className="collection-item avatar" key={winner.dateid}> {/*date is a good key because it will be unique to every win event.*/}
                                    <i className="material-icons circle blue">star</i>
                                    <span className="title">{winner.username}</span>
                                    <p> {winner.date} <br></br>
                                    </p>
                                    {winner.text}
                                </li>
                            )}
                        </ul>
                    </Modal>
                    
                    <br></br><br></br>
                            
                    <Modal
                        header='Kaikki pelaajat'
                        trigger={<Button onClick={this.fetchPlayers} className="blue darken-1">Näytä yhdistetyt pelaajat</Button>}>
                        <ul className="collection">
                            {players.map((player) =>
                                <li className="collection-item avatar" key={player.username}>
                                <i className="material-icons circle red">account_circle</i>
                                <span className="title">{player.username}</span>
                                <p>Aloitti pelaamisen {player.connected} <br></br>
                                </p> 
                                </li>
                            )}
                        </ul>
                    </Modal>

            </div>

         );
    }
}
 
export default MobileButtons;