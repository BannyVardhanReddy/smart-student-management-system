const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },
    firstName : {
      type: String,
      required: true,
      trim: true
    },
    lastName : {
      type: String,
      required: true,
      trim: true
    },
    roll : {
      type: String,
      required: true,
      trim: true,
    },
    class : {
      type: String,
      required: true,
      trim: true
    },
    section : {
      type: String,
      required: true,
      trim: true
    },
    email : {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    phone : {
      type: String,
      required: true,
      trim: true
    },
    city : {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Student", studentSchema);