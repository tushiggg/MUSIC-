const { Router } = require("express");
const { userController } = require("../controllers");
const verifyToken = require("../middleware/auth.middleware");

const router = Router();

router
  .get("/", verifyToken, userController.getUsers)
  .get("/:id", verifyToken, userController.getUser);

module.exports = router;
