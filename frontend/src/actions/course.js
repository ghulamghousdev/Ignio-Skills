import {
  COURSE_CREATION_SUCCESS,
  COURSE_CREATION_FAIL,
} from "../actions/actionTypes";
import axios from "axios";

export const createCourse = (title, category, description, coverName) => async (
  dispatch
) => {
  const course = { title, category, description, coverName };
  try {
    const config = {
      headers: {
        "Content-Type": "Application/json",
      },
    };
    const body = JSON.stringify(course);
    const res = await axios.post(
      "/api/createcourse/coursedetails",
      body,
      config
    );
    dispatch({
      type: COURSE_CREATION_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: COURSE_CREATION_FAIL,
    });
  }
};
