const jwt = require("jsonwebtoken");

const signToken = (payload) => {
  const token = jwt.sign(payload, process.env.TOKEN_KEY, {
    expiresIn: "1d",
  });
  return token;
};

module.exports = signToken;
