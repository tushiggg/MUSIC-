const mongoose = require("mongoose");
const { Schema } = mongoose;

const SongSchema = new mongoose.Schema({
  name: { type: String, required: true},
  artist: [{ type: Schema.Types.ObjectId, ref: "Artist"}],
  genre: { type: String, required: true},
  durationAt: { type: Date, default: Date.now() },
  url: String,
});

const Song = mongoose.model(`Song`, SongSchema);

module.exports = Song;
