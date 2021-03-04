import { combineReducers } from "redux";
import auth from "./auth";
import uploadVideo from "./uploadVideo";
import course from "./course";

const rootReducer = combineReducers({ auth, course, uploadVideo });

export default rootReducer;
