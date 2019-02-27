import React, { Component } from 'react';

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            infoText: 'Ei palkintoa.'
         }
    }

    componentDidMount() {
        let socket = this.props.socket;
        socket.on('prizeWon', function(data) {
        console.log(data);
        this.setState({
          infoText: data.prize
        }); 
    }.bind(this));
    }

    render() { 
        return ( 
            <p>{this.state.infoText}</p>
         );
    }
}
 
export default Info;