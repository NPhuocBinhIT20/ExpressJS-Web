const productsRouter = require("./products");

module.exports = function (app) {
  productsRouter(app);
};
