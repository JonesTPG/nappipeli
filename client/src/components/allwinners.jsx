import React, { Component } from 'react';
import { Modal, Button } from 'react-materialize';

class AllWinners extends Component {
    constructor(props) {
        super(props);
        this.state = {  }

    }
    render() { 
        let winners = this.props.winners;
        return ( 
            <div>
                <Modal
                    header='Kaikki voittajat'
                    trigger={<Button>Näytä kaikki</Button>}>
                <ul className="collection">
                    {winners.map((winner) =>
                        <li className="collection-item avatar" key={winner.dateid}> {/*date is a good key because it will be unique to every win event.*/}
                            <i className="material-icons circle blue">star</i>
                            <span className="title">{winner.username}</span>
                            <p> {winner.date} <br></br>
                            </p>
                            Voitti palkinnon {winner.prize}
                        </li>
                    )}
                </ul>
                </Modal>
            </div>
            
         );
    }
}
 
export default AllWinners;