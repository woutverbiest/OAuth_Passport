const express = require("express");
const app = express();
const passportSetup = require("./config/passport");
const config = require("./config/config.json")

const authRoutes = require("./routes/auth");

const db = require("./config/database");

db.authenticate()
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log("Error: " + err));

app.use("/auth", authRoutes);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(config.server.port, () => {
  console.log("app listening on port " + config.server.port);
});
