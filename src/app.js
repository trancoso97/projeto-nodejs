const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true}));

const indexRoute = require('./routes/index');

app.use('/', indexRoute);

module.exports = app;