import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/auth";
import { createMessage } from "../../actions/messages";

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      password2: "",
    };
  }

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, password2 } = this.state;

    const newUser = {
      username,
      email,
      password,
    };

    const uName = /^[A-Za-z]+$/;
    if (!username.match(uName)) {
      this.props.createMessage({
        non_field_errors: "Username must be alphabets only",
      });
      return false;
    } 

    const emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.match(emailregex)) {
      this.props.createMessage({
        non_field_errors: "Correct email is required",
      });
      return false;
    } 
    
    const passregex = /^\w{6,50}$/;
    if (!password.match(passregex)) {
      this.props.createMessage({
        non_field_errors: "Password must be 6 to 50 characters",
      });
      return false;
    } 
    
    if (password !== password2) {
      this.props.createMessage({
        passwordNotMatch: "Passwords do not match",
      });
      return false;
    } 
  
    const response = await fetch(this.props.register(newUser));
    if (response.status !== 200){
      return false;
    }

    else{
      return true;
    }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, email, password, password2} = this.state;
    return (
      <div className="main-card-signup">
        <div className="card" id="signup-card">
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <h3 className="heading3">Signup</h3>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="User Name"
                  name="username"
                  onChange={this.onChange}
                  value={username}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  onChange={this.onChange}
                  value={email}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Create Password"
                  name="password"
                  onChange={this.onChange}
                  value={password}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Comfirm Password"
                  name="password2"
                  onChange={this.onChange}
                  value={password2}
                />
              </div>
              <div className="custom-control custom-switch">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customSwitches"
                  required
                />
                <label
                  className="custom-control-label"
                  for="customSwitches"
                  id="terms"
                >
                  I agree to the terms and conditions set by Dasuns
                </label>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-success btn-block">
                  SIGNUP
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register, createMessage })(Register);
