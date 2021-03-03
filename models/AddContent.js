const mongoose = require("mongoose");

const addContentSchema = mongoose.Schema({
  //Defining title property on Add Contnet Schema
  videoTitle: {
    type: String,
    required: true,
    trim: true,
  },

  //Defining the video Description property on Add Content Schema
  videoDescription: {
    type: String,
    required: true,
    trim: true
    },

  //Defining the video ID property on Add Content Schema
  videoID: {
    type: String,
    required: true,
    trim: true,
  },
});

const AddContent = mongoose.model("AddContent", addContentSchema)
module.exports = AddContent;