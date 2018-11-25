var express = require('express');
var bcrypt = require('bcrypt');
var router = express.Router();
var User = require('../models/user');

router.use('/', function(req, res, next) {
  if(req.session.user) {
    res.redirect('/');
  } else {
    next();
  }
});

router.get('/', function(req, res) {
  res.render('login');
});

router.post('/', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;

  User.findOne({username: username}, '_id username usermail password', function(err, userData) {
    if(err) {
      res.status(401).render('login', {error: 'Error during login!'});
    } else if (!userData) {
      res.status(401).render('login', {error: 'User not found!'});
    } else {
      var passCheck = bcrypt.compareSync(password, userData.password);
      if(passCheck === true) {
        req.session.user = {
          id: userData._id,
          username: userData.username,
          usermail: userData.usermail
        };
        req.session.user.expires = new Date(Date.now()+1*1*60*1000);
        res.status(200).redirect('/');
      } else {
        res.status(401).render('login', {error: 'Bad password!'});
      }
    }
  })
});

module.exports = router;