import React, { Component } from 'react';

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            prize: '',
            date: ''
         }
    }

    componentDidMount() {
        let socket = this.props.socket;
        socket.on('prizeWon', function(data) {
        console.log(data);
        this.setState({
          username: data.username,
          prize: data.prize,
          date: data.date
        }); 
    }.bind(this));
    }

    render() {

        if (this.state.prize === '') {
            return ( 
                <p>Et voittanut palkintoa. :(</p>
             );
        }

        else if (this.state.prize === 'small') {
            return ( 
                <p>Voitit pienen palkinnon! :)</p>
             );
        }

        else if (this.state.prize === 'medium') {
            return ( 
                <p>Voitit keskisuuren palkinnon! :)</p>
             );
        }

        else if (this.state.prize === 'big') {
            return ( 
                <p>Voitit ison palkinnon! :)</p>
             );
        }


        
    }
}
 
export default Info;