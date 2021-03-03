const mongoose = require("mongoose");

const courseDetailsSchema = mongoose.Schema({
  //Defining title property on User Schema
  title: {
    type: String,
    required: true,
    trim: true,
  },

  //Defining the category property on User Schema
  category: {
    type: String,
    required: true,
    trim: true,
  },

  //Defining description property on User Schema
  description: {
    type: String,
    required: true,
    trim: true,
  },

  //Defining the course cover name property on User Schema
  coverName: {
    type: String,
    required: true,
    trim: true,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

const CourseDetails = mongoose.model("CourseDetails", courseDetailsSchema);
module.exports = CourseDetails;
