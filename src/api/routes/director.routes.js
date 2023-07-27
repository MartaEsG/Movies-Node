const express = require("express")
const {getDirectors,postDirector,putDirector,deleteDirector} = require("../controllers/director.controllers")

const directorRoutes = express.Router();

directorRoutes.get("/", getDirectors);
directorRoutes.post("/", postDirector);
directorRoutes.put("/:id", putDirector);
directorRoutes.delete("/:id", deleteDirector);


module.exports= directorRoutes;