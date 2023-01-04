const mongoose = require("mongoose");
const { Schema } = mongoose;

const PlayListSchema = new Schema({
  name: { type: String, required: true , maxLength: 20},
  description: String,
  creatorId: Schema.Types.ObjectId,
  createdAt: { type: Date, default: Date.now() },
  isPrivate: Boolean,
  songs: [{ type: Schema.Types.ObjectId, ref: "Song" }],
});
const Playlist = mongoose.model("Playlist", PlayListSchema);

module.exports = Playlist;
