const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config();

const keys = require("./config/keys");
const { connect } = require("./config/database");

const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken) => {
      console.log(accessToken);
    }
  )
);

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
