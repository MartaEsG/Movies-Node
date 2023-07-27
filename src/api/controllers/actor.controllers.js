const Actor = require("../models/actor.model");

const getActors = async (req, res) => {
  try {
    const allActors = await Actor.find();
    return res.status(200).json(allActors);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postActor = async (req, res) => {
  try {
    const newActor = new Actor(req.body);
    const createdActor = await newActor.save();

    return res.status(201).json(createdActor);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putActor = async (req, res) => {
  try {
    const { id } = req.params;
    const putActor = new Actor(req.body);
    putActor._id = id;
    const updatedActor = await Actor.findByIdAndUpdate(id, putActor, {
      new: true,
    });
    if (!updatedActor) {
      return res.status(404).json({ message: "no existe este id de actor" });
    }
    return res.status(200).json(updatedActor);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const deleteActor = async (req, res) => {
  try {
    const {id} = req.params;
    const deletedActor = await Actor.findByIdAndDelete(id)
    if (!deletedActor) {
        return res.status(404).json({message:"este id no existe"})
    }
    return res.status(200).json(deletedActor);
  } catch (error) {
    return res.status(500).json(error)
  }
};

module.exports = { getActors, postActor, putActor, deleteActor };
