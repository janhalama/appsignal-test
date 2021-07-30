const Appsignal = require("@appsignal/nodejs").Appsignal;
const expressMiddleware = require("@appsignal/express").expressMiddleware;
const express = require("express");

function startApp() {
  const appsignal = new Appsignal({
    active: true,
    name: "express-test",
    apiKey: process.env.APPSIGNAL_PUSH_API_KEY,
  });

  const app = express();

  app.use(expressMiddleware(appsignal));

  app.get("/", function (req, res) {
    res.send("Hello World!");
  });

  const port = "10000";
  const server = app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });

  return {
    server,
    appsignal,
  };
}

module.exports = startApp;
