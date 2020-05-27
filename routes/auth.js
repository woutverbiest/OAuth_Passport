const router = require("express").Router();
const passport = require("passport");

router.get("/login", (req, res, next) => {
  res.render("login");
});

router.get("/logout", (req, res, next) => {
  res.send("logging out");
});

//auth methods
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

router.get("/facebook", (req, res, next) => {
  res.send("loggin in with facebook");
});

router.get("/linkedin", (req, res, next) => {
  res.send("loggin in with linkedin");
});

router.get("/twitter", (req, res, next) => {
  res.send("loggin in with twitter");
});

router.get("/github", (req, res, next) => {
  res.send("loggin in with github");
});

//callbacks
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  res.redirect("/");
});

module.exports = router;
