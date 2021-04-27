const User = require("../model/User");
const jwt = require("jsonwebtoken");
// const { createJWT } = require("../utils/auth");

async function create(req, res) {
  try {
    console.log(req.body);
    let user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    console.log(e.message);
    res.status(400).send(e);
  }
}
async function getAll(req, res) {
  try {
    let users = await User.find({});
    console.log(users);
    res.status(200).send(users);
  } catch (e) {
    console.log(e.message);
    res.status(400).send("not found couldn't get all");
  }
}

async function get(req, res) {
  try {
    const user = User.find({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
    });
    res.status(200).send(user);
  } catch (e) {
    console.log(e.message);
    res.send(e);
  }
}

async function updateUser(req, res) {
  try {
    await User.updateOne({ firstName: req.query.firstName }, req.body, {
      new: true,
    });
    const user = await User.findById(req.query.id);
    console.log(user);
    const result = await user.save();
    res.status(200).send(result);
  } catch (e) {
    console.log(e.message);
    res.status(500).send(e);
  }
}
async function deleteUser(req, res) {
  try {
    console.log(req.query.firstName, req.query.lastName, req.query.password);

    await User.deleteOne({
      firstName: req.query.firstName,
    });
  } catch (e) {
    console.log(e.message);
    res.status(500).send(e);
  }
}

const signin = (req, res) => {};
module.exports = {
  create,
  getAll,
  get,
  updateUser,
  deleteUser,
};
