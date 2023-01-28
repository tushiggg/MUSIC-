const { User } = require("../models");

const getUsers = async (req, res) => {
  try {
    const data = await User.find(
      {},
      {
        password: 0,
      }
    );
    res.send(data);
  } catch (error) {
    throw res.send(error);
  }
};

const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id, {
      password: 0,
    });
    user.roles = Object.values(user.roles);
    res.send(user);
  } catch (error) {
    throw res.send(error);
  }
};

const createUser = async (req, res) => {
  const { username, password, roles } = req.body || {};

  if (!username || !password)
    return res.send("username, password is required");

  try {
    const encryptedPassword = await bcrypt.hash(password, 10);

    const userDocument = new User({
      username,
      password: encryptedPassword,
      roles,
    });
    const user = await userDocument.save();
    user.roles = Object.values(roles);
    res.send(user);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getUser,
  getUsers,
  createUser,
};
