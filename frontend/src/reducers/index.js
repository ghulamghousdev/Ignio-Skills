import { combineReducers } from "redux";
import auth from "./auth";
import uploadVideo from "./uploadVideo";
import course from "./course";
import getCourses from "./loadCourses";

const rootReducer = combineReducers({ auth, course, uploadVideo, getCourses });

export default rootReducer;
