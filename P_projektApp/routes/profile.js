var express = require('express');
var router = express.Router();
var Todo =  require('../models/todo');

router.use('/', function(req, res, next) {
  if(req.session.user) {
    next();
  } else {
    res.status(401).render('profile', { msg: 'Authorization failed! Please login first!' });
  }
});

router.get('/', function(req, res) {
  res.render('login/profile', {
    login: req.session.user.username,
    mail: req.session.user.usermail,
  });
});

router.post('/', function(req, res) {
  var passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

  if(req.body.newmail === req.session.user.usermail){
    res.render('login/profile', {
      err: 'New mail is the same as current!',
      login: req.session.user.username,
      mail: req.session.user.usermail
    });
  } else {
    if(req.body.newpassword !== req.body.connewpassword){
      res.render('login/profile', {
        err: 'Provided password do not match!',
        login: req.session.user.username,
        mail: req.session.user.usermail
      });
    } else {
      if(!passRegex.test(req.body.newpassword)){
        res.render('login/profile', {
          err: 'Provided password do not meet requirements!',
          login: req.session.user.username,
          mail: req.session.user.usermail
        });
      } else {
        var id = req.session.user.id;
        console.log(id);

        if(req.body.newmail === '' ){
          var querry = Todo.findByIdAndUpdate(id, { $set: { password: req.body.newpassword }});
          querry.exec();
          res.redirect('/profile');
        } else {
          var querry = Todo.findByIdAndUpdate(id, { $set: { usermail: req.body.newmail }});
          querry.exec();
          req.session.user.usermail = req.body.newmail;
          res.redirect('/profile');

        }       
      }
    }
  }
});

module.exports = router;
