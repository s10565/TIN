var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('hello', {title: 'HELLO', msg: 'Hello World!'});
});

module.exports = router;
