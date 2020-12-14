import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import {
    ADD_BOOKING,
    GET_BOOKINGS,
    GET_ONE_BOOKING,
    UPDATE_BOOKING,
    DELETE_BOOKING
} from "./types";
import { tokenConfig } from "./auth";

//ADD BOOKING
export const addBooking = booking => (dispatch, getState) => {
    axios
      .post("/backend/api/bookings/", booking, tokenConfig(getState))
      .then(res => {
        dispatch(createMessage({ addBooking: "Booking made!" }));
        dispatch({
          type: ADD_BOOKING,
          payload: res.data
        });
      })
      .catch(err => 
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
  
//GET BOOKINGS
export const getBookings = () => (dispatch, getState) => {
  axios
    .get("/backend/api/bookings/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_BOOKINGS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// GET ONE BOOKING
export const oneBooking = id => (dispatch, getState) => {
    axios
      .get(`/backend/api/bookings/${id}/`, tokenConfig(getState))
      .then(res => {
        console.log(res.data);
        dispatch({
          type: GET_ONE_BOOKING,
          payload: res.data
        });
      })
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
};

//UPDATE BOOKING 
export const updateBooking = (id, booking) => (dispatch, getState) => {
    axios
      .put(`/backend/api/bookings/${id}/`, booking, tokenConfig(getState))
      .then(res => {
        dispatch(createMessage({ updateBooking: "Booking Modified" }));
        dispatch({
          type: UPDATE_BOOKING,
          payload: res.data
        });
      })
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
  
 
//DELETE_BOOKING
export const deleteBooking = id => (dispatch, getState) => {
  axios
    .delete(`/backend/api/bookings/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteBooking: "Booking Deleted" }));
      dispatch({
        type: DELETE_BOOKING,
        payload: id
      });
    })
    .catch(err => console.log(err));
};




