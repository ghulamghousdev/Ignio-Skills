import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const AddVideo = () => {
  const { data, setData } = useState(null);

  const fetchData = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "Application/json",
        },
      };
      const res = await axios.get("/api/subjects", config);
      this.setState(
        (prevState, props) => {
          return {
            subjects: prevState.subjects.concat(res.data),
          };
        },
        () => {
          console.log(this.state);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="course-container">
      <div> Add Videos</div>
      <Link
        className="course-container__continue-btn"
        to={`/mentor/create-course/content/video`}
      >
        Add Video
      </Link>
    </div>
  );
};

export default AddVideo;
