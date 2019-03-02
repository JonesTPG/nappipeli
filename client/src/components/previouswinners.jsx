import React, { Component } from 'react';
import AllWinners from './allwinners';



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
        //show maximum of four in the list
        let winners = this.state.winners.reverse().slice(0,4); 
        return (
            <div> 
            {winners.length ? (
                <div className="previous-winners">
                    <h4>Edelliset voittajat:</h4>
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
            
                    <AllWinners winners={this.state.winners}></AllWinners>  
                </div>
                ) : (
                // There is no previous winners.
                <div>
                    <h4>Ei edellisiä voittajia</h4>
                    
                </div>
            )}
            </div>
         );
    }
}
 
export default PreviousWinners;