const express = require("express")
const {getDirectors,postDirector,putDirector,deleteDirector} = require("../controllers/director.controllers")
const upload = require ("../../middlewares/upload.file")

const directorRoutes = express.Router();

directorRoutes.get("/", getDirectors);
directorRoutes.post("/", upload.single("image"), postDirector);
directorRoutes.put("/:id", upload.single("image"), putDirector);
directorRoutes.delete("/:id", deleteDirector);


module.exports= directorRoutes;