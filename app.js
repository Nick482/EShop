var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cons = require('consolidate');
var html = require('html');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
process.env.NODE_ENV = 'development';
var mongoose = require('./helpers/mongooseConnection');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);



var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();
app.use(logger('dev'));

// view engine setup

app.engine('html', cons.underscore);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    store: new MongoStore({
        mongooseConnection: mongoose.connection
    }),
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: null,
        secure: false }
}));
app.use('/', routes);
app.use('/users', users);


module.exports = app;
