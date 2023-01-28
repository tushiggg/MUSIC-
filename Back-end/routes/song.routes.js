const { Router } = require("express");
const { songController } = require("../controllers");
const verifyToken = require("../middleware/auth.middleware");
const verifyRole = require("../middleware/role.middleware");

const router = Router();

router
  .all("/", verifyToken)
  .get("/", songController.getSongs)
  .post("/", verifyRole,songController.createSong)
  .get("/:id", songController.getSong)
  .delete("/:id", verifyRole,songController.deleteSong)
  .put("/:id", verifyRole,songController.updateSong);

module.exports = router;
