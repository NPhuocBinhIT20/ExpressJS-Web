import express from "express";
import configViewEngine from "./configs/viewEngine";
import bodyParser from "body-parser";
import initWebRouter from "./routes/web";


require("dotenv").config();
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;




app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


configViewEngine(app);
initWebRouter(app);


// app.get("/", (req, res) => {
//   res.render("index.ejs");
// });

app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`);
});

module.exports = app;
