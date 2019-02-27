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
let previousWinners = [];

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
            username : data,
            id: socket.id
        });
        notifyPlayersChanged(players);
        
    });

    socket.on('push', function(data) {
        //update counter.
        counter++;
        //big prize.
        if (counter % 500 == 0) {
            notifyProgressToNextPrize(100);
            let data = {
                id: socket.id,
                username: getUsername(socket.id),
                prize: "big",
                date: new Date()
            };
            previousWinners.push(data);
            notifyPrizeWon(data);
        }
        //medium prize.
        else if (counter % 200 == 0) {
            notifyProgressToNextPrize(100);
            let data = {
                id: socket.id,
                username: getUsername(socket.id),
                prize: "medium",
                date: new Date()
            };
            previousWinners.push(data);
            notifyPrizeWon(data);
        }
        //small prize.
        else if (counter % 5 == 0) {
            notifyProgressToNextPrize(100);
            let data = {
                id: socket.id,
                username: getUsername(socket.id),
                prize: "small",
                date: new Date()
            };
            previousWinners.push(data);
            notifyPrizeWon(data);
        }
        //no prize.
        else {
            var string = counter.toString();
            var lastdigits = string.slice(-2);
            lastdigits = parseInt(lastdigits);
            var nextPrize = 100-lastdigits;
            notifyProgressToNextPrize(nextPrize);
        }
        notifyWinnersChanged(previousWinners);
    });

    socket.on('disconnect', function() {
        
        //remove the disconnected player from the players list.
        players = players.filter(function( obj ) {
            return obj.id !== socket.id;
        });
        notifyPlayersChanged(players);
    });

});

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

function notifyWinnersChanged(previousWinners) {
    io.sockets.emit('previousWinners', previousWinners);
}

//utility function to get the username with a socket id.
function getUsername(id) {
    let result = players.find( player => player.id === id );
    return result.username;
}