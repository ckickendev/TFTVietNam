const mongoose = require("mongoose");
const uuid = require("node-uuid");

const { Schema } = mongoose;
const itemSchema = new Schema(
    {
      _id: {
        type: String,
        default: () => uuid.v4(),
      },
      name: String,
      image: String,
      effect: String,
    },
    {
      timestamps: true,
    }
  );
  
  module.exports = mongoose.model("items", itemSchema);
  