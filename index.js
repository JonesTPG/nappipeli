const express = require('express');
var http = require('http');
const path = require('path');
var socketIO = require('socket.io');


const app = express();
var server = http.Server(app);
var io = socketIO(server);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

let players = [
    {
        username: "joonas"
    },
    {
        username: "kassu"
    }
]

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


io.on('connection', (client) => {
    client.on('subscribeToTimer', (interval) => {
      console.log('client is subscribing to timer with interval ', interval);
      setInterval(() => {
        client.emit('timer', new Date());
  }, interval);
    });
  });