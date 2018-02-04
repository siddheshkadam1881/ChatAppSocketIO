var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var config = require("../config").config;
var User = require('../models/user');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myappdatabase');
//socket module purpose
var io = require('socket.io')(http);
var Chat = require('../models/Chat.js');
var cors = require('cors');
app.use(cors())

//create socket connection
io.on('connection', function (socket) {
console.log('User connected');
socket.on('disconnect', function() {
console.log('User disconnected');
});
//message save
 socket.on('save-message', function (data) {
  console.log(data);
  //send msg to client
  io.emit('new-message', { message: data });
});
});

//   /* GET ALL CHATS */
//   app.get('/room', function(req, res, next) {
//   Chat.find({ room: req.params.room }, function (err, chats) {
//     if (err) return next(err);
//     res.json(chats);
//   });
// });
// /* GET SINGLE CHAT BY ID */
// app.get('/id', function(req, res, next) {
//   Chat.findById(req.params.id, function (err, messageId) {
//     if (err) return next(err);
//     res.json(messageId);
//   });
// });
//
// /* SAVE CHAT */
// app.post('/chat', function(req, res, next) {
//   Chat.create(req.body, function (err,messageObject) {
//     if (err) return next(err);
//     res.json(messageObject);
//   });
// });
// //
// // /* UPDATE CHAT */
// // app.put('/:id', function(req, res, next) {
// //   Chat.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
// //     if (err) return next(err);
// //     res.json(post);
// //   });
// // });
// //
// // /* DELETE CHAT */
// // app.delete('/:id', function(req, res, next) {
// //   Chat.findByIdAndRemove(req.params.id, req.body, function (err, post) {
// //     if (err) return next(err);
// //     res.json(post);
// //   });
// // });

app.listen(3000,function()
{
console.log("we are listening at port 3000");
})
