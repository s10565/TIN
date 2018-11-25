var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

// Create user schema
var userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  usermail: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
}, {runSettersOnQuery: true});

// Save new user to DB and hash password
userSchema.pre('save', function (next) {
  var newUser = this;
  bcrypt.hash(newUser.password, 10, function(err, hash) {
      if(err) {
          return next(err);
      }
      newUser.password = hash;
      next();
  })
});

var user = mongoose.model('user', userSchema);
module.exports = user;