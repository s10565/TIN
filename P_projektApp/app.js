var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var favicon = require('serve-favicon');
var session = require('express-session');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

// MongoDB connection
mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://localhost:27017/projektapp', {
  useNewUrlParser: true
  }, function(err, db) {
    if (err) {
      console.log("Eror while connect to database");
    } else {
      console.log(`Connected to MongoDB`);
    }
  }
);

// Database schemas
var User = require('./models/user');
var Todo = require('./models/todo');

// view engine setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

app.use(favicon('./public/images/favicon.ico'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//Sessions for tracking logins
app.use(
  session({
    secret: "EDMysKmwk9uJNPI7IbEdPe6c",
    resave: true,
    saveUninitialized: false
  })
);

// Routes
var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var logoutRouter = require('./routes/logout');
var profileRouter = require('./routes/profile');
var registerRouter = require('./routes/register');
var todoRouter = require('./routes/todo');
var todoDelRouter = require('./routes/tododel');
var todoUpdRouter = require('./routes/todoupd');

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/profile', profileRouter);
app.use('/register', registerRouter);
app.use('/todo', todoRouter);
app.use('/tododel', todoDelRouter);
app.use('/todoupd', todoUpdRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
console.log("Server started at http://localhost:3000/");

