import {
    ADD_SERVICEPROVIDER,
    GET_SERVICEPROVIDERS,
    GET_ONE_SERVICEPROVIDER,
    UPDATE_SERVICEPROVIDER,
    DELETE_SERVICEPROVIDER
  } from "../actions/types";
  
  const initialState = {
    serviceProviders: [],
    serviceProvider: {},
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case ADD_SERVICEPROVIDER:
        return {
          ...state,
          serviceProviders: [...state.serviceProviders, action.payload],
        };
      case GET_SERVICEPROVIDERS:
        return {
          ...state,
          serviceProviders: action.payload,
        };
      case GET_ONE_SERVICEPROVIDER:
        return {
          ...state,
          serviceProvider: action.payload,
        };
  
      case UPDATE_SERVICEPROVIDER:
        return {
          ...state,
          serviceProviders: state.serviceProviders.map((serviceProvider) =>
          serviceProvider.id === action.payload.id ? action.payload : serviceProvider
          ),
        };
  
      case DELETE_SERVICEPROVIDER:
        return {
          ...state,
          serviceProviders: state.serviceProviders.filter(
            (serviceProvider) => serviceProvider.id !== action.payload
          ),
        };
      default:
        return state;
    }
  }
  