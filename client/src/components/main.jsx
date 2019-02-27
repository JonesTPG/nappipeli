import React, { Component } from 'react';

import '../css/main.css'
import NextPrize from './nextprize';
import Info from './info';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    handleButtonClick = () => {
        let socket = this.props.socket;
        socket.emit('push', 'true');
    }
    
    render() { 
        return (  
            <>
                <NextPrize socket={this.props.socket}></NextPrize>
                <button className="button" onClick={this.handleButtonClick}>Paina tästä.</button>
                <Info socket={this.props.socket}></Info>
            </>
        );
    }
}
 
export default Main;