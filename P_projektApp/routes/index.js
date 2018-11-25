var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  if(req.session.user) {
    res.render('login/index', {user: req.session.user.username});
  } else {
    res.render('index', {title: 'Express'});
  }
});

module.exports = router;