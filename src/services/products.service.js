const db = require("../configs/connectDB");

module.exports = {
  get: () => {
    return new Promise((resolve, reject) => {
      try {
        const sql = "SELECT * FROM products";
        const data = [];
        db.query(sql, [], (err, res) => {
          if (err) return reject(err);

          res.map((item) => {
            data.push({
              id: item.id,
              name: item.name,
              price: item.price,
            });
          });
          return resolve(data);
        });
      } catch (error) {
        return reject(error);
      }
    });
  },
  add: (name, price) => {
    return new Promise((resolve, reject) => {
      try {
        const sql = "INSERT INTO products (name, price) VALUES (?, ?)";
        db.query(sql, [name, price], (err, _) => {
          if (err) return reject(err);
          return resolve("");
        });
      } catch (error) {
        return reject(error);
      }
    });
  },
  getItemById: (id) => {
    return new Promise((resolve, reject) => {
      try {
        const sql = "SELECT * FROM products WHERE id = ?";
        db.query(sql, [id], (err, res) => {
          if (err) return reject(err);
          return resolve(res[0]);
        });
      } catch (error) {
        return reject(error);
      }
    });
  },
  deleteItemById: (id) => {
    return new Promise((resolve, reject) => {
      try {
        const sql = "DELETE FROM products WHERE id = ?";
        db.query(sql, [id], (err, res) => {
          if (err) return reject(err);
          return resolve(res[0]);
        });
      } catch (error) {
        return reject(error);
      }
    });
  },
};
