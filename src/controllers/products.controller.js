const productsSerive = require("../services/products.service");

module.exports = {
  //get all product
  get: (_, res) => {
    productsSerive
      .get()
      .then((data) => {
        res.status(200).json({ products: data });
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  },

  //add product
  add: (req, res) => {
    const data = req.body;

    productsSerive
      .add(data.name, data.price)
      .then(() => {
        res.status(200).json({ message: "Success" });
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  },

  //get item by id
  getItemById: (req, res) => {
    const id = req.params.id;
    productsSerive
      .getItemById(id)
      .then((data) => {
        res.status(200).json({ product: data });
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  },
  //delete product by id
  deleteItemById: (req, res) => {
    const id = req.params.id;
    productsSerive
      .deleteItemById(id)
      .then((data) => {
        res.status(200).json({ product: data });
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  },
};
