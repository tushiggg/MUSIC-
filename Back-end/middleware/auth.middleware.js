const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.body.token || req.headers.token;

  if (!token)
    return res.status(403).send("A token is required for authentication");

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
  } catch (err) {
    return res.send({err});
  }
  next();
};

module.exports = verifyToken;
