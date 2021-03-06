import { UPLOAD_VIDEO_SUCCESS, UPLOAD_VIDEO_FAIL } from "./actionTypes.js";
import axios from "axios";

export const uploadVideo = (videoTitle, videoDescription, videoFile) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "Application/json",
    },
  };

  const body = new FormData();
  body.append("file", videoFile);
  body.append("videoTitle", videoTitle);
  body.append("videoDescription", videoDescription);
  try {
    const res = await axios.post("/api/upload/video", body, config);
    console.log(res);
    dispatch({
      type: UPLOAD_VIDEO_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: UPLOAD_VIDEO_FAIL,
    });
  }
};
