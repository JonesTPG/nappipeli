import React, { Component } from 'react';
import '../css/footer.css';
import {Button, Modal} from 'react-materialize';

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
            <footer className="footer">
            <br></br>
                <Modal
                    header='Peliohjeet'
                    trigger={<Button className="blue darken-3">Peliohjeet</Button>}>
                    <p>Pelissä pelaat muiden yhdistettyjen pelaajien kanssa painamalla keskellä ruutua näkyvää nappia.
                       Tavoitteena on voittaa jaossa olevia palkintoja, joita on kolme erilaista: pieni, keskisuuri ja iso palkinto.
                       Pelin yläreunassa näet laskurin, joka kertoo paljonko matkaa seuraavaan palkintoon on. Huomaa, että kaikki muutkin pelaajat
                       näkevät saman laskurin, joten sinun täytyy ajoittaa painalluksesi hyvin voittaaksesi. Onnea peliin!
                    </p>
                </Modal>
                <br></br>
                <p>Joonas Ryynänen 2019. Pelaajia tällä hetkellä {this.state.playerCount} kpl.</p> 
            </footer>  
  
         );
    }
}
 
export default Footer;