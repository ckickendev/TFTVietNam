const mongoose = require("mongoose");

const { Schema } = mongoose;
const championSchema = new Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    name: String,
    cost: Number,
    avatar: String,
    skill: String,
    traits: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "traits",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("champions", championSchema);
