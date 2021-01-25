import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
// import Logo from "../images/Logo.png";
import LogoWhite from "../images/LogoWhite.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import worker from "../images/worker.jpg";
// import { Link } from "react-router-dom";
// import { withRouter } from "react-router-dom";
import Banner from "./Banner";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getServiceProviders } from "../actions/serviceProviders";

export class SPlist extends Component {
  static propTypes = {
    serviceProviders: PropTypes.array.isRequired,
    getServiceProviders: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getServiceProviders();
  }

  render() {
    const { history } = this.props;

    // const mystyle1 = {
    //   color: "#fff",
    //   backgroundColor: "#006712",
    //   borderRadius: "10px",
    //   fontFamily: "Montserrat",
    //   textDecoration: "none",
    //   padding: "8px",
    // };

    return (
      <div>
        <Banner />
        <section
          id="header"
          class="jumbotron text-center text-white img-responsive"
        >
          <h1 class="display-6">All available interpreters</h1>
          <p class="lead">
            Browse through the list of professional interpreters and make your
            booking
          </p>
        </section>
        <div className="availHead">
          <h2>Available Interpreters</h2>
        </div>
        <div className="subavail">Only allowed to book one interpreter</div>
        <div className="ServiceP-list">
          {this.props.serviceProviders.map((serviceProvider) => (
            <div key={serviceProvider.id}>
              <div className="overallcontainer">
                <div className="container">
                  <div className= "row">
                    <div className= "col-1">
                    <img
                          src={worker}
                          alt={"Service-provider"}
                          style={{ height: "50px" }}
                          onClick={() => history.push("/")}
                        />
                      </div>

                      <div className= "col-11">
                        <p>
                          <strong>D00{serviceProvider.id}-</strong>
                          {serviceProvider.fullname}
                        </p>
                        <p>
                          <strong> UGX: {serviceProvider.pricevisit} Per Visit</strong>
                        </p>
                        <p>
                          <strong>Quality: </strong>
                        </p>
                        <p>
                          <strong> {serviceProvider.phyadd}</strong>
                        </p>
                        <div style={{ marginTop: "-70px", marginBottom:"20px" }}>
                          <button className="btn btn-success btn-sm">BOOK INTERPRETER</button>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <footer className="footer">
            <div class="container pt-5 border-bottom">
              <div class="row">
                <div class="col-md-3 col-sm-12 mb-3 ">
                  <img
                    src={LogoWhite}
                    alt={"logo"}
                    style={{ height: "50px" }}
                  />
                </div>
                <div class="col-md-9 col-sm-12">
                  <div class="col-md-3 col-sm-6 col-6 p-0 float-left mb-3">
                    <h6 class="mb-4 font-weight-bold">About Us</h6>
                  </div>

                  <div class="col-md-3 col-sm-6 col-6 p-0 mb-3 float-left">
                    <h6 class="mb-2 font-weight-bold">FAQ</h6>
                  </div>

                  <div class="col-md-3 col-sm-6 col-6 mb-3 p-0 float-left">
                    <h6 class="mb-4 font-weight-bold">Contact Us</h6>
                  </div>

                  <div class="col-md-3 col-sm-6 col-6 mb-3 p-0 float-left">
                    <h6 class="mb-4 font-weight-bold">Follow Us On</h6>
                    <img
                      src={facebook}
                      alt={"facebook"}
                      style={{ height: "40px" }}
                    />
                    <img
                      src={twitter}
                      alt={"twitter"}
                      style={{ height: "40px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  serviceProviders: state.serviceProviders.serviceProviders,
});

export default connect(mapStateToProps, { getServiceProviders })(SPlist);
