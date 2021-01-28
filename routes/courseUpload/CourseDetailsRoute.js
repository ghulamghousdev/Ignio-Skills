const express = require('express');
const router = express.Router();
const auth = require("../../middlewares/auth");
const CourseDetails = require("../../models/CourseDetailsModel");


  
  //To add a new course 
router.post("/api/createcourse/coursedetails", async (req, res) => {
    console.log('dd')
    const course = new CourseDetails({
      ...req.body
    });
  
    console.log(course)
    try {
      await course.save();
      res.status(200).send(course);
    } catch (err) {
      res.status(404).send(err);
    }
  });
  
  //Get all the courses
router.get("/api/createcourse/coursedetails", async (req, res) => {
    try {
      await req.user.populate("course").execPopulate();
      res.status(201).send(req.user.course);
    } catch (err) {
      res.status(404).send(err);
    }
  });
  //Get a course by its _id
  router.get("/api/createcourse/coursedetails/:id", async (req, res) => {
    const _id = req.params.id;
    try {
      const course = await CourseDetails.findOne({ _id, author: req.user._id });
      if (!course) {
        return res.status(404).send();
      }
      res.send(course);
    } catch (error) {
      res.status(502).send();
    }
  });

module.exports = router;