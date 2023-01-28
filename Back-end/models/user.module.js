const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  creatdAt: { type: Date, default: Date.now() },
  token: { type: String },
  role: { type: Array, default: { User: 200 } },
});

const User = mongoose.model(`User`, userSchema);

module.exports = User;
