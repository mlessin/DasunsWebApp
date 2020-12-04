import { combineReducers } from "redux";
import bookings from "./bookings";
import serviceProviders from "./serviceProviders";

export default combineReducers({
  bookings,
  serviceProviders, 
});
