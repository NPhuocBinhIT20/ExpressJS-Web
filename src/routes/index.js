const productsRouter = require("./products");
const authRouter = require("./auth");

module.exports = function (app) {
  productsRouter(app);
};
 module.exports = function (app) {
  authRouter(app);
 }
