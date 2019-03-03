import React, { Component } from 'react';
import PreviousWinners from './previouswinners';
import Main from './main';
import Players from './players';

import {Row, Col} from 'react-materialize';



class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="content-area">
                <div className="main-content">
                    <Row>
                        <Col s={12} l={4} className='center'>
                            <PreviousWinners socket={this.props.socket}></PreviousWinners>
                        </Col>
                        <Col s={12} l={4} className='center'>
                            <Main socket={this.props.socket}></Main>
                        </Col>
                        <Col s={12} l={4} className='center'>
                            <Players socket={this.props.socket}></Players>
                        </Col>   
                    </Row>
                </div>
            </div>
         );
    }
}
 
export default Content;
