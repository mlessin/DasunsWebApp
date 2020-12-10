import { combineReducers } from "redux";
import auth from "./auth";
import errors from "./errors";
import messages from "./messages";
import bookings from "./bookings";
import serviceProviders from "./serviceProviders";

export default combineReducers({
  bookings,
  serviceProviders, 
  auth,
  errors,
  messages
});
