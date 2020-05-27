const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");

const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profile");

const passportSetup = require("./config/passport");
const db = require("./config/database");
const config = require("./config/config.json");

const app = express();

app.set("view engine", "ejs");

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [config.session.cookieKey],
    sameSite: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

db.authenticate()
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log("Error: " + err));

app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(config.server.port, () => {
  console.log("app listening on port " + config.server.port);
});
