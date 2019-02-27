import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import Welcome from './components/welcome';



class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { 
        
    }

}

  
  componentDidMount() {
   
  }


  render() {

    return (
      <>
        <Welcome socket={this.props.socket}></Welcome>
        <Header></Header>
        <Body socket={this.props.socket}></Body>
        <Footer></Footer>
      </>
    );
  }
}

export default App;
