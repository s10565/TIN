var express = require('express');
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
  res.render('register');
});

router.post('/', function(req, res, next) {
  var mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

  if(req.body.password !== req.body.rePassword){
    res.status(409).render('register', {error: 'Passwords do not match!'});
  } else {
    if(!passRegex.test(req.body.password)){
      res.status(409).render('register', {error: 'Password do not match requirements!'});
    } else {
      if(!mailRegex.test(req.body.usermail)){
        res.status(409).render('register', {error: 'Invalid mail provided!'});
      } else {
        var {username, usermail, password} = req.body;
        var userData = {username, usermail, password};
        var newUser = new User(userData);
  
      newUser.save()
        .then(() => {
          req.session.user = {
            id: userData._id,
            username: userData.username,
            usermail: userData.usermail
          };
          req.session.user.expires = new Date(Date.now()+1*1*60*1000);
          res.status(201).render('register', {error: 'Registration successful! You are now logged in!'})
        })
        .catch(err => {
          if(err.code === 11000) {
            res.status(409).render('register', {error: 'Username or mail already exist!'});
          } else {
            console.error(err);
            res.status(500).render('register', {error: 'Error during registration! Please try again later.'})
          }
        });
      }
    }
  }
});

module.exports = router;