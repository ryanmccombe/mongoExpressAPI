const assert = require('assert');
const request = require('supertest');
const app = require('../app');

describe('Express app', () => {
    it('listens to GET requests on /api', (done) => {
        request(app)
            .get('/api')
            .end((err, res) => {
                assert(res.body.hi === 'there');
                done();
            });
    });
});