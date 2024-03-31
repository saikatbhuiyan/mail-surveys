const express = require("express");
require("dotenv").config();

require("./models/User");
require("./services/passport");

const { connect } = require("./config/database");

const app = express();

app.get("/auth/google", (req, res) => {});

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send({ server: "localhost" });
});

const setupAndStartServer = function () {
  app.listen(PORT, async function () {
    console.log(`Server started at PORT ${PORT}`);
    await connect();
    console.log("Mongo db connected");
  });
};

setupAndStartServer();
