const mongoose = require('mongoose');

before(done => {
    mongoose.connect('mongodb://172.17.0.3/muber_test');
    mongoose.connection
        .once('open', () => done())
        .on('error', err => console.error(err))
});

beforeEach(done => {
    const { drivers } = mongoose.connection.collections;
    drivers.drop()
        .then(() => done())
        .catch(() => done())
});