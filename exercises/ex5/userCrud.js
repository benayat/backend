const fs = require('fs');
const uniqueid = require('uniqid');
const getUsers = () => 'your users...';

const saveUsers = (users) => {
  const dataJSON = JSON.stringify(users);
  fs.writeFileSync('users.json', dataJSON);
};
const loadUsers = () => {
  try {
    const buffer = fs.readFileSync('users.json');
    const string = buffer.toString();
    return JSON.parse(string);
  } catch (err) {
    return [];
  }
};
const addUser = (name, email) => {
  const users = loadUsers();
  const duplicateUsers = users.find((user) => user.name === name);
  if (typeof duplicateUsers === 'undefined') {
    users.push({
      id: uniqueid(),
      name: name,
      email: email,
    });
    saveUsers(users);
  } else {
    console.log(`can't insert duplicates`);
  }
};
const updateUser = (id, newName, newEmail) => {
  try {
    const users = loadUsers();
    const index = users.findIndex((user) => user.id === id);
    const user = users.find((user) => user.id === id);
    user.name = newName || user.name;
    user.email = newEmail || user.email;
    users[index] = user;
    saveUsers(users);
  } catch (error) {
    console.log(error);
  }
};
const removeUser = (id) => {
  console.log(id);
  const users = loadUsers();
  const indexToRemove = users.findIndex((user) => user.id === id);
  console.log(indexToRemove);
  if (typeof indexToRemove === 'undefined') return 'not there';
  users.splice(indexToRemove, 1);
  saveUsers(users);
};
const listUsers = () => {
  return loadUsers().map((user) => user.name);
};
const readUser = (id) => {
  return users.find((user) => user.id === id);
};
module.exports = {
  getUsers,
  addUser,
  updateUser,
  saveUsers,
  loadUsers,
  removeUser,
  listUsers,
  readUser,
};
