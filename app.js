const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

mongoose.Promise = global.Promise;
if(process.env.NODE_ENV !== 'test') {
    mongoose.connect('mongodb://172.17.0.3/muber');
}

const app = express();

app.use(bodyParser.json());
routes(app);

app.use((err, req, res, next) => {
    err && res.status(422).send({ error: err.message });
});

module.exports = app;