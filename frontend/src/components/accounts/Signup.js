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
      error: ""
    }
}
  // state = {
  //   username: "",
  //   email: "",
  //   password: "",
  //   password2: "",
  //   // error: "",
  // };

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, password2} = this.state;

    const newUser = {
      username,
      email,
      password
    };
    
    const response = await fetch(this.props.register(newUser));
    const responseJson = await response.json();
    if (!username) {
      this.props.createMessage({
        non_field_errors: "Please provide your User Name",
      });
    } else if (!email) {
      this.props.createMessage({
        non_field_errors: "Correct email is required",
      });
    } else if (!password) {
      this.props.createMessage({
        non_field_errors: "Password is required",
      });
    } else if (password !== password2) {
      this.props.createMessage({
        passwordNotMatch: "Passwords do not match",
      });
    } else if (response.status !== 200) {
      this.setState({ error: responseJson.error });
      this.props.createMessage({
        error: "Email already in use"
      });
    }
    // else {
    //   // this.props.register(newUser);
    //   console.log(username);
     
    // }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, email, password, password2, error } = this.state;
    return (
      <div className="main-card-signup">
        <div className="card" id="signup-card">
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <span>{error}</span>
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

// import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { register } from "../../actions/auth";
// import { createMessage } from "../../actions/messages";

// export class Register extends Component {
//   state = {
//     username: "",
//     email: "",
//     password: "",
//     password2: "",
//   };

//   static propTypes = {
//     register: PropTypes.func.isRequired,
//     isAuthenticated: PropTypes.bool,
//   };

//   onSubmit = (e) => {
//     e.preventDefault();
//     const { username, email, password, password2 } = this.state;
//     if (!username) {
//       this.props.createMessage({ non_field_errors: "Please provide your User Name" });
//     } else if (!email) {
//       this.props.createMessage({
//         non_field_errors: "Correct email is required",
//       });
//     } else if (!password) {
//       this.props.createMessage({
//         non_field_errors: "Password is required",
//       });
//     } else if (password !== password2) {
//       this.props.createMessage({
//         passwordNotMatch: "Passwords do not match",
//       });
//     } else {
//       const newUser = {
//         username,
//         email,
//         password,
//       };
//       this.props.register(newUser);
//     }
//   };

//   onChange = (e) => this.setState({ [e.target.name]: e.target.value });

//   render() {
//     if (this.props.isAuthenticated) {
//       return <Redirect to="/" />;
//     }
//     const { username, email, password, password2 } = this.state;
//     // const { history } = this.props;
//     return (
//       <div className="main-card-signup">
//         <div className="card" id="signup-card">
//           <div className="card-body">
//             <form onSubmit={this.onSubmit}>
//               <h3 className="heading3">Signup</h3>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="User Name"
//                   name="username"
//                   onChange={this.onChange}
//                   value={username}
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="email"
//                   className="form-control"
//                   placeholder="Email"
//                   name="email"
//                   onChange={this.onChange}
//                   value={email}
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="password"
//                   className="form-control"
//                   placeholder="Create Password"
//                   name="password"
//                   onChange={this.onChange}
//                   value={password}
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="password"
//                   className="form-control"
//                   placeholder="Comfirm Password"
//                   name="password2"
//                   onChange={this.onChange}
//                   value={password2}
//                 />
//               </div>
//               <div className="custom-control custom-switch">
//                 <input
//                   type="checkbox"
//                   className="custom-control-input"
//                   id="customSwitches"
//                   required
//                 />
//                 <label className="custom-control-label" for="customSwitches" id="terms">
//                   I agree to the terms and conditions set by Dasuns
//                 </label>
//               </div>
//               <div className="form-group">
//                 <button
//                   type="submit"
//                   className="btn btn-success btn-block"
//                 >
//                   SIGNUP
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   isAuthenticated: state.auth.isAuthenticated,
// });

// export default connect(mapStateToProps, { register, createMessage })(Register);
