import React, { Component } from 'react';
import '../css/footer.css'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="footer">
                <p>Joonas Ryynänen 2019. Pelaajia tällä hetkellä X kpl.</p>
            </div>
         );
    }
}
 
export default Footer;