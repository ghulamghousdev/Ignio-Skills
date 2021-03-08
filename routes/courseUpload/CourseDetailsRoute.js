const express = require("express");
const router = express.Router();
const auth = require("../../middlewares/auth");
const CourseDetails = require("../../models/CourseDetailsModel");

//To add a new course
router.post("/api/createcourse/coursedetails", auth, async (req, res) => {
  const course = new CourseDetails({
    ...req.body,
    user: req.user._id,
  });

  try {
    await course.save();
    res.status(200).send(course);
  } catch (err) {
    res.status(404).send(err);
  }
});

//Get all the courses
router.get("/api/createcourse/coursedetails", auth, async (req, res) => {
  try {
    const courses = await CourseDetails.find({ user: req.user._id });
    await CourseDetails.populate(courses, "user");
    res.status(201).send(courses);
  } catch (err) {
    res.status(400).send(err);
  }
});
//Get a course by its _id
router.get("/api/createcourse/coursedetails/:id", auth, async (req, res) => {
  try {
    const course = await CourseDetails.findOne({ _id: req.params.id });
    console.log(course);
    if (!course) {
      return res.status(404).send();
    }
    res.send(course);
  } catch (error) {
    res.status(502).send();
  }
});

module.exports = router;
