const express = require("express");
const path = require("path");
const Grid = require("gridfs-stream");
const multer = require("multer");
const crypto = require("crypto");
const GridFsStorage = require("multer-gridfs-storage");
const router = express.Router();
const mongoose = require("mongoose");
const AddContent = require("../../models/AddContent");

const mongoURI =
  "mongodb://ghulamghousdev:ggatazfm@ignioskills-shard-00-00.jj1pk.mongodb.net:27017,ignioskills-shard-00-01.jj1pk.mongodb.net:27017,ignioskills-shard-00-02.jj1pk.mongodb.net:27017/elearning?ssl=true&replicaSet=atlas-bou4tb-shard-0&authSource=admin&retryWrites=true&w=majority";
const conn = mongoose.createConnection(mongoURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});
let gfs;
conn.once("open", () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
});

var storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "uploads",
        };
        console.log(fileInfo);
        resolve(fileInfo);
      });
    });
  },
});

const upload = multer({ storage });

router.post("/api/upload", upload.single("file"), (req, res) => {
  res.json({ file: req.file });
});

router.post("/api/upload/video", upload.single("file"), async (req, res) => {
  if (!req.file) {
    res.status(404).send({ err: "Please attach an video with the post" });
  }
  try {
    //Creating a new post
    const addVideo = {
      videoTitle: req.body.videoTitle,
      videoDescription: req.body.videoDescription,
      videoID: req.file.filename,
      user: req.user._id,
      course: req.body.courseId,
    };
    console.log(addVideo);

    const addCourseContent = new AddContent(addVideo);
    await addCourseContent.save();
    res.status(200).send(addCourseContent);
  } catch (err) {
    res.status(500).send({ err });
  }
});

router.get("/api/files", (req, res) => {
  gfs.files.find().toArray((err, files) => {
    if (!files || files.length === 0) {
      res.status(404).json({
        err: "No Such Files Exists",
      });
    }
    return res.json(files);
  });
});

//Get file from file name
router.get("/api/files/:filename", (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    if (!file || file.length === 0) {
      res.status(404).json({
        err: "No File Exists",
      });
    }
    return res.json(file);
  });
});

//Get image
router.get("/api/image/:filename", async (req, res) => {
  console.log(req.params.filename);
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    if (!file || file.length === 0) {
      res.status(404).json({
        err: "No File Exists",
      });
    }

    //Checking image type
    if (file.contentType === "image/jpeg" || file.contentType === "image/png") {
      //Output to browser
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    } else {
      res.status(404).json({
        err: "Not an image",
      });
    }
  });
});

//EXPORTING THE ROUTER TO BE USED IN OTHER FILES
module.exports = router;
