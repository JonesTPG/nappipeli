import React, { Component } from 'react';
import PreviousWinners from './previouswinners';
import Main from './main';
import Players from './players';

import '../css/content.css'

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div className="content">
            <div className="column">
                <PreviousWinners socket={this.props.socket}></PreviousWinners>
            </div>
            <div className="column">
                <Main socket={this.props.socket}></Main>
            </div>
            <div className="column">
                <Players socket={this.props.socket}></Players>
            </div>   
        </div>
         );
    }
}
 
export default Content;
