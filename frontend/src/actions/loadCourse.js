import {
  COURSES_LOAD_FAIL,
  COURSES_LOAD_SUCCESS,
} from "../actions/actionTypes";
import axios from "axios";

export const getCourses = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "Application/json",
      },
    };
    const res = await axios.get("/api/createcourse/coursedetails", config);
    dispatch({
      type: COURSES_LOAD_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: COURSES_LOAD_FAIL,
    });
  }
};
