import { combineReducers } from "redux";
import auth from "./auth";
import uploadVideo from "./uploadVideo";

const rootReducer = combineReducers({ auth, uploadVideo });

export default rootReducer;
