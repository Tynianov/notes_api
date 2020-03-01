var express = require('express');
var app = express();
const bodyParser = require('body-parser');
var db = require('./db');
global.__root   = __dirname + '/';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
const noteRoutes = require('./routes/notes-route');
const colorRoutes = require('./routes/color-routes');
const authContollers = require('./auth/AuthController');

app.use('/api/v1/', noteRoutes);
app.use('/api/v1/', colorRoutes);
app.use('/api/auth', authContollers);

module.exports = app;
