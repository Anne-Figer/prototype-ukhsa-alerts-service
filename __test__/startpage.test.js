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

  test("It should have the correct header", done => {
    request(app)
      .get("/")
      .then(response => {
        expect(response.text).toContain("UKHSA Temperature Alerts");
        done();
      });
  });
});