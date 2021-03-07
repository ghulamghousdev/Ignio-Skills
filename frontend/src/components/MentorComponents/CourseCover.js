import React, { useState } from "react";
import "../../styles/CourseCover.scss";
import { Link } from "react-router-dom";
import upload_img from "../../assets/upload.jpg";
import axios from "axios";

const CourseCover = ({ coverName, setCoverName, saveData }) => {
  const [file, setFile] = useState({
    file: null,
    fileUrl: null,
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file.file);

    try {
      const config = {
        headers: {
          "Content-Type": "Application/json",
        },
      };
      const res = await axios.post("/api/upload", data, config);
      setCoverName(res.data.file.filename);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="coursecover-container">
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <h2 className="coursecover-container__heading">Upload Cover Image</h2>
        <p className="coursecover-container__para">
          If you are not sure about it, just upload something related to your
          course as you can edit it later on
        </p>

        {/* Rendering image */}

        {file.file !== null ? (
          <div
            className="image-container"
            style={{ display: "flex-box", flexDirection: "column" }}
          >
            <label htmlFor="file">
              <img
                src={file.fileUrl}
                alt="Course Thumbnail"
                className="show-img"
              />
            </label>
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              accept=".png, .jpeg, .jpg"
              onChange={(event) => {
                setFile({
                  file: event.target.files[0],
                  fileUrl: URL.createObjectURL(event.target.files[0]),
                });
              }}
            />
            <input
              className="coursecover-container__cover_upload-button"
              type="submit"
              name="submit"
              value="Upload"
            />
          </div>
        ) : (
          <div className="coursecover-container hide-input">
            <label htmlFor="file" style={{ marginTop: "90px" }}>
              <img src={upload_img} alt="upload" className="upload-img" />
            </label>
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              accept=".png, .jpeg, .jpg"
              onChange={(event) => {
                setFile({
                  file: event.target.files[0],
                  fileUrl: URL.createObjectURL(event.target.files[0]),
                });
              }}
            />
            <input
              className="coursecover-container__cover_upload-button"
              style={{ display: "none" }}
              type="submit"
              name="submit"
              value="Upload"
            />
          </div>
        )}
      </form>
      <div className="flex-space-between-cover">
        <Link
          className="coursecover-container__previous-btn"
          to="/mentor/create-course/objectives"
        >
          Previous
        </Link>
        <button
          className="coursecover-container__continue-btn"
          onClick={(e) => saveData(e)}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CourseCover;
