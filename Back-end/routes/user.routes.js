const { Router } = require("express");
const { userController } = require("../controllers");

const router = Router();

router
 .post("/", userController.createUser)
 .get("/", userController.getUsers);

 module.exports = router;