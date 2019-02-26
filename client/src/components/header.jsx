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
                <p>Vincit ennakkotehtävä: nappipeli</p>

                <p>Kirjautuneena käyttäjällä</p>
            </div>
            
         );
    }
}
 
export default Header;