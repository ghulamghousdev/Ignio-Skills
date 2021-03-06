import React, { useState } from "react";
import "../../styles/AddVideo.scss";
import { connect } from "react-redux";
import { uploadVideo } from "../../actions/uploadVideo";

const AddVideo = ({ uploadVideo }) => {
  const [file, setFile] = useState(null);
  const [videoTitle, setVideoTitle] = useState("");
  const [videoDescription, setVideoDescription] = useState("");

  const handleAddVideo = async (e) => {
    uploadVideo(videoTitle, videoDescription, file);
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

export default connect(null, { uploadVideo })(AddVideo);
