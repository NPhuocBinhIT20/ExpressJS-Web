const db = require("../configs/connectDB");

module.exports = {
    addUser: (name, email, password) => {
        return new Promise((resolve, reject) => {
          try {
            const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
            db.query(sql, [name, email, password], (err, _) => {
              if (err) return reject(err);
              return resolve("");
            });
          } catch (error) {
            return reject(error);
          }
        });
    },
    getUser: (email) => {
        return new Promise((resolve, reject) => {
          try {
            const sql = "SELECT email FROM users WHERE email = ?";
            db.query(sql, [email], (err, res) => {
              if (err) return reject(err);
              return resolve(res[0]);
            });
          } catch (error) {
            return reject(error);
          }
        });
      }
    
}