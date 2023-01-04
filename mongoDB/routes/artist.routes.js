const { Router } = require("express");
const { artistController } = require('../controllers');

const router = Router();

router
.post("/", artistController.createArtist)
.get("/", artistController.getArtists)
.get("/:id", artistController.getArtist)
.put("/:id", artistController.updateArtist)
.delete("/id", artistController.deleteArtist)

module.exports = router;