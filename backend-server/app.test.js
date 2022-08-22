import request from 'supertest';

import app from './app.js';

let server, agent;

beforeAll((done) => {
    server = app.listen(8080, (err) => {
        if (err) return done(err);
        agent = request.agent(server);
        done();
    });
});


afterAll(async () => {
    return server && server.close();
});


describe("Test the root path", () => {
    test("It should response the GET method", async () => {
        await agent.get("/")
        .then(response => {
            expect(response.statusCode).toBe(200);
        });
    }, 10000);
});


describe("Test /locationWeather", () => {
    test("Response with GET, 200 and data", async () => {
        await agent.get("/locationWeather?city=Praha").then(response => {
            expect(response.statusCode).toBe(200);
        });
    }, 10000);
    
});

