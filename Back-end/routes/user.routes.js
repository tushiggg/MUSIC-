const { Router } = require("express");
const { userController } = require("../controllers");
const verifyToken = require("../middleware/auth.middleware");
const verifyRole = require("../middleware/role.middleware");

const router = Router();

router
  .all("/", verifyToken)
  .get("/", verifyRole(401), userController.getUsers)
  .get("/:id", userController.getUser)
  .post("/", userController.createUser);

module.exports = router;
