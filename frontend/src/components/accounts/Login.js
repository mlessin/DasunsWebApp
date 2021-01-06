import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

export class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, password } = this.state;
    // const { history } = this.props;
    return (
      <div className="main-card-login">
      <div className="card" id="login-card">
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <h3 className="heading3">Login</h3>
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
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                onChange={this.onChange}
                value={password}
              />
            </div>

            <button
              type="submit"
              className="btn btn-success btn-block"
            >
              Submit
            </button>
            <p className="forgot-password text-center">
              Forgot Password?
              <a className="password-reset" href="#">
                Reset Password
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);

