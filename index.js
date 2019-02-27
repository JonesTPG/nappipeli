const express = require('express');
var http = require('http');
const path = require('path');
var socketIO = require('socket.io');
var cors = require('cors');


const app = express();
var server = http.Server(app);
var io = socketIO(server);

app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

let players = [];

//api request for getting the player list through normal HTTP get-request.
app.get('/api/players', (req, res) => {
    res.json(players);
    console.log("sent players.")
})

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
server.listen(port);

console.log(`Server listening on  ${port}`);


// Add the WebSocket handlers
io.on('connection', function(socket) {

    socket.on('new player', function(data) {
        console.log(data + " connected.");
        players.push({
            "username": data,
            "id": socket.id
        }
        );
        notifyPlayersChanged(players);
        console.log(players);
    });

    socket.on('disconnect', function() {
        console.log("player disconnected. player id: " + socket.id);
        //remove the disconnected player from the players list.
        players = players.filter(function( obj ) {
            return obj.id !== socket.id;
        });
        notifyPlayersChanged(players);
    });

});

setInterval(function() {
    io.sockets.emit('message', 'hi!');
  }, 1000);

//notify clients that the player pool has changed.
function notifyPlayersChanged(newPlayers) {
    io.sockets.emit('playerUpdate', newPlayers);
}