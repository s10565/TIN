var express = require('express');
var router = express.Router();

router.all('/', function(req, res, next) {
  req.session.destroy();
  res.status(200).redirect('/');
});

module.exports = router;