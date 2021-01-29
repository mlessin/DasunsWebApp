import React, { Component } from "react";
import {
  Nav,
  Navbar,
  // Form,
  // FormControl,
  // NavDropdown,
  // Button,
  // ButtonToolbar
} from "react-bootstrap";
import Logo from "../images/Logo.png";
import { Link, Redirect } from "react-router-dom";
// import SignupModal from "./accounts/SignupModal";
// import LoginModal from "./accounts/LoginModal";
// import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../actions/auth";

export class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // addModalShow: false,
      // addModalShowSign: false
    };
  }

  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  render() {
    const { history } = this.props;
    const { isAuthenticated, user } = this.props.auth;
    // let addModalClose = () => this.setState({ addModalShow: false });
    // let addModalCloseSign = () => this.setState({ addModalShowSign: false });

    const mystyle = {
      color: "#fff",
      backgroundColor: "#006734",
      borderRadius: "6px",
      fontFamily: "Montserrat",
      marginRight: "10px",
      marginLeft: "10px",
      textDecoration: "none",
      padding: "8px",
    };
    const mystyle1 = {
      color: "#fff",
      backgroundColor: "#006712",
      borderRadius: "50px",
      fontFamily: "Montserrat",
      textDecoration: "none",
      padding: "8px",
    };
    const button = {
      fontFamily: "Montserrat",
      borderColor: "#fff",
      marginRight: "10px",
    };

    const request = {
      textDecoration: "none",
      color: "gray",
      padding: "8px",
      paddingBottom: "15px",
    };

    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Link to="/">
          <img
            src={Logo}
            alt={"logo"}
            style={{ height: "50px" }}
          />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features"></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Services</Nav.Link>
            <span>
              <Link to="/request" style={request}>
                My Requests
              </Link>
            </span>
            <Nav.Link href="#bell">Bell icon</Nav.Link>
            <span className="navbar-text mr-3">
              <strong>{user ? `${user.username}` : ""}</strong>
            </span>
            {/* <Link to="/bookingForm" style={mystyle}>
              Request Now
            </Link> */}
            <Link to="/signupservicep" style={mystyle1}>
              Provide a Service
            </Link>
            <li>
              <button
                style={mystyle}
                onClick={this.props.logout}
                className="nav-link"
              >
                Logout
              </button>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Banner);

// export default withRouter(Banner)
