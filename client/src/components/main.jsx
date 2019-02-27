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
                <div className="next-prize">
                    <NextPrize socket={this.props.socket}></NextPrize>
                </div>

                <button className="button" onClick={this.handleButtonClick}>Paina tästä.</button>

                <div className="info-text">
                    <Info socket={this.props.socket}></Info>
                </div>
            </>
        );
    }
}
 
export default Main;