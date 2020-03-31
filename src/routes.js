const express = require("express");
const routes = express.Router();

const MailController = require("./controller/MailController");

routes.get("/", (req, res) => {
  res.send(`Brasforno Microservice v${process.env.APP_VERSION}`);
});

//Mail
routes.post("/sendmail", MailController.store);

module.exports = routes;
