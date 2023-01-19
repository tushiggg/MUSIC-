const { User } = require("../models");

const getUsers = async (req, res) => {
  const data = await User.find({});
  res.send(data);
};

const getUser = async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  res.send(user);
};

module.exports = {
  getUser,
  getUsers,
};
