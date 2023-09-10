const mongoose = require("mongoose");

const { Schema } = mongoose;
const itemSchema = new Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
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
