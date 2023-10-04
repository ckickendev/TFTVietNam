const mongoose = require("mongoose");
const uuid = require("node-uuid");

const { Schema } = mongoose;
const userSchema = new Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    username: String,
    password: String,
    role: {
      type: Number,
      default: 0,
    },
    email: String,
    activate: Boolean,
    activate_code: String,
    token_reset_pass: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userSchema);