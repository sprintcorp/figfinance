const request = require('supertest');
const app = require('../server')

describe('GET /categories', function() {
  it('List all categories', function(done) {
    request(app)
      .get('/api/categories')
      .expect(200, done);
  });
});

describe('GET /events', function() {
  it('List all events', function(done) {
    request(app)
      .get('/api/events')
      .expect(200, done);
  });
});

describe('GET /events by interest', function() {
  it('Filter event by categories', function(done) {
    request(app)
      .get('/api/events/filter?category=62aca885d4e6ea4a32149bd1')
      .expect(200, done);
  });
});

describe('POST /add-event', function() {
  it('Add a event', function(done) {
    request(app)
      .post('/api/events')
      .send({
        title:"Space jam",
        description:"This session seeks to get people thinking about the ultimate objective of health AI",
        category:"62aca885d4e6ea4a32149bd1",
        date:"2021-07-17T10:00:00.000Z",
        isVirtual:"false",
        address:"London, United Kingdom"
      })
      .expect(201, done);
  });
});


describe('POST /import categories', function() {
  it('Import categories', function(done) {
    request(app)
      .post('/api/categories')
      .send([{
        name:"Tech",
      },{
        name:"politics",
      }])
      .expect(200, done);
  });
});
