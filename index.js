let express = require('express')
let app = express();
let http = require('http');
let server = http.Server(app);
var config = require("./config");
let socketIO = require('socket.io');
let io = socketIO(server);
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/chat');
const port = process.env.PORT || 3000;
var Chat=require('./model/Chat');

//Socket server connection and testing
io.on('connection', (socket) => {
  //  console.log('user connected', ++ user);

   //send msg..
    socket.on('new-message', (message) => {
//Communicating with other users..
      console.log('msg at server',message);
          io.emit('new-message',message);
          Chat.create({ username: String, message: String,time: String},function (err,success) {
         if(err)
          {
               console.log(err);
          }
           else{
               console.log('stored in database!');
           }
        })
       });
 });


server.listen(port, () => {
    console.log(`started on port: ${port}`);
});
