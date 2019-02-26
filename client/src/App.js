import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

import { subscribeToTimer } from './api';

class App extends Component {
  constructor(props) {
    super(props);

    subscribeToTimer((err, timestamp) => this.setState({ 
      timestamp 
    }));
    this.state = { 
        timestamp: 'no timestamp yet'
    }
}

  
  componentDidMount() {
   
  }


  render() {

    return (
      <>
      <p>This is the timer value: {this.state.timestamp}</p>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>

      </>
    );
  }
}

export default App;
