import React, { Component } from 'react';

class PreviousWinners extends Component {
    constructor(props) {
        super(props);
        this.state = { winners: [] }
    }

    componentDidMount() {
        let socket = this.props.socket;
        socket.on('previousWinners', function(data) {
        
        this.setState({
          winners: data
        }); 
        }.bind(this));
    }

    render() {
        let winners = this.state.winners; 
        return (
            <> 
            {winners.length ? (
                <div>
                    <h4>Edelliset voittajat:</h4>
                    <ul className="collection">
                    {winners.map((winner) =>
                        <li className="collection-item avatar" key={winner.date}> {/*date is a good key because it will be unique to every win event.*/}
                        <i class="material-icons circle blue">star</i>
                        <span className="title">{winner.username}</span>
                        <p> {winner.date} <br></br>
                        </p>
                         Voitti palkinnon {winner.prize}
                        </li>
                    )}
                    </ul>
                    
                </div>
                ) : (
                // There is no previous winners.
                <div>
                    <h4>Ei edellisiä voittajia</h4>
                    
                </div>
            )}
            </>
         );
    }
}
 
export default PreviousWinners;