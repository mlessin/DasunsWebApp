import { combineReducers } from "redux";
import auth from "./auth";
import errors from "./errors";
import messages from "./messages";
import bookings from "./bookings";
import serviceProviders from "./serviceProviders";
import ratings from "./ratings";
 
export default combineReducers({
  bookings,
  serviceProviders, 
  ratings,
  auth,
  errors,
  messages
});
