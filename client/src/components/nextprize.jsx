import React, { Component } from 'react';

class NextPrize extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            nextPrize: 0
         }
    }

    componentDidMount() {
        let socket = this.props.socket;
        socket.on('nextPrize', function(data) {
        this.setState({
          nextPrize: data
        }); 
        }.bind(this));
    }

    render() { 
        return ( 
            <div>
                <h4>Seuraavaan palkintoon matkaa:</h4>
                <h4>{this.state.nextPrize} klikkiä</h4>
            </div>
         );
    }
}
 
export default NextPrize;
