import React from "react";
import "../../styles/CourseHeading.scss";
import ComboBox from "react-responsive-combo-box";
import "react-responsive-combo-box/dist/index.css";
import { Link } from "react-router-dom";

const CourseHeading = ({ setHeading, setCategory }) => {
  const options = ["Web Development", "Graphic Designing", "Art"];

  return (
    <div className="heading-container">
      <form>
        <h2 className="heading-container__heading">
          Engaging Title for your Course?
        </h2>
        <p style={{ textAlign: "justify" }}>
          If you are not thinking of a good title, it's ok. You can change it
          anytime.
        </p>
        <input
          className="heading-container__title"
          type="text"
          name="heading"
          placeholder="e.g. Crash course for React"
          onChange={(e) => setHeading(e.target.value)}
        />

        <h2 className="heading-container__category">
          To which category your course belongs to?
        </h2>
        <p className="heading-contaniner__para">
          If you are not sure about it, don't worry you can change it later
        </p>
        <ComboBox
          options={options}
          placeholder="e.g. Web Development"
          defaultIndex={0}
          style={{
            margin: "0 auto",
            marginTop: "20px",
            width: "100%",
            border: "none",
          }}
          focusColor=" #ffa500"
          onSelect={(option) => setCategory(option)}
          className="heading-container__category-box"
          enableAutocomplete
        />
      </form>
      <div className="heading-flex-space-between">
        <Link
          className="heading-container__continue-btn"
          to={`/mentor/create-course/description`}
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default CourseHeading;
