const express = require("express");
const cookieSession = require("cookie-session");
require("dotenv").config();

require("./models/User");
require("./services/passport");

const { connect } = require("./config/database");
const keys = require("./config/keys");

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60, // 30 days
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

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
