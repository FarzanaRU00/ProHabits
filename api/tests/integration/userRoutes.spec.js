describe("GET /", () => {
    let api;
  
    beforeAll(async () => {
      api = app.listen(5000, () =>
        console.log("Test server is running on port 5000")
      );
    });
  
    afterAll((done) => {
      console.log("stopping the test server");
      api.close(done);
    });
  
  
    test("responds with status code 500", (done) => {
      request(api)
      .get("/users/")
      .expect(500, done);
    });
  
    test("responds with error message", (done) => {
      request(api).get("/users/").expect({ err: 'Could not retrieve users: Error: connect ECONNREFUSED 127.0.0.1:5432'}, done);
    });
  
    test("responds with json", (done) => {
      request(api)
      .get("/users/")
      .expect("Content-Type", /json/, done);
    });
  });
  
  describe("GET /:username", () => {
    let api;
  
    beforeAll(async () => {
      api = app.listen(5000, () =>
        console.log("Test server is running on port 5000")
      );
    });
  
    afterAll((done) => {
      console.log("Stopping the test server");
      api.close(done);
    });
  
    test("responds with error code 404", (done) => {
      request(api).get("/users/100").expect(404, done);
    });

    test("responds with user's info", (done) => {
        request(api).get("/users/1").expect({id: 1, name: "test1", email: "test1@gmail.com", password_digest: "prohabits123"},done);
    });

     test("responds with Missing Token message", (done) => {
        request(api).get("/users/1").expect({ err: "Missing token" }, done);
    });
  
    test("responds with json", (done) => {
      request(api).get("/users/").expect("Content-Type", /json/, done);
    });
  });
  