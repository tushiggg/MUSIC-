const { User } = require("../models");

const createUser = async (req, res) => {
  const body = req.body;
  const user = new User(body);
  let error = User.validate();

  try {
    await song.save();
  } catch (err) {
    error = err;
  }

  res.send(error);
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
    }
    else { 
        res.status(401).json({ message: "password is wrong"});
    }
};
