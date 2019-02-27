import React, { Component } from 'react';

import '../css/welcome.css'

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: '',
            infoText: ''
         } 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        
    }

    //update state as the form field changes
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    //when user clicks submit, send the username to server
    handleSubmit(event) {
        if (this.state.value == '') {
                this.setState({
                    infoText: 'Sinun täytyy valita nimimerkki ennen pelaamista.'
                })
        }

        else {
            var modal = document.getElementById('myModal');
            modal.style.display = "none";

            //this socket object is from the original index.js connection.
            //this way we only use one connection per player.
            let socket = this.props.socket;
            socket.emit('new player', this.state.value);
        }
        event.preventDefault();
      }

    render() { 
        return ( 
            <>
                <div id="myModal" className="modal">
                    <div className="modal-content">
                    
                    <p>Tervetuloa pelaamaan nappipeliä! Kirjoita nimimerkkisi alla olevaan laatikkoon.</p>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                        Nimimerkki:<br></br> 
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                    <p>{this.state.infoText}</p>
                    </div>
                </div>
            </>

         );
    }
}
 
export default Welcome;