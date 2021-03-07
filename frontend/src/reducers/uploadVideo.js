import {
  UPLOAD_VIDEO_SUCCESS,
  UPLOAD_VIDEO_FAIL,
} from "../actions/actionTypes.js";

const initialState = {
  data: null,
  isLoading: true,
};

const upload = (upload = initialState, action) => {
  const { type, payload } = action;
  if (type === UPLOAD_VIDEO_SUCCESS) {
    return {
      ...upload,
      isLoading: false,
      data: payload.data,
    };
  } else if (type === UPLOAD_VIDEO_FAIL) {
    return {
      ...upload,
      data: null,
      isLoading: false,
    };
  }
  return upload;
};

export default upload;
