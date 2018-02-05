var mongoose = require('mongoose');


var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  userpass: {
    type: String,
    required: true,
  },
  usermobile: {
    type: Number,
    required: true,
  }
});


var User = mongoose.model('User', User);
module.exports = User;
