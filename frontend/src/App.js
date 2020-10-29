import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Redirect
} from "react-router-dom";
// import { Provider as AlertProvider } from "react-alert";
// import AlertTemplate from "react-alert-template-basic";
import "./App.css";
// import Banner from "./components/Banner";

import Landing from "./components/Landing";
import SPlist from "./components/SPlist";

import SignupModal from "./components/accounts/SignupModal";
import LoginModal from "./components/accounts/LoginModal";
import PaginationPage from "./components/PaginationPage";
import SignupServiceProvider from "./components/serviceProvider/SignupServiceProvider";
import SignupServiceP2 from "./components/serviceProvider/SignupServiceP2";
import SignupServiceP3 from "./components/serviceProvider/SignupServiceP3";
import SignupServiceP4 from "./components/serviceProvider/SignupServiceP4";
import SignupServiceP5 from "./components/serviceProvider/SignupServiceP5";
// import Pag from "./components/Pag";
import bookingForm from "./components/bookingForm";
import Request from "./components/Request";
// import PrivateRoute from "./components/common/PrivateRoute";
// import Headers from "./components/layout/Headers";
// import Alerts from "./components/layout/Alerts";
// import { Provider } from "react-redux";
// import store from "./store";
// import { loadUser } from "./actions/auth";

// const alertOptions = {
//   timeout: 3000,
//   position: "top center"
// };

export default class App extends Component {
  state = {
    redirect: true
  };

  // componentDidMount() {
  //   store.dispatch(loadUser());
  // }

  render() {
    // const notfound = () => {
    //   const { redirect } = this.state;
    //   if (redirect) {
    //     return <Redirect to="/newproject" />;
    //   }
    // };
    return (
      // <Provider store={store}>

      // <AlertProvider template={AlertTemplate} {...alertOptions}>
      <Router>
        <Fragment>
          <div className="App">
            {/* <Headers /> */}
            {/* <Alerts />  */}
            {/* <Banner /> */}
            {/* <SPlist /> */}
            {/* <Landing /> */}
            <Switch>
              <Route path="/" exact component={Landing} />
              <Route path="/signup" exact component={SignupModal} />
              <Route path="/login" exact component={LoginModal} />
              <Route path="/splist" exact component={SPlist} />
              <Route path="/pag" exact component={PaginationPage} />
              {/* <Route path="/mypag" exact component={Pag} /> */}
              <Route path="/bookingForm" exact component={bookingForm} /> 
              <Route path="/Request" exact component={Request} />
              <Route
                path="/signupserviceprov"
                exact
                component={SignupServiceProvider}
              />
              <Route
                path="/signupserviceprov2"
                exact
                component={SignupServiceP2}
              />
              <Route
                path="/signupserviceprov3"
                exact
                component={SignupServiceP3}
              />
              <Route
                path="/signupserviceprov4"
                exact
                component={SignupServiceP4}
              />
                <Route
                path="/signupserviceprov5"
                exact
                component={SignupServiceP5}
              />
            </Switch>
          </div>
        </Fragment>
      </Router>
      // </AlertProvider>

      // </Provider>
    );
  }
}
