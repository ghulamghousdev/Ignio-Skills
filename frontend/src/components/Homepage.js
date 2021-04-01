import React from "react";
import "../styles/Homepage.scss";
import Home from "../assets/Home.png";
import JsCourse from "../assets/JsCourse.jpg";
import Teacher from "../assets/Teacher.jpg";
import Teacher1 from "../assets/Teacher2.jpg";
import Teacher2 from "../assets/Teacher3.jpg";

const Homepage = () => {
  return (
    <div>
      <div className="background">
        <div className="page1">
          <h1 className="hp-text1">
            Find the perfect courses <br /> to enhance your skills
          </h1>
          <div id="search-opt">
            <input
              type="text"
              className="searchbar"
              placeholder="Search for courses"
            />
            <div className="search">
              <input className="searchbtn" type="submit" value="Search" />
            </div>
            <div>
              <div className="column">
                <div id="popular">
                  <div className="tabs">
                    <p>Popular :</p>
                    <a className="web-op" href="./abc">
                      Web Development
                    </a>
                    <a className="web-op" href="./abc">
                      Graphic Design
                    </a>
                    <a className="web-op" href="./abc">
                      Arts and Dramatics
                    </a>
                  </div>
                </div>
              </div>
              <div className="column">
                <img src={Home} alt="home pic" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mentor-section">
        <img className="teacher-img1" src={Teacher} alt="#" />
        <div className="mentor-section-bg">
          <div className="mentor-text">
            <h1>Become a Teacher</h1>
            <p>
              Teach the world online. Create an online video course, reach
              students across the globe, and earn money. <br /> Want to become a
              teacher? Join us now!
            </p>
            <div className="mentor-join-className">
              <button className="mentor-join-btn">Join</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
