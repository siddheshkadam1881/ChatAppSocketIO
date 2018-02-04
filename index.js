let express = require('express')
let app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);

const port = process.env.PORT || 3000;


user = 0;
connections = [];

//Socket server connection and testing
io.on('connection', (socket) => {
    console.log('user connected', ++ user);

   //send msg..
    socket.on('new-message', (message) => {
//Communicating with other users..
      console.log('msg at server',message);
          io.emit('new-message',message);
      });
});


server.listen(port, () => {
    console.log(`started on port: ${port}`);
});
