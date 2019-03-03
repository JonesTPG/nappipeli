import React, { Component } from 'react';

import '../css/main.css'
import NextPrize from './nextprize';
import Info from './info';
import MobileButtons from './mobilebuttons';


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
            <div>
                <div className="next-prize">
                    <NextPrize socket={this.props.socket}></NextPrize>
                </div>

                <button className="button" onClick={this.handleButtonClick}>Paina tästä.</button>

                <div className="info-text">
                    <Info socket={this.props.socket}></Info>
                </div>

                <MobileButtons socket={this.props.socket}></MobileButtons>
               
            </div>
        );
    }
}
 
export default Main;