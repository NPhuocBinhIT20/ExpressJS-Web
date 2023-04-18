const auth = require("../controllers/auth.controller");

module.exports = function (app) {
  app.route("/register").post(auth.addUser);
  app.route("/login").post(auth.getUser);
};
