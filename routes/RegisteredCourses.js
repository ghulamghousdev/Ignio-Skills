const express = require("express");
const router = express.Router();
const RegisteredCourses = require("../models/RegisteredCourses");

router.post("/courses/register/:id", async (req, res) => {
  const body = {
    user: req.user._id,
    courseId: req.params.id,
  };
  const registeredCourse = new RegisteredCourses(body);
  try {
    await registeredCourse.save();
    res.status(200).send(registeredCourse);
  } catch (err) {
    res.status(400).send({ err });
  }
});

router.get("/courses", async (req, res) => {
  try {
    const registeredCourses = await RegisteredCourses.find({
      user: req.user._id,
    });
    if (!registeredCourses) {
      res.status(404).send({ err: "You have not registered any courses" });
    }
    await registeredCourses.populate("user").execPopulate();
    await registeredCourses.populate("course").execPopulate();
    res.status(200).send(registeredCourses);
  } catch (err) {
    res.status(400).send({ err });
  }
});

module.exports = router;
