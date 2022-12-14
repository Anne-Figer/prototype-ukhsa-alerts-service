const request = require("supertest");
const app = require('../server.js')

describe("Test GET /", () => {
  
  test("It should return OK", done => {
    request(app)
      .get("/")
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

  test("It should display an alert level", done => {
    request(app)
      .get("/")
      .then(response => {
        expect(response.text).toContain("Alert level");
        done();
      });
  });

  test("It should contain a link to the start page", done => {
    request(app)
      .get("/")
      .then(response => {
        expect(response.text).toContain('<a href="/startpage" role="button" draggable="false" class="govuk-button" data-module="govuk-button">Sign up to alerts</a>');
        done();
      });
    });
});