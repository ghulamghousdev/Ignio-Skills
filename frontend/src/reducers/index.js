import { combineReducers } from "redux";
import auth from "./auth";
import course from "./course";

const rootReducer = combineReducers({ auth, course });

export default rootReducer;
