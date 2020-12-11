import axios from "axios";
// import { createMessage, returnErrors } from "./messages";
import {
    ADD_BOOKING,
    GET_BOOKINGS,
    GET_ONE_BOOKING,
    UPDATE_BOOKING,
    DELETE_BOOKING
} from "./types";
// import { tokenConfig } from "./auth";

//ADD BOOKING
export const addBooking = booking => (dispatch, getState) => {
    axios
      // .post("/api/bookings/", booking, tokenConfig(getState))
      .post("/backend/api/bookings/", booking, (getState))
      .then(res => {
        // dispatch(createMessage({ addBooking: "Booking made!" }));
        dispatch({
          type: ADD_BOOKING,
          payload: res.data
        });
      })
      .catch(err => 
        console.log(err)
        // dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
  
//GET BOOKINGS
export const getBookings = () => (dispatch, getState) => {
  axios
    // .get("/api/bookings/", tokenConfig(getState))
    .get("/backend/api/bookings/")
    .then(res => {
      dispatch({
        type: GET_BOOKINGS,
        payload: res.data
      });
    })
    .catch(err =>
      console.log(err)
      // dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// GET ONE BOOKING
export const oneBooking = id => (dispatch, getState) => {
    axios
      // .get(`/api/bookings/${id}/`, tokenConfig(getState))
      .get(`/backend/api/bookings/${id}/`)
      .then(res => {
        console.log(res.data);
        dispatch({
          type: GET_ONE_BOOKING,
          payload: res.data
        });
      })
      .catch(err =>
        console.log(err)
        // dispatch(returnErrors(err.response.data, err.response.status))
      );
};

//UPDATE BOOKING 
export const updateBooking = (id, booking) => (dispatch, getState) => {
    axios
      // .put(`/api/bookings/${id}/`, booking, tokenConfig(getState))
      .put(`/backend/api/bookings/${id}/`, booking)
      .then(res => {
        // dispatch(createMessage({ updateBooking: "Booking Modified" }));
        dispatch({
          type: UPDATE_BOOKING,
          payload: res.data
        });
      })
      .catch(err =>
        console.log(err)
        // dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
  
 
//DELETE_BOOKING
export const deleteBooking = id => (dispatch, getState) => {
  axios
    // .delete(`/api/bookings/${id}/`, tokenConfig(getState))
    .delete(`/backend/api/bookings/${id}/`)
    .then(res => {
      // dispatch(createMessage({ deleteBooking: "Booking Deleted" }));
      dispatch({
        type: DELETE_BOOKING,
        payload: id
      });
    })
    .catch(err => console.log(err));
};




