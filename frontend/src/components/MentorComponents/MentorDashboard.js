import React, { useState } from "react";
import { useRouteMatch, Route, Switch } from "react-router-dom";
import CreateCourseManual from "./CreateCourseManual";
import CourseHeading from "./CourseHeading";
import CourseContent from "./CourseViewMentor";
import CourseDescription from "./CourseDescription";
import CourseObjectives from "./CourseObjectives";
import CourseCover from "./CourseCover";
import AddVideo from "./AddVideo";
import { connect } from "react-redux";
import { createCourse } from "../../actions/course";

const MentorDashboard = ({ createCourse }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [coverName, setCoverName] = useState(null);
  const [courseObjectives, setCourseObjectives] = useState([]);

  let { path } = useRouteMatch();

  const saveData = async (e) => {
    createCourse(title, category, description, courseObjectives, coverName);
  };

  return (
    <Switch>
      <Route path={`${path}/create-course/heading`}>
        <CourseHeading setHeading={setTitle} setCategory={setCategory} />
      </Route>
      <Route path={`${path}/create-course/description`}>
        <CourseDescription setDescription={setDescription} />
      </Route>
      <Route path={`${path}/create-course/objectives`}>
        <CourseObjectives
          courseObjectives={courseObjectives}
          setCourseObjectives={setCourseObjectives}
        />
      </Route>
      <Route path={`${path}/create-course/cover`}>
        <CourseCover
          title={title}
          category={category}
          description={description}
          coverName={coverName}
          setCoverName={setCoverName}
          saveData={saveData}
        />
      </Route>
      <Route path={`${path}/create-course/content/video`}>
        <AddVideo />
      </Route>
      <Route path={`${path}/create-course/content`}>
        <CourseContent />
      </Route>
      <Route path={`${path}/create-course`}>
        <CreateCourseManual />
      </Route>
    </Switch>
  );
};

export default connect(null, { createCourse })(MentorDashboard);
