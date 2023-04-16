var listUsers = [];

var ids = 1;

function addUser(firstName, lastName, email, address) {
  id = ids;
  listUsers[1] = {
    id: ids,
    firstName: firstName,
    lastName: lastName,
    email: email,
    address,
  };
  ids++;
}

function updateUser(id, firstName, lastName, email, address) {
  listUsers[id] = {
    id: id,
    firstName: firstName,
    lastName: lastName,
    email: email,
    address: address,
  };
}

function deleteUser(id) {
  listUsers[id];
}

function getListUserID() {
  return Object.keys(listUsers);
}

function getUserDetail(id) {
  return listUsers[id];
}

module.exports = {
  addUser,
  updateUser,
  deleteUser,
  getListUserID,
  getUserDetail,
};
