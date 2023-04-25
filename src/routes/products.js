const products = require("../controllers/products.controller");

module.exports = function (app) {
  app.route("/products").get(products.get).post(products.add);
  app
    .route("/product/:id")
    .get(products.getItemById)
    .delete(products.deleteItemById);
};
