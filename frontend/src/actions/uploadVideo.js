import { UPLOAD_VIDEO_SUCCESS, UPLOAD_VIDEO_FAIL } from "./actionTypes.js";
import axios from "axios";
import { Redirect } from "react-router-dom";

export const uploadVideo = (
  videoTitle,
  videoDescription,
  videoFile,
  course
) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "Application/json",
    },
  };

  const body = new FormData();
  body.append("file", videoFile);
  body.append("videoTitle", videoTitle);
  body.append("videoDescription", videoDescription);
  body.append("course", course);
  try {
    const res = await axios.post("/api/upload/video", body, config);
    console.log(res);
    dispatch({
      type: UPLOAD_VIDEO_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
    dispatch({
      type: UPLOAD_VIDEO_FAIL,
    });
  }
};
