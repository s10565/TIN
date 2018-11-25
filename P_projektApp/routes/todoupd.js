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
    var querry = Todo.findByIdAndUpdate(id, { $set: { done: true }});
    querry.exec();
    res.redirect('/todo');
});

module.exports = router;












/*
router.post('/', function(req, res, next) {
        var owner = req.session.user.username;
        var name = req.body.name;
        var done = false;
        var todoData = {name, done, owner};
        var newTodo = new Todo(todoData);
      
        newTodo.save()
          .then(() => {
            res.status(201).redirect('todo');
          })
          .catch(err => {
              console.error(err);
              res.status(500).render('login/todo', {error: 'Error during adding task! Please try again later.'})
          });
});

router.get('/', function(req, res) {
    var query = Todo.find({owner: req.session.user.username});
    query.exec(function (err, docs) {
        var todoDocs = [], doneDocs = [];

        docs.forEach(element => {
            if(element.done){
                doneDocs.push(element);
            } else {
                todoDocs.push(element);
            }
        });

        res.render('login/todo', {todoList: todoDocs, doneTodoList: doneDocs});
    });
});


router.delete('/', function(req,res) {
    var id = req.body.id;
    console.log(id);
    res.redirect('/');
});
*/