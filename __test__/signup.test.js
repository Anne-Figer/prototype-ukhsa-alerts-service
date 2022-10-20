const request = require("supertest");
const app = require('../server.js');
const { User } = require('../models');

const params = {
    email: "test@example.com"
};

describe("Signup post", () => {
    test("It should return OK", done => {
      request(app)
        .post("/signup")
        .send(params)
        .then(response => {
          expect(response.statusCode).toBe(200);
          done();
        });
    });

    test("It save a user", async() => {
        const count = await User.count();
        try {
            const count = await User.count()
            await request(app).post('/signup').send(params)
            const newCount = await User.count()
            expect(newCount).toBe(count + 1)
        } catch (err) {
            console.log(`Error ${err}`)
        }
    });
})

afterAll(async() => {
    await User.sequelize.close();
});