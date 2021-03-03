import React, { useState } from "react";
import { useRouteMatch, Route, Switch } from "react-router-dom";
import CreateCourseManual from './CreateCourseManual';
import CourseHeading from './CourseHeading';
import CourseContent from './CourseContent';
import CourseDescription from './CourseDescription';
import CourseCover from './CourseCover';
import axios from 'axios'
import AddVideo from "./AddVideo";

const MentorDashboard = () => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [coverName, setCoverName] = useState(null);


    let { path} = useRouteMatch();
    console.log(title)
    console.log(category)
    console.log(description)
    console.log(coverName)

    const saveData = async (e) => {
      console.log("dd")
      e.preventDefault()
      const course = {title, category, description, coverName}
      try{
        const config = {
            headers: {
                'Content-Type': 'Application/json'
            }
        }
        const body = JSON.stringify(course);
        const res = await axios.post('/api/createcourse/coursedetails', body, config);
        console.log(res)
        if(res){
          window.location.href = '/mentor/create-course'
        }
    } catch(e){
        console.log(e); 
    }
  }


  return (
        <Switch>
          <Route path={`${path}/create-course/heading`}>
            <CourseHeading setHeading = {setTitle} setCategory={setCategory} />
            </Route>
          <Route path={`${path}/create-course/description`}>
            <CourseDescription setDescription = {setDescription}/>
            </Route>
          <Route path={`${path}/create-course/cover`} >
            <CourseCover title={title} category={category} description={description}  coverName = {coverName} setCoverName = {setCoverName} saveData={saveData} />
          </Route>
          <Route path={`${path}/create-course/content/video`} >
            <AddVideo />
          </Route>
          <Route path={`${path}/create-course/content`} >
            <CourseContent />
          </Route>
          <Route path={`${path}/create-course`} >
            <CreateCourseManual />
          </Route>
        </Switch>
  );
};

export default MentorDashboard;
