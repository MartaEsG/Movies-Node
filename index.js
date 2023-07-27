const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { connect } = require("./src/utils/db");
const userRoutes = require("./src/api/routes/user.routes");
const movieRoutes =require ("./src/api/routes/movie.routes")
const cloudinary = require("cloudinary");
const actorRoutes = require("./src/api/routes/actor.routes");
const directorRoutes = require("./src/api/routes/director.routes");


cloudinary.config({
  cloud_name: process.env.CLOUDINRY_NAME,
  api_key: process.env.CLOUDINRY_KEY,
  api_secret: process.env.CLOUDINRY_SECRET,
  secure: true,
});

const PORT = process.env.PORT;
const app = express();

connect();
app.use(
  cors({
    origin: "*",
    credential: true,
  })
);

app.use(express.json());

app.use("/", userRoutes); 
app.use("/Movies", movieRoutes);
app.use("/Directors", actorRoutes );
app.use("/Actors", directorRoutes)

app.listen(PORT, () =>
  console.log(`escuchando en el puerto http://localhost:${PORT}`)
);
