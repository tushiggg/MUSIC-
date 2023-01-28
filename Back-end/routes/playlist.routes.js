const { Router } = require("express");
const { playlistController } = require("../controllers");
const verifyToken = require("../middleware/auth.middleware");

const router = Router();

router
  .all("/", verifyToken)
  .get("/", playlistController.getPlaylists)
  .post("/", playlistController.createPlaylist)
  .get("/:id", playlistController.getPlaylist)
  .put("/:id", playlistController.updatePlaylist)
  .delete("/:id", playlistController.deletePlaylist);
// .put("/playlist/:id", playlistController.addToPlaylist);

module.exports = router;
