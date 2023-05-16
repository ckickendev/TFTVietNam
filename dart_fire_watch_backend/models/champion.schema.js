const mongoose = require("mongoose");
const uuid = require("node-uuid");

const { Schema } = mongoose;
const championSchema = new Schema(
  {
    _id: {
      type: String,
      default: () => uuid.v4(),
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
