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
            <>
                <p>  Seuraavaan palkintoon matkaa: 
                    {this.state.nextPrize}
                </p>
            </>
         );
    }
}
 
export default NextPrize;
