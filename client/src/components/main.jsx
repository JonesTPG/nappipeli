import React, { Component } from 'react';

import '../css/main.css'
import NextPrize from './nextprize';
import Info from './info';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <>
                <NextPrize></NextPrize>
                <button className="button">Paina tästä.</button>
                <Info></Info>
            </>
        );
    }
}
 
export default Main;