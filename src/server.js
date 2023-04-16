const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes"); //importing route
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));

routes(app);

app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`);
});

module.exports = app;
