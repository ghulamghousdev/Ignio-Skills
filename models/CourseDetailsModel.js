const mongoose = require("mongoose");

const courseDetailsSchema = mongoose.Schema({
  //Defining title property on course details Schema
  title: {
    type: String,
    required: true,
    trim: true,
  },

  //Defining the category property on course details Schema
  category: {
    type: String,
    required: true,
    trim: true,
  },

  //Defining description property on course details Schema
  description: {
    type: String,
    required: true,
    trim: true,
  },

  //Defining course objectives property on course details schema

  courseObjectives: {
    type: Array,
    required: true,
  },

  //Defining the course cover name property on course details Schema
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
