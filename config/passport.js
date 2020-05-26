const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");

const config = require("./config.json");

passport.use(
  new GoogleStrategy({
    callbackURL: "/auth/google/redirect",
    clientID: config.keys.google.clientID,
    clientSecret: config.keys.google.clientSecret,
  },
  () => {
    //passport callback function
  })
);
