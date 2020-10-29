import React, { Component } from "react";
import "../style.css";
import PaginationPage from "../PaginationPage";
import Banner from "../Banner";

export default class SignupServiceP4 extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <Banner />
        <div className="main-service">
          <PaginationPage />
          <div className="card" id="signup-service-card">
            <div className="card-body" id="cardBody">
              <form onSubmit={this.onSubmit}>
                <div className="container">
                  <h4>
                    <b>We only work with Professionals</b>
                  </h4>
                  <p>
                    We would like you to tell us more about yourself and your
                    professional services that you offer
                  </p>

                  <div className="row">
                    <div className="col-12 ">
                      <div className="form-textarea">
                        <textarea
                          type="text"
                          className="form-control"
                          name="profession"
                          required
                        />
                        <p>100 words</p>
                      </div>
                    </div>
                  </div>
                  <p>
                    <b>Provide us with 2 Referees who we can contact</b>
                    <small style={{ color: "red" }}> (Required)</small>
                  </p>
                  <p>
                    Referee 1<small style={{ color: "red" }}> (Required)</small>
                  </p>

                  <div className="row">
                    <div className="col-5">
                      <div className="form-inputs">
                        <input
                          type="text"
                          placeholder="Full Name"
                          name="fullname"
                          className="left-inputs"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-2"></div>

                    <div className="col-5">
                      <div className="form-inputs">
                        <input
                          type="text"
                          placeholder="Description/Title"
                          name="description"
                          className="right-inputs"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-5">
                      <div className="form-inputs">
                        <input
                          type="text"
                          placeholder="Email"
                          name="email"
                          className="left-inputs"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-2"></div>

                    <div className="col-5">
                      <div className="form-inputs">
                        <input
                          type="text"
                          placeholder="Phone Number"
                          name="phonenumber"
                          className="right-inputs"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <p>
                    Referee 2{" "}
                    <small style={{ color: "red" }}> (Required)</small>
                  </p>

                  <div className="row">
                    <div className="col-5">
                      <div className="form-inputs">
                        <input
                          type="text"
                          placeholder="Full Name"
                          name="fullname"
                          className="left-inputs"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-2"></div>

                    <div className="col-5">
                      <div className="form-inputs">
                        <input
                          type="text"
                          placeholder="Description/Title"
                          name="description"
                          className="right-inputs"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-5">
                      <div className="form-inputs">
                        <input
                          type="text"
                          placeholder="Email"
                          name="email"
                          className="left-inputs"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-2"></div>

                    <div className="col-5">
                      <div className="form-inputs">
                        <input
                          type="text"
                          placeholder="Phone Number"
                          name="phonenumber"
                          className="right-inputs"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-5">
                      <div id="btn-group">
                        <button
                          type="submit"
                          id="btn-default"
                          onClick={() => history.push("/signupserviceprov4")}
                        >
                          <strong>BACK TO PREVIOUS</strong>
                        </button>
                      </div>
                    </div>

                    <div className="col-2"></div>

                    <div className="col-5">
                      <div id="btn-group">
                        <button
                          type="submit"
                          id="btn-success"
                          onClick={() => history.push("/signupserviceprov5")}
                        >
                          <strong>SAVE & CONTINUE</strong>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
