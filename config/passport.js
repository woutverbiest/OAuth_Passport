const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const GitHubStrategy = require("passport-github").Strategy;
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
const User = require("../models/user");

const config = require("./config.json");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findByPk(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      callbackURL: "/auth/google/redirect",
      clientID: config.keys.google.clientID,
      clientSecret: config.keys.google.clientSecret,
    },
    (accessToken, refreshToken, profile, done) => {
      User.findByPk(profile.provider + "_" + profile.id).then((user) => {
        if (user) {
          done(null, user);
        } else {
          User.create({
            id: profile.provider + "_" + profile.id,
            username: profile.displayName,
          }).then((user) => {
            done(null, user);
          });
        }
      });
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      callbackURL: "/auth/facebook/redirect",
      clientID: config.keys.facebook.clientID,
      clientSecret: config.keys.facebook.clientSecret,
    },
    (accessToken, refreshToken, profile, done) => {
      User.findByPk(profile.provider + "_" + profile.id).then((user) => {
        if (user) {
          done(null, user);
        } else {
          User.create({
            id: profile.provider + "_" + profile.id,
            username: profile.displayName,
          }).then((user) => {
            done(null, user);
          });
        }
      });
    }
  )
);

passport.use(
  new GitHubStrategy(
    {
      callbackURL: "/auth/github/redirect",
      clientID: config.keys.github.clientID,
      clientSecret: config.keys.github.clientSecret,
    },
    (accessToken, refreshToken, profile, done) => {
      User.findByPk(profile.provider + "_" + profile.id).then((user) => {
        if (user) {
          done(null, user);
        } else {
          User.create({
            id: profile.provider + "_" + profile.id,
            username: profile.displayName,
          }).then((user) => {
            done(null, user);
          });
        }
      });
    }
  )
);

passport.use(
  new LinkedInStrategy(
    {
      callbackURL: "/auth/linkedin/redirect",
      clientID: config.keys.linkedin.clientID,
      clientSecret: config.keys.linkedin.clientSecret,
      scope: ['r_emailaddress', 'r_basicprofile'],
    },
    (accessToken, refreshToken, profile, done) => {
      User.findByPk(profile.provider + "_" + profile.id).then((user) => {
        if (user) {
          done(null, user);
        } else {
          User.create({
            id: profile.provider + "_" + profile.id,
            username: profile.displayName,
          }).then((user) => {
            done(null, user);
          });
        }
      });
    }
  )
)
