import {
  COURSE_LOAD_SUCCESS,
  COURSE_LOAD_FAIL,
} from "../actions/actionTypes.js";

const initialState = {
  courses: null,
  isLoading: true,
};

const getCourses = (load = initialState, action) => {
  const { type, payload } = action;
  if (type === COURSE_LOAD_SUCCESS) {
    return {
      ...load,
      isLoading: false,
      courses: payload.data,
    };
  } else if (type === COURSE_LOAD_FAIL) {
    return {
      ...load,
      courses: null,
      isLoading: false,
    };
  }
  return load;
};

export default getCourses;
