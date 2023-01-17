const { User } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!(username && password)) {
      res.status(400).send("All input is required");
    }

    const oldUser = await User.findOne({username});

    if (oldUser) {
      return res.status(409).send("User Already Exist");
    }
    
    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username: username,
      password: encryptedPassword,
    });

    const token = jwt.sign(
      { user_id: User._id, username: username },
      process.env.TOKEN_KEY || "defaultSecret",
      { expiresIn: "1d" }
    );

    user.token = token;
    
    await user.save();

    res.send("successfully created user");
  } catch (err) {
    console.log(err);
  }
};

const getUsers = async (req, res) => {
  const data = await User.find({});
  res.send(data);
};

const getUser = async (req, res) => {
  const id = req.params.id;
  const user = User.findById(id);
  res.send(user);
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne(username);

  if (user.password === password) {
    res.send(user);
  } else {
    res.status(401).json({ message: "password is wrong" });
  }
};

module.exports = {
  createUser,
  getUser,
  getUsers,
  loginUser,
};
