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
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const CourseView = () => {
  return (
    <div style={{ marginBottom: "40px" }}>
      <section className="mainSection">
        <div className="leftCol avatarCont">
          <img className="image" src={devImg} alt="AVATAR" />
          <h3>Elizabeth Lail</h3>
        </div>
        <div className="rightCol">
          <h2>Complete Python Course for Beginners</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed labore,
            maiores a, architecto id eligendi ut culpa reprehenderit blanditiis
            incidunt at ab fugiat alias consectetur perferendis accusamus iure
            voluptas! Officia!
          </p>
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
              <div>
                <img src={checkImg} alt="Star" />
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div>
                <img src={checkImg} alt="Star" />
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div>
                <img src={checkImg} alt="Star" />
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div>
                <img src={checkImg} alt="Star" />
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div>
                <img src={checkImg} alt="Star" />
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div>
                <img src={checkImg} alt="Star" />
                <p>Lorem ipsum dolor sit amet and consectetur.</p>
              </div>
              <div>
                <img src={checkImg} alt="Star" />
                <p>Lorem ipsum dolor sit amet and consectetur.</p>
              </div>
              <div>
                <img src={checkImg} alt="Star" />
                <p>Lorem ipsum dolor sit amet and consectetur.</p>
              </div>
              <div>
                <img src={checkImg} alt="Star" />
                <p>Lorem ipsum dolor sit amet and consectetur.</p>
              </div>
            </div>
          </div>
          <div className="courseContent">
            <h2 style={{ marginTop: "5px", marginBottom: "20px" }}>
              Course Curriculum
            </h2>
            <Accordion allowZeroExpanded>
              <AccordionItem key={1}>
                <AccordionItemHeading>
                  <AccordionItemButton>{`Lecture 1: Bawa g ka thulo`}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  {"Faisal bhai kro paish pain yakka hor sb thk thaaak aaa"}
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem key={2}>
                <AccordionItemHeading>
                  <AccordionItemButton>{`Lecture 1: Bawa g ka thulo`}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  {"Faisal bhai kro paish pain yakka hor sb thk thaaak aaa"}
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem key={3}>
                <AccordionItemHeading>
                  <AccordionItemButton>{`Lecture 1: Bawa g ka thulo`}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  {"Faisal bhai kro paish pain yakka hor sb thk thaaak aaa"}
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem key={4}>
                <AccordionItemHeading>
                  <AccordionItemButton>{`Lecture 1: Bawa g ka thulo`}</AccordionItemButton>
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
                      lorem ipsum dolor hntor hdfwebkfhwepfhwefhlwefuh[we[fe
                      fwehfhwerfhef24wfwefwe fwefwe fwefw efwe fgwe gwegwegrgweg
                      wgentai lorra paye
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
              </AccordionItem>
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
                to={`/mentor/create-course/content/video`}
              >
                +
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseView;
