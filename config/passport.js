const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const User = require("../models/user");

const config = require("./config.json");

passport.use(
  new GoogleStrategy(
    {
      callbackURL: "/auth/google/redirect",
      clientID: config.keys.google.clientID,
      clientSecret: config.keys.google.clientSecret,
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      createUser(profile.provider, profile.id, profile.displayName);
    }
  )
);

async function createUser(provider, id, name){
  const user = await User.create({
    id: provider + "_" + id,
    username: name,
  }).catch((err) => {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  });

  console.log(user);
}
