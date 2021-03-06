import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import Welcome from './components/welcome';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { 
        username: ''
    }

}

  handleUsername = (username) => {
      this.setState({
          username: username
      })
  }

  render() {

    return (
      <>
       {/*passing a function as a prop so we can catch the username the user chooses at the welcome screen.*/}
        <Welcome socket={this.props.socket}
                 handleUsername={this.handleUsername}>
        </Welcome>
        <Header username={this.state.username}></Header>
        <Content socket={this.props.socket}></Content>
        <Footer socket={this.props.socket}></Footer>
      </>
    );
  }
}

export default App;
