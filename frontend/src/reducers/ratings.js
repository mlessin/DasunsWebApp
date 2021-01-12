import {
    ADD_RATING,
    GET_RATINGS,
    GET_ONE_RATING,
    UPDATE_RATING,
    DELETE_RATING,
  } from "../actions/types";
  
  const initialState = {
    ratings: [],
    rating: {},
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case ADD_RATING:
        return {
          ...state,
          ratings: [...state.ratings, action.payload],
        };
      case GET_RATINGS:
        return {
          ...state,
          ratings: action.payload,
        };
      case GET_ONE_RATING:
        return {
          ...state,
          rating: action.payload,
        };
  
      case UPDATE_RATING:
        return {
          ...state,
          ratings: state.ratings.map((rating) =>
            rating.id === action.payload.id ? action.payload : rating
          ),
        };
  
      case DELETE_RATING:
        return {
          ...state,
          ratings: state.ratings.filter(
            (rating) => rating.id !== action.payload
          ),
        };
      default:
        return state;
    }
  }
  

  