import React, { Component } from 'react';
import PreviousWinners from './previouswinners';
import Button from './button';
import Players from './players';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div className="body">
            <PreviousWinners></PreviousWinners>
            <Button></Button>    
            <Players></Players>
        </div>
         );
    }
}
 
export default Body;
