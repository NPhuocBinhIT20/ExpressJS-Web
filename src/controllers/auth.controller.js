const authService = require("../services/auth.service");
const bcrypt = require("bcryptjs");
const Promise = require("bluebird");
module.exports = {
  addUser: (req, res) => {
    const data = req.body;

    authService
      .addUser(data.username, data.email, data.password)
      .then((status) => {
        if (status) res.status(200).json({message: "Success"});
        else res.status(400).json({message: "Username exist"});
      })
      .catch((err) => {
        res.status(500).json({error: err});
      });
  },

  getUser: async (req, res) => {
    const data = req.body;
    const password = await bcrypt.hash(data.password, 1);
    authService
      .getUser(data.username)
      .then(async (data) => {
        if (data) {
          const checkPassword = await bcrypt.compare(data.password, password);
          if (checkPassword) {
            res.status(200).json({
              id: data.id,
              name: data.username,
              email: data.email,
            });
          } else {
            res.status(400).json({message: "User does not exist"});
          }
        } else {
          res.status(400).json({message: "User does not exist"});
        }
      })
      .catch((err) => {
        res.status(500).json({error: err});
      });
  },
  getAll: (_, res) => {
    authService
      .getAll()
      .then((data) => {
        res.status(200).json({users: data});
      })
      .catch((err) => {
        res.status(500).json({error: err});
      });
  },
  getUserById: (req, res) => {
    const id = req.params.id;
    authService
      .getUserById(id)
      .then((data) => {
        res.status(200).json({user: data});
      })
      .catch((err) => {
        res.status(500).json({error: err});
      });
  },
  updateUserById: (req, res) => {
    const id = req.params.id;
    const data = req.body;

    authService
      .updateUserById(data.username, data.email, data.password)
      .then((status) => {
        if (status) res.status(200).json({message: "Update Success"});
        else res.status(400).json({message: "Error update"});
      })
      .catch((err) => {
        res.status(500).json({error: err});
      });
  },
  login: (username, password) => {
    return Promise((resolve, reject) => {
      if (true) {
        resolve({
          success: true,
          data: {
            _id: 1,
            token: "1234",
          },
        });
      } else {
        reject({
          success: false,
          message: "Email not exist",
        });
      }
    });
  },
};
