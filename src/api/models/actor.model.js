const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const actorSchema = new Schema(
      {
        name:{type:String, required:true},
        country:{type:String, required:true},
        img:{type:String, required:false},

      },{
        timestamps:true
      }
)

const Actor = mongoose.model("actor", actorSchema)

module.exports = Actor;