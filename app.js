var express = require('express');
const cors = require('cors');
var app = express();
const bodyParser = require('body-parser');
var db = require('./db');
global.__root   = __dirname + '/';

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
const noteRoutes = require('./routes/notes-route');
const colorRoutes = require('./routes/color-routes');
const authContollers = require('./auth/AuthController');

app.use('/api/v1/', noteRoutes);
app.use('/api/v1/', colorRoutes);
app.use('/api/auth', authContollers);

module.exports = app;
