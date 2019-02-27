import React, { Component } from 'react';
import '../css/footer.css'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            playerCount: 0
         }
    }

    componentDidMount() {
        let socket = this.props.socket;
        socket.on('playerUpdate', function(data) {
        let count = data.length;
        this.setState({
          playerCount: count
        }); 
        }.bind(this));
    }

    render() { 
        return ( 
            <div className="footer">
                <p>Joonas Ryynänen 2019. Pelaajia tällä hetkellä {this.state.playerCount} kpl.</p>
            </div>
         );
    }
}
 
export default Footer;