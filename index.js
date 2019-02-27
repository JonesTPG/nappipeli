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

//THE VARIABLES FOR THE GAME
let players = [];
let counter = 0;

//api request for getting the player list through normal HTTP get-request.
app.get('/api/players', (req, res) => {
    res.json(players);
});

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
        
        players.push({
            "username": data,
            "id": socket.id
        });
        notifyPlayersChanged(players);
        
    });

    socket.on('push', function(data) {
        console.log("button pushed by " + socket.id);
        counter++;
        //big prize.
        if (counter % 500 == 0) {
            console.log("big prize won by " + socket.id);
            notifyProgressToNextPrize(100);
            notifyPrizeWon({
                id: socket.id,
                prize: "big"
            })
        }
        //medium prize.
        else if (counter % 200 == 0) {
            console.log("medium prize won by " + socket.id);
            notifyProgressToNextPrize(100);
            notifyPrizeWon({
                id: socket.id,
                prize: "medium"
            })
        }
        //small prize.
        else if (counter % 100 == 0) {
            console.log("small prize won by " + socket.id);
            notifyProgressToNextPrize(100);
            notifyPrizeWon({
                id: socket.id,
                prize: "small"
            })
        }
        //no prize.
        else {
            console.log("NO prize won by " + socket.id);
            var string = counter.toString();
            var lastdigits = string.slice(-2);
            lastdigits = parseInt(lastdigits);
            var nextPrize = 100-lastdigits;
            console.log("next prize is " + nextPrize + "clicks away.");
            notifyProgressToNextPrize(nextPrize);
        }
    });

    socket.on('disconnect', function() {
        
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

//notify clients how far away next prize is.
function notifyProgressToNextPrize(count) {
    io.sockets.emit('nextPrize', count);
}

//notify client that a prize was won.
function notifyPrizeWon(data) {
    io.to(data.id).emit('prizeWon', data);
}

//utility function to get the username with a socket id.
function getUsername(id) {
    let result = players.find( player => player.id === id );
    return result.username;
}