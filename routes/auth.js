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

router.get("/linkedin", passport.authenticate("linkedin")
);

router.get("/twitter", (req, res, next) => {
  res.send("loggin in with twitter");
});

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
  (req, res, next) => {
    res.redirect("/");
  }
);
router.get("/twitter/redirect", (req, res, next) => {
  res.send("redirecting from twitter");
});

module.exports = router;
