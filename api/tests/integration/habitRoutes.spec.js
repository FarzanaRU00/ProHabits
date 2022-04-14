const { request } = require("../../server");

// GET (all habits)
describe("GET /", () => {
    let api;
    beforeAll(async () => {
        await resetTestDb();
    });
    beforeAll(async () => {
        api = app.listen(5000, () => {
            console.log("test server is running on port 5000")
        })
    })
    afterAll((done) => {
        console.log("stopping the test server")
        api.close(done);
    });
    test("responds with a 200 status code", (done) => {
        request(api).get("/habits/").expect(200,done);
    })
})


// GET (show habits)

describe("GET /:id", () => {
    let api;
    beforeAll(async () => {
        await resetTestDb();
    });
    beforeAll(async () => {
        api = app.listen(5000, () => {
            console.log("test server is running on port 5000!")
        })
    })
    afterAll((done) => {
        console.log('stopping the test server');
        api.close(done);
    });
    test("responds with a status code of 200", (done) => {
        request(api).get("/habits/1").expect(200, done);
    });

    test("responds with user's habits", (done) => {
        request(api)
        .get("/habits/1")
        .expect(
            [
                {   
                    userId: 1,
                    name: "water",
                    frequency: "2",
                    measurement: "liters"
                }
            ],
            done
        );
    });

    test("responds with json", (done) => {
        request.api.get("/habits/1").expect("Content-Type", /json/, done);
    });
})



// CREATE
describe("POST /", () => {
    let api;

    beforeAll(async () => {
        await resetTestDb();
        api = app.listen(5000, () => {
            console.log("Test server is running on port 5000!")
        });
    });

    afterAll((done) => {
        console.log("stopping the test server");
        api.close(done);
    });

    test("responds with a status code of 200", (done) => {
        request(api).post("/habits/").expect(200, done);
    });
})