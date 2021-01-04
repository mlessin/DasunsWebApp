import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import "./App.css";
import Landing from "./components/Landing";
import SPlist from "./components/SPlist";
// import { SignupServiceP } from "./components/serviceProvider/SignupServiceP";
import PrivateRoute from "./components/common/PrivateRoute";
import { ParentModal } from "./components/accounts/ParentModal";
import BookingForm from "./components/BookingForm";
import Request from "./components/Request";
import ServiceReg from "./components/serviceProvider/ServiceReg";
import Alerts from "./components/layout/Alerts";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";

// import Banner from "./components/Banner";
// import Headers from "./components/layout/Headers";

const alertOptions = {
  timeout: 3000,
  position: "middle right",
};

export default class App extends Component {
  state = {
    redirect: true,
  };

  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    const notfound = () => {
      const { redirect } = this.state;
      if (redirect) {
        return <Redirect to="/" />;
      }
    };
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <div className="App">
                {/* <ServiceReg /> */}
                <Alerts />
                {/* <Banner /> */}
                {/* <SPlist /> */}
                {/* <Landing /> */}
                <Switch>
                  <Route path="/parent" exact component={ParentModal} />
                  <Route path="/" exact component={Landing} />
                  <PrivateRoute path="/splist" exact component={SPlist} />
                  <PrivateRoute path="/bookingForm" exact component={BookingForm} />
                  <PrivateRoute path="/request" exact component={Request} />
                  <PrivateRoute
                    path="/signupservicep"
                    exact
                    component={ServiceReg}
                  />
                  <Route component={notfound} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}
