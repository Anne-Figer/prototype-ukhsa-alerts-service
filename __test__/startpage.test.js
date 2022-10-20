const request = require("supertest");
const app = require('../server.js')

describe("Test GET /", () => {
  test("It should return OK", done => {
    request(app)
      .get("/startpage")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

});