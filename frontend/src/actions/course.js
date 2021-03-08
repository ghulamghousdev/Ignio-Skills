import {
  COURSE_CREATION_SUCCESS,
  COURSE_CREATION_FAIL,
  COURSE_LOAD_SUCCESS,
  COURSE_LOAD_FAIL,
} from "../actions/actionTypes";
import axios from "axios";

export const createCourse = (
  title,
  category,
  description,
  courseObjectives,
  coverName
) => async (dispatch) => {
  const course = { title, category, description, courseObjectives, coverName };
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

export const getCourseById = (id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "Application/json",
      },
    };
    const res = await axios.get(
      `/api/createcourse/coursedetails/${id}`,
      config
    );
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
