var express = require('express');
var router = express.Router();
var Todo =  require('../models/todo');

router.use('/', function(req, res, next) {
    if(!req.session.user) {
        res.redirect('/todo');
      } else {
        next();
      }
});

router.post('/', function(req,res) {
    var id = req.body.id;
    var querry = Todo.findByIdAndDelete(id);
    querry.exec();

    querry = Todo.find({owner: req.session.user.username});
    querry.exec(function (err, docs) {
        var todoDocs = [], doneDocs = [];

        docs.forEach(element => {
            if(element.done){
                doneDocs.push(element);
            } else {
                todoDocs.push(element);
            }
        });

        res.render('login/tododel', {todoList: todoDocs, doneTodoList: doneDocs});
    });
});

module.exports = router;