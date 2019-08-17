const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");

// TODO: import routers here

server.use(helmet());
server.use(bodyParser.json());
server.use(cors());

server.get("/", (req, res) => {
  res.send(
    "<h1>The Servable server. Be happy, I can crash at any minute.</h1>"
  );
});

// TODO: Implement routers here

module.exports = server;
