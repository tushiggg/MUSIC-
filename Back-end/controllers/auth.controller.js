const { User } = require("../models");
const bcrypt = require("bcrypt");
const { signToken } = require("../services");

const signUp = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      res.status(400).send("All input is required");
    }

    const oldUser = await User.findOne({ username });

    if (oldUser) {
      return res.status(409).send("User Already Exist");
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username: username,
      password: encryptedPassword,
    });

    const token = await signToken({ username });

    user.token = token;

    await user.save();

    res.send(token);
  } catch (err) {
    console.log(err);
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!(username && password))
      return res.status(400).send("All input is required");

    const user = await User.findOne({ username });

    if (await bcrypt.compare(password, user.password)) {
      const token = await signToken({ username });

      user.token = token;

      res.send(token);
    }

    res.status(401).json({ message: "password is wrong" });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  loginUser,
  signUp,
};
