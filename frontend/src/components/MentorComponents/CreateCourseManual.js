import React from 'react';
import Step from '../Step';
import {useRouteMatch, Link} from 'react-router-dom';
import "../../styles/CreateCourseManual.scss";

const CreateCourseManual = (props) => {
    let {path} =useRouteMatch();
    return(  
        <div className= 'creationManual'>
            <h1 className="heading">Create an Engaging Course</h1>
            <Step 
            number = "1"
            heading="Choose your course topic."
            instruction="Pick something you're experienced in and genuinely excited about. Udemy has a few useful tools to help you understand the demand and competition for your chosen topic."
            />
            <Step 
            number = "2"
            heading="Define your target student and course goals."
            instruction="Before you begin creating content for your course, it's important to determine who you are teaching and where you want to take your students by the end of your course. Check out these worksheets and questions to help guide your thinking."
            />
            <Step 
            number = "3"
            heading="Decide how students will practice what you’re teaching."
            instruction="Students love being hands-on with their learning: they want to practice what they've learned through exercises, activities, case studies, and more! There are lots of different types of practice you can include, so you'll want to choose what’s best for your topic."
            />
            <Step 
            number = "4"
            heading="Create your course outline."
            instruction="Your course outline is the foundation for your course--this is where you decide how you will structure and visualize your content. We have an outline template that can help you get started!"
            />
            <Step 
            number = "5"
            heading="Script your course."
            instruction="Once you know how your course will be structured, the next step is to prep for filming your lectures. Most instructors find that scripting each lecture (or writing bullet point notes) helps to reduce filming time and increases the smoothness of their delivery."
            />
            <Link className="creationManual__continue-btn" to={`${path}/heading`}>
              Create New Course
            </Link>
        </div> 
    )
}

export default CreateCourseManual;