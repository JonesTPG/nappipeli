import React, { Component } from 'react';
import '../css/header.css'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="header">
                <p>Vincit ennakkotehtävä: nappipeliv2</p>

                <p>Pelaat nimimerkillä {this.props.username}</p>
            </div>
            
         );
    }
}
 
export default Header;