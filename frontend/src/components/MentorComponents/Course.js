import React from "react";
import hoverIcon from "../../assets/hover.png";
import { Link } from "react-router-dom";

const Course = ({ data }) => {
  return (
    <div className="registered-course">
      <div className="registered-course__img-cont">
        <img className="registered-course__img" src={data.imgUrl} />
      </div>
      <div className="registered-course__content">
        <h3 className="registered-course__title">{data.title}</h3>
        <h4 className="registered-course__author">{data.author}</h4>
        <h5 className="registered-course__rating">
          Course Rating:{" "}
          <span className="registered-course__rating-number">4.7</span>
        </h5>
      </div>
      <div className="hover-board">
        <div className="hover-board__btn-cont">
          <img className="hover-board__icon" src={hoverIcon} />
          <div className="hover-board__btn">
            <p>View More</p>
          </div>
        </div>
        <div className="hover-board__content">
          <h3 className="hover-board__title">{data.title}</h3>
          <p className="hover-board__description">{data.description}</p>
          <Link
            className="hover-board__watch-btn"
            to={`/editcourse/${data._id}`}
          >
            Edit Course
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Course;
