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
                    <h1>Edelliset voittajat:</h1>
                    <ul className="players">
                    {winners.map((winner) =>
                        <li key={winner.date}> {/*date is a good key because it will be unique to every win event.*/}
                        {winner.username} {winner.prize}
                        </li>
                    )}
                    </ul>
                    
                </div>
                ) : (
                // There is no previous winners.
                <div>
                    <h1>Ei edellisiä voittajia.</h1>
                    
                </div>
            )}
            </>
         );
    }
}
 
export default PreviousWinners;