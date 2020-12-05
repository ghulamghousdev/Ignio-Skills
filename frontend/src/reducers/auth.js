import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "../actions/actionTypes.js";

const initialState = {
  user: null,
  isLoading: true,
  isAuthenticated: false,
  token: null,
};

const auth = (auth = initialState, action) => {
  const { type, payload } = action;
  if (type === LOGIN_SUCCESS || type === REGISTER_SUCCESS) {
    localStorage.setItem("token", payload.token);
    return {
      ...auth,
      token: payload.token,
      user: payload.user,
      isAuthenticated: true,
      isLoading: false,
    };
  } else if (type === REGISTER_FAIL || type === LOGIN_FAIL) {
    localStorage.removeItem("token");
    return {
      ...auth,
      token: null,
      isAuthenticated: false,
      user: null,
      isLoading: false,
    };
  }
  return auth;
};

export default auth;
