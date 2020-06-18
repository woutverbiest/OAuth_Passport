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

router.get("/facebook", passport.authenticate("facebook"));

router.get("/github", passport.authenticate("github"));

router.get("/linkedin", passport.authenticate("linkedin"));

router.get("/twitter", passport.authenticate("twitter"));

//callbacks
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  res.redirect("/");
});
router.get(
  "/facebook/redirect",
  passport.authenticate("facebook"),
  (req, res) => {
    res.redirect("/");
  }
);
router.get("/github/redirect", passport.authenticate("github"), (req, res) => {
  res.redirect("/");
});
router.get(
  "/linkedin/redirect",
  passport.authenticate("linkedin"),
  (req, res) => {
    res.redirect("/");
  }
);
router.get(
  "/twitter/redirect",
  passport.authenticate("twitter"),
  (req, res) => {
    res.redirect("/");
  }
);

module.exports = router;
