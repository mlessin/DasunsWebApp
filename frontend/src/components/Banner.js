import React, { Component } from "react";
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  NavDropdown,
  Button,
  ButtonToolbar
} from "react-bootstrap";
import Logo from "../images/Logo.png";
import { Link } from "react-router-dom";
import SignupModal from "./accounts/SignupModal";
import LoginModal from "./accounts/LoginModal";

export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addModalShow: false,
      addModalShowSign: false
    };
  }
  render() {
    const { history } = this.props;
    let addModalClose = () => this.setState({ addModalShow: false });
    let addModalCloseSign = () => this.setState({ addModalShowSign: false });

    const mystyle = {
      color: "#fff",
      backgroundColor: "#006734",
      borderRadius: "6px",
      fontFamily: "Montserrat",
      marginRight: "10px",
      textDecoration: "none"
    };
    const mystyle1 = {
      color: "#fff",
      backgroundColor: "#006712",
      
      borderRadius: "50px",
      fontFamily: "Montserrat",
      textDecoration: "none"
    };
    const button = {
      fontFamily: "Montserrat",
      borderColor: "#fff",
      marginRight: "10px"
    };

    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <a href="#">
            <img src={Logo} alt={"logo"} style={{ height: "50px" }} onClick={() => history.push("/")} />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-right" style={{ marginLeft: "10em" }}>
            <Nav.Link href="# ">Services</Nav.Link>
            <Nav.Link href="# ">Who We Are</Nav.Link>
            <Nav.Link href="# ">How It Works</Nav.Link>
            <ButtonToolbar style={{ border: "none" }}>
              <button
                style={button}
                onClick={() => this.setState({ addModalShow: true })}
              >
                Login
              </button>
              <LoginModal
                show={this.state.addModalShow}
                onHide={addModalClose}
              />
            </ButtonToolbar>
            <ButtonToolbar>
              <button
                style={button}
                onClick={() => this.setState({ addModalShowSign: true })}
              >
                Signup
              </button>
              <SignupModal
                show={this.state.addModalShowSign}
                onHide={addModalCloseSign}
              />
            </ButtonToolbar>
            <Link to="/bookingForm" style={mystyle}>
              Request Now
            </Link>
            <Link to="/signupserviceprov" style={mystyle1}>
              Provide a Service
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
