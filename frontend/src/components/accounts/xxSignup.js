import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style.css";
import Logo from "../../images/Logo.png";
// import Banner from "../Banner";
// import { Link, Redirect } from "react-router-dom";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { signup } from "../../actions/auth";
// import { createMessage } from "../../actions/messages";

export default class Signup extends Component {
  state = {
    fullname: "",
    email: "",
    phonenumber: "",
    password: ""
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
    // const { fullname, email, phonenumber, password } = this.state;
    return (
      <div className="main">
        <div className="card" id="signup-card">
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div>
                <div className="dasuns-logo">
                  <img src={Logo} alt={"logo"} />
                </div>
              </div>
              <h3 className="heading3">Signup</h3>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  name="fullname"
                  // onChange={this.onChange}
                  // value={fullname}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  // onChange={this.onChange}
                  // value={email}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phonenumber"
                  // onChange={this.onChange}
                  // value={phonenumber}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Create Password"
                  name="password"
                  // onChange={this.onChange}
                  // value={password}
                  required
                />
              </div>
              <div class="custom-control custom-switch">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customSwitches"
                  required
                />
                <label class="custom-control-label" for="customSwitches">
                  I agree to the terms and conditions set by Dasuns
                </label>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-success btn-block">
                  SIGNUP
                </button>
              </div>

              <p>
                Already have an account?
                <Link to="/login">Login</Link>
              </p>
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
