import "../../styles/CourseViewStylesMentor.scss";
import devImg from "../../assets/courseView/img.jpg";
import starImg from "../../assets/courseView/star.png";
import checkImg from "../../assets/courseView/check.png";
import chatImg from "../../assets/courseView/chat.png";
import jsImg from "../../assets/courseView/js.png";
import playPNG from "../../assets/courseView/play.png";
import playSVG from "../../assets/courseView/play.svg";
import React from "react";
import { Link } from "react-router-dom";
import "react-accessible-accordion/dist/fancy-example.css";
import { connect } from "react-redux";
import { getCourseById } from "../../actions/course";
import { useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const CourseView = ({ course, getCourseById, match, isLoading }) => {
  console.log(match.params.id);
  useEffect(() => {
    getCourseById(match.params.id);
  }, [match.params.id]);

  return (
    <div style={{ marginBottom: "40px" }}>
      {!isLoading ? (
        !course ? (
          <p>Didn't find course</p>
        ) : (
          <div>
            <section className="mainSection">
              <div className="leftCol avatarCont">
                <img className="image" src={devImg} alt="AVATAR" />
                <h3>{course.user.fullName}</h3>
              </div>
              <div className="rightCol">
                <h2>{course.title}</h2>
                <p>{course.description}</p>
                <div className="Rating">
                  <h3>Rating :</h3>
                  <ul>
                    <img src={starImg} alt="Star" />
                    <img src={starImg} alt="Star" />
                    <img src={starImg} alt="Star" />
                    <img src={starImg} alt="Star" />
                    <img src={starImg} alt="Star" />
                  </ul>
                </div>
                <div>
                  <ul className="button">
                    <a className="enroll" href="enroll">
                      Enroll
                    </a>
                    <a className="chat" href="chat">
                      <img src={chatImg} alt="Chat Box" />
                    </a>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bottomSec">
              <div className="courseInfo">
                <div className="coursePlan">
                  <h2>What you will get by taking this course</h2>
                  <div className="content">
                    {course.courseObjectives.length > 0 &&
                      course.courseObjectives.map((objective) => {
                        return (
                          <div>
                            <img src={checkImg} alt="Star" />
                            <p>{objective}</p>
                          </div>
                        );
                      })}
                  </div>
                </div>
                <div className="courseContent">
                  <h2 style={{ marginTop: "5px", marginBottom: "20px" }}>
                    Course Curriculum
                  </h2>
                  <Accordion allowZeroExpanded>
          
                    {/* 
                    <AccordionItem key={4}>
                      <AccordionItemHeading>
                        <AccordionItemButton>{`Lecture 1: Lorem Ipsum`}</AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="video-content">
                          <p
                            className="video-content__description"
                            style={{
                              textAlign: "justify",
                              paddingRight: "15px",
                              borderRight: "1px solid #cccccc",
                            }}
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                          </p>
                          <img
                            className="video-content__playicon"
                            alt="sdd"
                            style={{
                              height: "40px",
                              width: "40px",
                              marginLeft: "15px",
                            }}
                            src={playPNG}
                          />
                        </div>
                      </AccordionItemPanel>
                    </AccordionItem> */}
                  </Accordion>
                  <div
                    style={{
                      marginTop: "10px auto",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Link
                      className="add-objective-btn"
                      style={{ marginTop: "20px" }}
                      to={`/dashboard/create-course/content/video`}
                    >
                      +
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  course: state.course.data,
  isLoading: state.course.isLoading,
});

export default connect(mapStateToProps, { getCourseById })(CourseView);
