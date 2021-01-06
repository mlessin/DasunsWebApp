import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "./types";

//CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  axios
    .get("/accounts/api/auth/user", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

//LOGIN USER
export const login = (username, password) => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({ username, password });
  axios
    .post("/accounts/api/auth/login", body, config)
    .then(res => {
      dispatch(createMessage({ login: "User logged in" }));
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch(createMessage({ loginfail: "Incorrect credentials supplied" }));
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

//REGISTER USER
export const register = ({ username, email, password }) => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({ username, email, password });

  axios
    .post("/accounts/api/auth/register", body, config)
    .then(res => {
      dispatch(createMessage({ register: "User registered" }));
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch(createMessage({ registerfail: "Username or Email already in use" }));
      dispatch({
        type: REGISTER_FAIL
      });
    });
};

//LOGOUT USER
export const logout = () => (dispatch, getState) => {
  axios
    .post("/accounts/api/auth/logout", null, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ logout: "User logged out" }));
      dispatch({
        type: LOGOUT_SUCCESS
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

//Token configs
export const tokenConfig = getState => {
  const token = getState().auth.token;
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  return config;
};
