const mongoose = require('mongoose');
const assert = require('assert');
const request = require('supertest');
const app = require('../../app');

const Driver = mongoose.model('driver');

describe('Drivers controller', () => {
    it('creates a new driver', (done) => {
        Driver.count().then(count => {
            request(app)
                .post('/api/drivers')
                .send({ email: 'test@test.com' })
                .end((err, res) => {
                    Driver.count().then(newCount => {
                        assert(newCount === count + 1);
                        done();
                    })
                });
        })
    })
});