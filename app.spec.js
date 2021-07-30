const request = require("supertest");
const startApp = require("./app");

describe("app", () => {
  test("test", async () => {
    const { server, appsignal } = startApp();
    await request("http://localhost:10000").get("/").expect(200);

    appsignal.stop();
    server.close();
  });
});
