var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Najpierw wypełnij formularz');
});

router.post('/', function(req, res, next){
	console.log(req.body);
   res.render('formdata', {title: 'FORMDATA', name: req.body.name, age: req.body.age, city: req.body.city});
});

module.exports = router;
