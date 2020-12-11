import {
  ADD_BOOKING,
  GET_BOOKINGS,
  GET_ONE_BOOKING,
  UPDATE_BOOKING,
  DELETE_BOOKING,
} from "../actions/types";

const initialState = {
  bookings: [],
  booking: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_BOOKING:
      return {
        ...state,
        bookings: [...state.bookings, action.payload],
      };
    case GET_BOOKINGS:
      return {
        ...state,
        bookings: action.payload,
      };
    case GET_ONE_BOOKING:
      return {
        ...state,
        booking: action.payload,
      };

    case UPDATE_BOOKING:
      return {
        ...state,
        bookings: state.bookings.map((booking) =>
          booking.id === action.payload.id ? action.payload : booking
        ),
      };

    case DELETE_BOOKING:
      return {
        ...state,
        bookings: state.bookings.filter(
          (booking) => booking.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
