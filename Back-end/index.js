const express = require("express");
const cors = require("cors");
const connect = require("./helper/db");
const { default: mongoose } = require("mongoose");
const routes = require("./routes");

const port = 8080;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/playlist", routes.playlistRoute);
app.use("/song", routes.songRoute);
app.use("/artist", routes.artistRoute);
app.use("/user", routes.userRoute);

connect();

app.get("/", async (req, res) => {
  await connect();
  res.send("no");
});

app.listen(port);
