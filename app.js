const express = require("express");
require("./database/mongoose");
const UserRouter = require("./routes/user/User");
const app = express();
const cors = require("cors");
const UploadCourse = require("./routes/courseUpload/UploadFile");
const CourseDetails = require("./routes/courseUpload/CourseDetailsRoute");
const socketio = require("socket.io");
const router = require("./chatbox/router");
const {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
} = require("./chatbox/users");

//To recognize incoming requests as json object.
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(UserRouter);
app.use(UploadCourse);
app.use(CourseDetails);
//Defining Port
const port = process.env.Port || 5100;
const server = app.listen(port, () => {
  console.log(`Ignio Skills listening at http://localhost:${port}`);
});

// const io = socketio(server, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST"],
//     credentials: true,
//   },
// });
let io = socketio(server, {
  cors: {
    origin: "*",
  },
});

app.use(router);
app.use(cors());

io.on("connection", (socket) => {
  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) {
      return callback(error);
    }

    socket.emit("message", {
      user: "Admin",
      text: `${user.name}, welcome to the room ${user.room}!`,
    });
    socket.broadcast
      .to(user.room)
      .emit("message", { user: "Admin", text: `${user.name}, has joined!` });

    socket.join(user.room);

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit("message", { user: user.name, text: message });
    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    callback();
  });

  socket.on("disconnected", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit("message", {
        user: "Admin",
        text: `${user.name} has left!`,
      });
    }
  });
});

app.post("/api/upload", function (req, res) {
  res.send({
    image: true,
    file: req.files.userFile.originalname,
    savedAs: req.files.userFile.name,
  });
});
