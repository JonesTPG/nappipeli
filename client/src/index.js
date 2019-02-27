import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import io from 'socket.io-client'

//initialize a websocket connection to the server.
var socket = io.connect('http://localhost:5000'); //local
//var socket = io.connect('https://thawing-wildwood-25973.herokuapp.com:5000'); //heroku

// socket.on('playerUpdate', function(data) {
//   console.log(data);
// });

//passing the socket object down as a prop so we don't have to establish multiple websocket connections.
ReactDOM.render(<App socket={socket}/>, document.getElementById('root'));


serviceWorker.unregister();
