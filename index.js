let express = require('express')
let app = express();
let http = require('http');
let server = http.Server(app);
var config = require("./config");
let socketIO = require('socket.io');
let io = socketIO(server);
var onlineUsers = [];
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/chat');
const port = process.env.PORT || 3000;
var Chat=require('./model/Chat');

//Socket server connection and testing
io.on('connection', (socket) => {
     //console.log('user connected', ++ user);
    //send msg..
    socket.on('login', (userObj) => {
     onlineUsers.push(userObj.username);
     io.emit('online-users',onlineUsers);
    });
      socket.on('new-message', (message) => {
      //socket.on('user', (message) => {
      var newmsg= Chat(message);
      newmsg.save();
      console.log(newmsg);
      console.log('msg at server',message);
      //Communicating with other users..
      io.emit('new-message',message);
    });
});
server.listen(port, () => {
   console.log(`started on port: ${port}`);
});
