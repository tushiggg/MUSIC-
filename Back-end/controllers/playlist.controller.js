const { Playlist } = require("../models");

var n = 0;

const createPlaylist = async (req, res) => {
  const body = req.body;
  const lists = new Playlist({ name: `My Playlist #${n = n + 1}` });
  const result = await lists.save();
  res.send(result);
};

const getPlaylists = async (req, res) => {
  const data = await Playlist.find({});
  res.send(data);
};

const getPlaylist = async (req, res) => {
  const id = req.params.id;
  const data = await Playlist.findById(id).populate("songs");
  res.send(data);
};

const updatePlaylist = async (req, res) => {
  const playlistId = req.params.id;
  const songId = req.body.id;

  const playlist = await Playlist.findById(playlistId);
  
  playlist.songs.push(songId);

  await playlist.save();

  res.send("updated");
};

const deletePlaylist = async (req, res) => {
  const id = req.params.id;

  n = n - 1;
  const del = await Playlist.deleteOne({ _id: id });

  res.send("deleted");
};

//   const addToPlaylist = async ( req , res ) => {

//   const playlistId = req.query.playlistId;
//   const songId = req.params.id;

//   const playlist = await Playlist.findById(playlistId);
//   playlist.songs.push(songId);

//   await playlist.save();

//   res.send(playlist);

// }

module.exports = {
  createPlaylist,
  getPlaylist,
  getPlaylists,
  updatePlaylist,
  deletePlaylist,
};
