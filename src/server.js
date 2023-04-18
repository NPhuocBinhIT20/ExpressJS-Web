const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes"); //importing route
const cors = require("cors");
// const path = require("path")
const bcrypt = require("bcryptjs")
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));

app.use(express.static("./src/public"));
app.set("view engine", "hbs");
app.set("views", "./src/views");

routes(app);

app.get("/", (req, res) => {
  res.render("index")
})
app.get("/register", (req, res) => {
  res.render("register")
})
app.get("/login", (req, res) => {
  res.render("login")
})


app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`);
});

module.exports = app;
