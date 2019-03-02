import React, { Component } from 'react';

import '../css/info.css'

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            prize: '',
            infoText: ''
         }

    }

    componentDidMount() {
        let socket = this.props.socket;
        socket.on('prizeWon', function(data) {
        let infoText;
        if (data.prize === 'small') {
            infoText = 'Voitit pienen palkinnon!';
        }
        else if (data.prize === 'medium') {
            infoText = 'Voitit keskisuuren palkinnon!';
        }
        else if (data.prize === 'big') {
            infoText = 'Voitit ison palkinnon!';
        }

        else {
            return;
        }
        
        this.setState({
          prize: data.prize,
          infoText: infoText
        }); 
    }.bind(this));
    }

    render() {

        var x = document.getElementById("prize-alert");
        if (x !== null) {
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        }
        
        if (this.state.prize === '') {
              
            return ( 
                <p></p>
             );
        }

        else {
            return ( 
                <div id="prize-alert" className="show">{this.state.infoText}</div>
             );
        }
        
    }
}
 
export default Info;