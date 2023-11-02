const mongoose = require("mongoose");

const { Schema } = mongoose;
const traitSchema = new Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
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
    versionKey: '_somethingElse',
    timestamps: true,
  }
);

module.exports = mongoose.model("traits", traitSchema);
