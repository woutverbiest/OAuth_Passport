const router = require("express").Router();
const passport = require("passport");

router.get("/login", (req, res, next) => {
  res.render("login");
});

router.get("/logout", (req, res, next) => {
  req.logout();
  res.redirect("/");
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
router.get("/facebook/redirect", (req, res, next) => {
  res.send("redirecting from facebook");
});
router.get("/linkedin/redirect", (req, res, next) => {
  res.send("redirecting from linkedin");
});
router.get("/twitter/redirect", (req, res, next) => {
  res.send("redirecting from twitter");
});
router.get("/github/redirect", (req, res, next) => {
  res.send("redirecting from github");
});

module.exports = router;
