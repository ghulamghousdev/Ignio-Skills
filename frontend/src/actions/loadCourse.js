import { COURSE_LOAD_FAIL, COURSE_LOAD_SUCCESS } from "../actions/actionTypes";
import axios from "axios";

export const getCourses = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "Application/json",
      },
    };
    const res = await axios.get("/api/get-courses/", config);
    dispatch({
      type: COURSE_LOAD_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: COURSE_LOAD_FAIL,
    });
  }
};
