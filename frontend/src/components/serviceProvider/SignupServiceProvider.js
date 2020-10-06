import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "../style.css";
// import Logo from "../../images/Logo.png";
// import { Link, Redirect } from "react-router-dom";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { signup } from "../../actions/auth";
// import { createMessage } from "../../actions/messages";
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

  //   static propTypes = {
  //     signup: PropTypes.func.isRequired,
  //     isAuthenticated: PropTypes.bool
  //   };

  // onSubmit = e => {
  //   e.preventDefault();
  //   const { username, email, password, password2 } = this.state;
  //   if (!username) {
  //     this.props.createMessage({ non_field_errors: "Username is required" });
  //   } else if (!email) {
  //     this.props.createMessage({
  //       non_field_errors: "Correct email is required"
  //     });
  //   } else if (!password) {
  //     this.props.createMessage({
  //       non_field_errors: "Password is required"
  //     });
  //   } else if (password !== password2) {
  //     this.props.createMessage({
  //       passwordNotMatch: "Passwords do not match"
  //     });
  //   } else {
  //     const newUser = {
  //       username,
  //       email,
  //       password
  //     };
  //     this.props.signup(newUser);
  //   }
  // };

  // onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    // if (this.props.isAuthenticated) {
    //   return <Redirect to="/display" />;
    // }
    const {
      fullname,
      phonenumber,
      email,
      password,
      nin,
      dob,
      gender,
      physicaladdress
    } = this.state;
    return (
      <div className="main-service">
        <PaginationPage />
        <div className="card" id="signup-service-card">
          <div className="card-body" id="cardBody">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name (Required)"
                  name="fullname"
                  // onChange={this.onChange}
                  // value={fullname}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number(Required)"
                  name="phonenumber"
                  // onChange={this.onChange}
                  // value={phonenumber}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email(Required)"
                  name="email"
                  // onChange={this.onChange}
                  // value={email}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password(Required)"
                  name="password"
                  // onChange={this.onChange}
                  // value={password}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="NIN(Required)"
                  name="nin"
                  // onChange={this.onChange}
                  // value={nin}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="date"
                  className="form-control"
                  placeholder="DOB(Required)"
                  name="dob"
                  // onChange={this.onChange}
                  // value={dob}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Gender(Required)"
                  name="gender"
                  // onChange={this.onChange}
                  // value={gender}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Physical Address(Required)"
                  name="physicaladdress"
                  // onChange={this.onChange}
                  // value={physicaladdress}
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

// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.isAuthenticated
// });

// export default connect(mapStateToProps, { signup, createMessage })(Signup);
