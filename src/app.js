const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");

require("dotenv").config();

// server config
const app = express();
const server = http.Server(app);
app.use(cors());

//app
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

// rotas
app.use("/", require("./routes"));

module.exports = { app: app, server: server };
