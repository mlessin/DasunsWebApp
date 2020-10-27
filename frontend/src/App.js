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
import Banner from "./components/Banner";
import SignupModal from "./components/accounts/SignupModal";
import LoginModal from "./components/accounts/LoginModal";
import PaginationPage from "./components/PaginationPage";
import SignupServiceProvider from "./components/serviceProvider/SignupServiceProvider";
import Pag from "./components/Pag";
import bookingForm from "./components/bookingForm";
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
      //  <Provider store={store}>
      // <AlertProvider template={AlertTemplate} {...alertOptions}>
      <Router>
        <Fragment>
          <div className="App">
            {/* <Headers /> */}
            {/* <Alerts />  */}
            {/* <Banner /> */}
            <Switch>
              {/* <Route path="/signup" exact component={SignupModal} />
              <Route path="/login" exact component={LoginModal} />
              <Route path="/pag" exact component={PaginationPage} />
              <Route path="/mypag" exact component={Pag} /> */}
                <Route path="/bookingForm" exact component={bookingForm} /> 
              <Route
                // path="/signupserviceprov"
                exact
                // component={SignupServiceProvider}
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
