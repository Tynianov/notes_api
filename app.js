var express = require('express');
var app = express();
const bodyParser = require('body-parser');
var db = require('./db');
global.__root   = __dirname + '/';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
const noteRoutes = require('./routes/notes-route');

app.use('/api/v1/', noteRoutes);
var UserController = require(__root + 'user/UserController');
app.use('/api/users', UserController);

var AuthController = require(__root + 'auth/AuthController');
app.use('/api/auth', AuthController);

module.exports = app;
