import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../style.css";
import Logo from "../../images/Logo.png";
import { Link } from "react-router-dom";
import Banner from "../Banner";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { login } from "../../actions/auth";

export class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  //   static propTypes = {
  //     login: PropTypes.func.isRequired,
  //     isAuthenticated: PropTypes.bool
  //   };
  //   onSubmit = e => {
  //     e.preventDefault();
  //     this.props.login(this.state.username, this.state.password);
  //   };

  //   onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    // if (this.props.isAuthenticated) {
    //   return <Redirect to="/display" />;
    // }
    // const { username, password } = this.state;
    return (
      <div>
        <Banner />
        <div class="main">
          <div class="card">
            <div class="card-body">
              <form>
                <div>
                  <div>
                    <img src={Logo} alt={"logo"} />
                  </div>
                </div>
                <h3 className="heading3">Login</h3>
                <div className="form-group">
                  <input
                    type="phone"
                    className="form-control"
                    placeholder="Phone number"
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-success btn-block">
                  Submit
                </button>
                <p className="forgot-password text-center">
                  Forgot Password? <a href="#">Reset Password</a>
                </p>
                <p>
                  Don't have an account?
                  <Link to="/signup">Signup</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.isAuthenticated
// });

// export default connect(mapStateToProps, { login })(Login);

export default Login;
