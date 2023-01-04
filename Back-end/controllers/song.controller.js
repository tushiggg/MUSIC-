const { Song } = require("../models");

const createSong = async (req, res) => {
  const body = req.body;
  const song = new Song(body);
  let error = Song.validate();

  try {
    await song.save();
  } catch (err) {
    error = err;
  }

  res.send(error);
};

const getSongs = async (req, res) => {
  const data = await Song.find({});
  res.send(data);
};

const getSong = async (req, res) => {
  const id = req.params.id;
  const data = await Song.findById(id).populate("artist");
  res.send(data);
};

const deleteSong = async (req, res) => {
  const id = req.params.id;
  const del = await Song.deleteOne({ _id: id });
  res.send("deleted");
};

const updateSong = async (req, res) => {
  const songId = req.params.id;
  const artistId = req.body.id;

  const song = await Song.findById(songId);

  song.artist.push(artistId);

  await song.save();

  res.send("updated");
};

module.exports = {
  createSong,
  getSong,
  getSongs,
  deleteSong,
  updateSong,
};
