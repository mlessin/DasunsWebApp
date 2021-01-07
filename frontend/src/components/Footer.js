import React, { Component } from "react";
import LogoWhite from "../images/LogoWhite.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";

export default class Footer extends Component{
    render() {
        return (
<footer className="footer">
              <div className="container pt-5 border-bottom">
                <div className="row">
                  <div className="col-md-3 col-sm-12 mb-3 ">
                    <img
                      src={LogoWhite}
                      alt={"logo"}
                      style={{ height: "50px" }}
                    />
                  </div>
                  <div className="col-md-9 col-sm-12">
                    <div className="col-md-3 col-sm-6 col-6 p-0 float-left mb-3">
                      <h6 className="mb-4 font-weight-bold">About Us</h6>
                    </div>

                    <div className="col-md-3 col-sm-6 col-6 p-0 mb-3 float-left">
                      <h6 className="mb-2 font-weight-bold">FAQ</h6>
                    </div>

                    <div className="col-md-3 col-sm-6 col-6 mb-3 p-0 float-left">
                      <h6 className="mb-4 font-weight-bold">Contact Us</h6>
                    </div>

                    <div className="col-md-3 col-sm-6 col-6 mb-3 p-0 float-left">
                      <h6 className="mb-4 font-weight-bold">Follow Us On</h6>
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
            );
            }
            }
            