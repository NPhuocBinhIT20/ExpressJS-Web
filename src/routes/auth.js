const auth = require("../controllers/auth.controller");

module.exports = function (app) {
  app.route("/index").get(auth.getAll); 
  app.route("/register").post(auth.addUser);
  app.route("/login").post(auth.getUser);
  app.route("/user/:id").get(auth.getUserById).put(auth.updateUserById);
};
