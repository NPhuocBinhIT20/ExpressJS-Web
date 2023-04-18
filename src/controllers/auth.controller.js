const authService = require("../services/auth.service")

module.exports = {
    addUser: (req, res) => {
        const data = req.body;
    
        authService
          .add(data.name, data.email, data.password, data.password_confirm)
          .then(() => {
            res.status(200).json({ message: "Success" });
          })
          .catch((err) => {
            res.status(500).json({ error: err });
          });
      },
      getUser: (req, res) => {
        const id = req.params.email;
        authService
          .getUser(email)
          .then((data) => {
            res.status(200).json({ product: data });
          })
          .catch((err) => {
            res.status(500).json({ error: err });
          });
      } 
}