const mongoose = require("mongoose");
const { Schema } = mongoose;

const ArtistSchema = new Schema({
    name: { type: String, required: true, maxLength: 20},
});

const Artist = mongoose.model("Artist", ArtistSchema);

module.exports = Artist;
