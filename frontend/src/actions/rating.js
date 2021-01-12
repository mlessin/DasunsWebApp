import axios from "axios";
import { createMessage, returnErrors } from "./messages";

import {
    ADD_RATING,
    GET_RATINGS,
    GET_ONE_RATING,
    UPDATE_RATING,
    DELETE_RATING
} from "./types";

import { tokenConfig } from "./auth";

// Adding the ratings
export const addRating = rating => (dispatch, getState) => {
    axios
      .post("/backend/api/ratings/", rating, tokenConfig(getState))
      .then(res => {
        dispatch(createMessage({ addRating: "Rating made!" }));
        dispatch({
          type: ADD_RATING,
          payload: res.data
        });
      })
      .catch(err => 
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };


//   Getting the ratings
  export const getRatings = () => (dispatch, getState) => {
    axios
      .get("/backend/api/ratings/", tokenConfig(getState))
      .then(res => {
        dispatch({
          type: GET_RATINGS,
          payload: res.data
        });
      })
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
  
  // Getting one rating
  export const oneRating = id => (dispatch, getState) => {
      axios
        .get(`/backend/api/ratings/${id}/`, tokenConfig(getState))
        .then(res => {
          console.log(res.data);
          dispatch({
            type: GET_ONE_RATING,
            payload: res.data
          });
        })
        .catch(err =>
          dispatch(returnErrors(err.response.data, err.response.status))
        );
  };
  
  //Updating the ratings
  export const updateRating = (id, rating) => (dispatch, getState) => {
      axios
        .put(`/backend/api/ratings/${id}/`, rating, tokenConfig(getState))
        .then(res => {
          dispatch(createMessage({ updateRating: "Rating Modified" }));
          dispatch({
            type: UPDATE_RATING,
            payload: res.data
          });
        })
        .catch(err =>
          dispatch(returnErrors(err.response.data, err.response.status))
        );
    };
    
   
  //Deleting the ratings
  export const deleteRating = id => (dispatch, getState) => {
    axios
      .delete(`/backend/api/ratings/${id}/`, tokenConfig(getState))
      .then(res => {
        dispatch(createMessage({ deleteRating: "Rating Deleted" }));
        dispatch({
          type: DELETE_RATING,
          payload: id
        });
      })
      .catch(err => console.log(err));
  };
  
  