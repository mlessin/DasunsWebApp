import React, { Component } from "react";
import "../style.css";
import PaginationPage from "../PaginationPage";

export default class SignupServiceProvider extends Component {
  state = {
    fullname: "",
    phonenumber: "",
    email: "",
    password: "",
    nin: "",
    dob: "",
    gender: "",
    physicaladdress: ""
  };
  render() {
    return (
      <div className="main-service">
        <PaginationPage />
        <div className="card" id="signup-service-card">
          <div className="card-body" id="cardBody">
            <form onSubmit={this.onSubmit}>
              <h3>
                <b>Personal Details</b>
              </h3>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name (Required)"
                  name="fullname"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number(Required)"
                  name="phonenumber"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email(Required)"
                  name="email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password(Required)"
                  name="password"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="NIN(Required)"
                  name="nin"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="date"
                  className="form-control"
                  placeholder="DOB(Required)"
                  name="dob"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Gender(Required)"
                  name="gender"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Physical Address(Required)"
                  name="physicaladdress"
                  required
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-success btn-block">
                  <strong>SAVE & CONTINUE</strong>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}