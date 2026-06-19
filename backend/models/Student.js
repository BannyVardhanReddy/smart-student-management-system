const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
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
    rollNo : {
      type: String,
      required: true,
      trim: true,
      unique: true
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
    address : {
      type: String,
      required: true,
      trim: true
    },
    city : {
      type: String,
      required: true,
      trim: true
    },
    state : {
      type: String,
      required: true,
      trim: true
    },
    country : {
      type: String,
      required: true,
      trim: true
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Student", studentSchema);