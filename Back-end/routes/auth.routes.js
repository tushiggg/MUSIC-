const { Router } = require("express");
const { authController } = require("../controllers");
const verifyToken = require("../middleware/auth.middleware");

const router = Router();

router
  .post("/login", authController.loginUser)
  .post("/signup", authController.signUp);

module.exports = router;