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
import SPlistCpt from "./components/SPlistCpt";
import SPlistIsi from "./components/SplistIsi";
import SPlistMg from "./components/SplistMg";
import SPlistPsa from "./components/SplistPsa";
import SPlistUsi from "./components/SplistUsi";
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
import Message from "./components/MessageModal"


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
                  <Route path="/" exact component={Landing} />
                  <Route path="/parent" exact component={ParentModal} />
                  <Route path="/message" exact component={Message} />
                  <PrivateRoute path="/splist-psa" exact component={SPlistPsa} />
                  <PrivateRoute path="/splist-usi" exact component={SPlistUsi} />
                  <PrivateRoute path="/splist-isi" exact component={SPlistIsi} />
                  <PrivateRoute path="/splist-cpt" exact component={SPlistCpt} />
                  <PrivateRoute path="/splist-mg" exact component={SPlistMg} />
                  <PrivateRoute path='/bookingForm/${id}' exact component={BookingForm} />
                  {/* <PrivateRoute path='/bookingForm/:id' render={(props) => <BookingForm {...props}/>}/> */}
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
