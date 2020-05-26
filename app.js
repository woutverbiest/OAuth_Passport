const express = require("express");
const app = express();
const passportSetup = require("./config/passport");

const authRoutes = require("./routes/auth");

app.use("/auth", authRoutes);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(8080, () => {
  console.log("app listening on port 8080");
});
