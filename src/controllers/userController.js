// import user from "../models/user.model";
const user = require("../models/user.model")

exports.getUserCreate = (req, res, next) => {
  res.render("./user/addUser");
}

exports.postUserCreate = (req, res, next) => {
  // lấy tất cả dữ liệu được gửi từ form 
  const data = req.body;
  //insert vào db
  user.addUser(data.firstname, data.lastname, data.email, data.address);
  res.redirect('/');
}

// deatail user

exports.getUserDetail = (req, res, next) => {
  // lấy ID từ method GET
  const ID = req.params.id;
  // truy vấn DB theo ID 
  const data = user.getUserDetail(ID);
  res.render('./user/detailUser', {data: data});
}

//GET & POST update user
exports.getUserUpdate = (req, res, next) => {
  const ID = req.params.id;
  const data = user.getUserDetail(ID);
  res.render('./user/updateUser', {data: data});
}

exports.postUserUpdate = (req, res, next)=>{
  const ID = req.params.id;
  const data = req.body;
  user.updateUser(data.firstname, data.lastname, data.email, data.address);
  res.redirect('/');
}

//GET  & POST delete user

exports.userDelete = (req, res, next) => {
  const ID = req.params.id;
  const data = user.getUserDetail(ID);
  res.render('./user/deleteUser', { data : data });
}

exports.postUserDelete = (req, res, next) => {
  const ID = req.params.id;
  user.deleteUser(ID);
  res.redirect('/');
}

