
var mongoose = require('mongoose');

var Chat = new mongoose.Schema({

  username: String,
  message: String,
//  time: String
});

module.exports = mongoose.model('Chat', Chat);
