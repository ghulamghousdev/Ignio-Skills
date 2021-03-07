const mongoose = require("mongoose");

const RegisteredCoursesSchema = mongoose.Schema({
  //Defining title property on User Schema
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "CourseDetails",
  },
});

const RegisteredCourses = mongoose.model(
  "RegisteredCourses",
  RegisteredCoursesSchema
);

module.exports = RegisteredCourses;
