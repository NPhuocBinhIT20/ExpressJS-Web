const db = require("../configs/connectDB");

module.exports = {
  addUser: (username, email, password) => {
    return new Promise((resolve, reject) => {
      try {
        //check username
        const sql = "SELECT * FROM users WHERE username = ?";
        db.query(sql, [username], (err, res) => {
          if (err) return reject(err);

          if (!res[0]) {
            //add users
            const sql =
              "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
            db.query(sql, [username, email, password], (err, _) => {
              if (err) return reject(err);
              return resolve(true);
            });
          } else return resolve(false);
        });
      } catch (error) {
        return reject(error);
      }
    });
  },
  getUser: (username) => {
    return new Promise((resolve, reject) => {
      try {
        const sql = "SELECT * FROM users WHERE username = ?";
        db.query(sql, [username], (err, res) => {
          if (err) return reject(err);
          return resolve(res[0]);
        });
      } catch (error) {
        return reject(error);
      }
    });
  },
};
