import {
  COURSE_CREATION_SUCCESS,
  COURSE_CREATION_FAIL,
  COURSE_LOAD_SUCCESS,
  COURSE_LOAD_FAIL,
} from "../actions/actionTypes";

const initialState = {
  isLoading: true,
  data: null,
  isCreated: false,
};

const course = (course = initialState, action) => {
  const { type, payload } = action;
  if (type === COURSE_CREATION_SUCCESS) {
    return {
      ...course,
      data: payload,
      isCreated: true,
    };
  } else if (type === COURSE_CREATION_FAIL) {
    return {
      ...course,
      data: null,
      isCreated: false,
    };
  } else if (type === COURSE_LOAD_SUCCESS) {
    return {
      ...course,
      data: payload,
      isLoading: false,
    };
  } else if (type === COURSE_LOAD_FAIL) {
    return {
      ...course,
      data: null,
      isLoading: false,
    };
  }

  return course;
};

export default course;
