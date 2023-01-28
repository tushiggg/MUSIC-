const { Router } = require("express");
const { artistController } = require('../controllers');
const verifyToken = require("../middleware/auth.middleware");
const verifyRole = require("../middleware/role.middleware");

const router = Router();

router
.all("/", verifyRole)
.all( "/", verifyToken)
.post("/", artistController.createArtist)
.get("/", artistController.getArtists)
.get("/:id", artistController.getArtist)
.put("/:id", artistController.updateArtist)
.delete("/id", artistController.deleteArtist)

module.exports = router;