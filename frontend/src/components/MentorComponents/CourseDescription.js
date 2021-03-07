import React from "react";
import "../../styles/CourseDescriptionPage.scss";
import { Link } from "react-router-dom";

const CourseDescription = ({ setDescription }) => {
  return (
    <div className="course-container">
      <form>
        <h2 className="course-container__heading">
          Give brief Description of your Course
        </h2>
        <p>
          You can edit it anytime latter on so don't worry and give it a go.
        </p>
        <textarea
          className="course-container__description"
          type="text"
          name="description"
          placeholder="e.g. This course covers the basics of React..."
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </form>
      <div className="flex-space-between-desc">
        <Link
          className="course-container__previous-btn"
          to="/mentor/create-course/heading"
        >
          Previous
        </Link>
        <Link
          className="course-container__continue-btn"
          to={`/mentor/create-course/objectives`}
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default CourseDescription;
