/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const request = require('supertest');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');


describe('GET /videogames?name=...', () => {
  it('should get a 15 results', () =>
    request(app)
    .get('/videogames?name=portal')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(function (res) {
        expect(res.body).length(15);
      })
  );
  it('should get 404 status if name does not exist', () =>
    request(app)
    .get('/videogames?name=anybadname')
      .expect(404)
  );
});
