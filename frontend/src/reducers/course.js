import {
  COURSE_CREATION_SUCCESS,
  COURSE_CREATION_FAIL,
} from "../actions/actionTypes";

const initialState = {
  isLoading: true,
  data: null,
};

const course = (course = initialState, action) => {
  const { type, payload } = action;
  if (type === COURSE_CREATION_SUCCESS) {
    return {
      ...course,
      data: payload.data,
      isLoading: false,
    };
  } else if (type === COURSE_CREATION_FAIL) {
    return {
      ...course,
      data: null,
      isLoading: false,
    };
  }

  return course;
};

export default course;
