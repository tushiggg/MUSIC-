const { Artist } = require("../models");

const createArtist = async (req, res) => {
  const body = req.body;
  const artist = new Artist(body);
  let error = Artist.validate();

  try {
    await artist.save();
  } catch (err) {
    error = err;
  }
  res.send(error)
};

const getArtist = async (req, res) => {
    const id = req.params.id;
    const data = await Artist.findById(id);
    res.send(data);
};

const getArtists = async (req, res) => {
    const data = await Artist.find({});
    res.send(data);
};

const updateArtist = async (req, res) => {};

const deleteArtist = async (req, res) => {};

module.exports = {
  createArtist,
  getArtist,
  getArtists,
  updateArtist,
  deleteArtist,
};
