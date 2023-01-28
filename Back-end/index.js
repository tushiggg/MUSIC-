const express = require("express");
const cors = require("cors");

require('dotenv').config()

const connect = require("./helper/db");
const routes = require("./routes");

const app = express();

const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

connect();

app.use("/playlist", routes.playlistRoute);
app.use("/song", routes.songRoute);
app.use("/artist", routes.artistRoute);
app.use("/user", routes.userRoute, routes.auhtRoute);

app.get("/", async (req, res) => {
  await connect();
  res.send("no");
});

app.listen(port, () => {
  console.log("Server is running at: http://localhost:" + port);
});