import openSocket from 'socket.io-client';
const socket = openSocket('https://localhost:5000');

function subscribeToTimer(cb) {
  socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('subscribeToTimer', 1000);
} 

export { subscribeToTimer }