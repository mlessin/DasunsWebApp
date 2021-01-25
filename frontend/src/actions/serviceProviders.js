import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import {
    ADD_SERVICEPROVIDER,
    GET_SERVICEPROVIDERS,
    GET_ONE_SERVICEPROVIDER,
    UPDATE_SERVICEPROVIDER,
    DELETE_SERVICEPROVIDER
} from "./types";
import { tokenConfig } from "./auth";

//ADD SERVICEPROVIDER
export const addServiceProvider = serviceprovider => (dispatch, getState) => {
    axios
      .post("/backend/api/serviceproviders/", serviceprovider, tokenConfig(getState))
      .then(res => {
        console.log(res.data);
        dispatch(createMessage({ addServiceProvider: "Service Provider Added!" }));
        dispatch({
          type: ADD_SERVICEPROVIDER,
          payload: res.data
        }); 
      })
      .catch(err =>{
        dispatch(returnErrors(err.response.data, err.response.status));
        // dispatch(createMessage({ loginfail: "Incorrect credentials supplied" }));
      });
  };
  
//GET SERVICEPROVIDERS
export const getServiceProviders = () => (dispatch, getState) => {
  axios
    .get("/backend/api/serviceproviders/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_SERVICEPROVIDERS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// GET ONE SERVICEPROVIDER
export const oneServiceProvider = id => (dispatch, getState) => {
    axios
      .get(`/backend/api/serviceproviders/${id}/`, tokenConfig(getState))
      .then(res => {
        console.log(res.data);
        dispatch({
          type: GET_ONE_SERVICEPROVIDER,
          payload: res.data
        });
      })
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
};

//UPDATE SERVICEPROVIDER 
export const updateServiceProvider = (id, serviceprovider) => (dispatch, getState) => {
    axios
      .put(`/backend/api/serviceproviders/${id}/`, serviceprovider, tokenConfig(getState))
      .then(res => {
        dispatch(createMessage({ updateServiceProvider: "Service Provider Updated" }));
        dispatch({
          type: UPDATE_SERVICEPROVIDER,
          payload: res.data
        });
      })
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
  
 
//DELETE_SERVICEPROVIDER
export const deleteServiceProvider = id => (dispatch, getState) => {
  axios
    .delete(`/backend/api/serviceproviders/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteServiceProvider: "Service Provider Deleted" }));
      dispatch({
        type: DELETE_SERVICEPROVIDER,
        payload: id
      });
    })
    .catch(err => console.log(err));
};




