import React, { Component } from 'react';
import { Button } from 'react-materialize';

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
            <div>
                <div className="next-prize">
                    <NextPrize socket={this.props.socket}></NextPrize>
                </div>

                <button className="button" onClick={this.handleButtonClick}>Paina tästä.</button>

                <div className="info-text">
                    <Info socket={this.props.socket}></Info>
                </div>

                <div className="mobile-buttons">
                <br></br><br></br><br></br>
                    <Button className="blue darken-3">Edelliset voittajat</Button> <br></br><br></br>
                    <Button className="blue darken-3">Yhdistetyt pelaaajat</Button>
                </div>
            </div>
        );
    }
}
 
export default Main;