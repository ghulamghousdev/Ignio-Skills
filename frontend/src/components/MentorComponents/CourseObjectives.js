import React, { useState, Fragment } from "react";
import "../../styles/CourseObjectives.scss";
import "react-responsive-combo-box/dist/index.css";
import { Link } from "react-router-dom";
import checkimg from "../../assets/courseView/check.png";
const CourseObjectives = ({ setCourseObjectives, courseObjectives }) => {
  const [objective, setObjective] = useState("");

  const pushToArray = (e) => {
    e.preventDefault();
    setCourseObjectives([...courseObjectives, objective]);
    setObjective("");
  };

  return (
    <div className="objectives-container">
      <form>
        <h2 className="objectives-container__heading">
          What objectives your course fulfills?
        </h2>
        <p className="objectives-container__para">
          A course objective specifies a behavior, skill, or action that a
          student can demonstrate if they have achieved mastery of the course.
          As such, objectives need to be written in such a way that they are
          measurable by some sort of assessment.
        </p>
        {courseObjectives.length > 0 ? (
          <ol>
            {courseObjectives.map((objective) => {
              return (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "3px",
                  }}
                >
                  <img
                    src={checkimg}
                    alt="check"
                    style={{ marginRight: "10px" }}
                  />
                  <li key={objective}>{objective}</li>
                </div>
              );
            })}
          </ol>
        ) : null}
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
            marginBottom: "30px",
          }}
        >
          <input
            className="objectives-container__objective-box"
            type="text"
            name="objective"
            value={objective}
            placeholder="e.g. Crash course for React"
            onChange={(e) => setObjective(e.target.value)}
          />
          <div style={{ width: "10%" }}>
            <button
              className="objectives-container__add-objective-btn"
              onClick={(e) => pushToArray(e)}
            >
              +
            </button>
          </div>
        </div>
      </form>
      <div className="flex-space-between">
        <Link
          className="objectives-container__obj-previous-btn"
          to={`/mentor/create-course/description`}
        >
          Previous
        </Link>
        <Link
          className="objectives-container__obj-continue-btn"
          to={`/mentor/create-course/cover`}
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default CourseObjectives;
