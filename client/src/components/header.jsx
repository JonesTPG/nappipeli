import React, { Component } from 'react';
import '../css/header.css'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <header className="header">
                <p>NAPPIPELI</p>

                <p>Pelaat nimimerkillä {this.props.username}</p>
            </header>
            
         );
    }
}
 
export default Header;