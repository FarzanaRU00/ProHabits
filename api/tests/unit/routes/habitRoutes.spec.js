// CREATE

const { TestWatcher } = require("jest");
const { request } = require("../../../server");

describe("POST /", () => {
    let api;

    beforeAll(async () => {
        await resetTestDb();
        api = app.listen(5000, () =>
            console.log("Test server is running on port 5000!")
        );
    });

    afterAll((done) => {
        console.log("stopping the test server");
        api.close(done);
    });

    test("responds with a status code of 200", (done) => {
        request(api).post("/habits/").expect(200, done);
    });
})