import React, { Component } from 'react';
import { Modal, Button } from 'react-materialize';

class AllPlayers extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let players = this.props.players;
        return ( 
            <div>
                <Modal
                    header='Kaikki pelaajat'
                    trigger={<Button>Näytä kaikki</Button>}>
                <ul className="collection">
                    {players.map((player) =>
                        <li className="collection-item avatar" key={player.username}>
                        <i className="material-icons circle blue">star</i>
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
 
export default AllPlayers;