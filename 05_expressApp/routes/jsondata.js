var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Prześlij dane w formacie JSON!');
});

router.post('/', function(req, res, next){
	console.log(req.body);
	res.render('jsondata', {title: 'JSONDATA', name: req.body.name, age: req.body.age, city: req.body.city});
});

module.exports = router;


//PS C:\TEMP\CURL\curl-7.62.0\AMD64> curl.exe -H "Content-Type: application/json" -X POST -d '{ \"name\": \"Dawid\", \"age\": \"25\", \"city\": \"Warszawa\" }' http://localhost:3000/jsondata