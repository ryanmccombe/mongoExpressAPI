const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://172.17.0.3/muber');

const app = express();

app.use(bodyParser.json());
routes(app);

module.exports = app;