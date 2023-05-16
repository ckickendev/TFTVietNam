const mongoose = require("mongoose");
const uuid = require("node-uuid");

const { Schema } = mongoose;
const traitSchema = new Schema(
  {
    _id: {
      type: String,
      default: () => uuid.v4(),
    },
    name: String,
    image: String,
    effect: String,
    unit_activate: Array,
    champions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "champions",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("traits", traitSchema);
