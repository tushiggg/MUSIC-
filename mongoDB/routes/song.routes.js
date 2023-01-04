const { Router } = require("express");
const { songController } = require("../controllers");

const router = Router();

router
  .get("/", songController.getSongs)
  .post("/", songController.createSong)
  .get("/:id", songController.getSong)
  .delete("/:id", songController.deleteSong)
  .put("/:id", songController.updateSong);

module.exports = router;
