const express = require("express");
require("./database/mongoose");
const UserRouter = require("./routes/user/User");
const app = express();
const cors = require("cors");
const UploadCourse = require("./routes/courseUpload/UploadFile");
const CourseDetails = require("./routes/courseUpload/CourseDetailsRoute");
const RegisteredCourses = require("./routes/RegisteredCourses");

//Defining Port
const port = process.env.Port || 5100;

//To recognize incoming requests as json object.
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(UserRouter);
app.use(UploadCourse);
app.use(CourseDetails);
app.use(RegisteredCourses);

app.post("/api/upload", function (req, res) {
  res.send({
    image: true,
    file: req.files.userFile.originalname,
    savedAs: req.files.userFile.name,
  });
});

app.listen(port, () => {
  console.log(`Ignio Skills listening at http://localhost:${port}`);
});
