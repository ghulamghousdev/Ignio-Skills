import React, { useState, useEffect } from "react";
import "../../styles/AddVideo.scss";
import { connect } from "react-redux";
import { uploadVideo } from "../../actions/uploadVideo";

import { Redirect } from "react-router-dom";

const AddVideo = ({ uploadVideo, isCreated }) => {
  const [file, setFile] = useState(null);
  const [videoTitle, setVideoTitle] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
  let course;
  useEffect(() => {
    course = localStorage.getItem("courseID");
    console.log(course);
  });

  const handleAddVideo = async (e) => {
    e.preventDefault();
    uploadVideo(videoTitle, videoDescription, file, course);
  };

  return (
    <div className="content-container">
      <form onSubmit={(e) => handleAddVideo(e)}>
        <h2 className="content-container__heading">
          Engaging Title for Video?
        </h2>
        <p>Your title should give an abstract idea of your video.</p>
        <input
          className="content-container__video-title-box"
          type="text"
          name="videoTitle"
          placeholder="e.g. Introduction"
          onChange={(e) => setVideoTitle(e.target.value)}
        />

        <h2 className="content-container__heading">Description</h2>
        <p>Give brief Description of what your video is about.</p>
        <textarea
          className="content-container__video-description-box"
          type="text"
          name="videoDescription"
          placeholder="e.g. This video gives a glimpse of all the modules which course covers..."
          onChange={(e) => {
            setVideoDescription(e.target.value);
          }}
        />

        <h2 className="content-container__heading">Upload Video</h2>
        <input
          type="file"
          id="file"
          accept=".mp4"
          style={{ marginTop: "20px", marginLeft: "50px" }}
          onChange={(event) => {
            const file = event.target.files[0];
            setFile(file);
          }}
        />
        <input
          className="content-container__video-upload-button"
          type="submit"
          name="submit"
          value="Upload"
        />
      </form>
    </div>
  );
};
// const mapStateToProps = (state) => ({
//   isCreated: false,
// });
export default connect(null, { uploadVideo })(AddVideo);
