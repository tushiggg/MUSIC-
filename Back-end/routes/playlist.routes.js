const { Router } = require("express");
const { playlistController } = require("../controllers");

const router = Router();

router
  .get("/", playlistController.getPlaylists)
  .post("/", playlistController.createPlaylist)
  .get("/:id", playlistController.getPlaylist)
  .put("/:id", playlistController.updatePlaylist)
  .delete("/:id", playlistController.deletePlaylist);
// .put("/playlist/:id", playlistController.addToPlaylist);

module.exports = router;
