import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.css";
import Logo from "../images/Logo.png";
import LogoWhite from "../images/LogoWhite.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";

import {
  Navbar,
  Nav,
  // Badge,
  // Image,
  Container,
  Row,
  Col,
  // Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";


export class Request extends Component {
  render() {
    const { history } = this.props;

    const mystyle1 = {
      color: "#fff",
      backgroundColor: "#006712",
      borderRadius: "10px",
      fontFamily: "Montserrat",
      textDecoration: "none",
      padding: "8px",
    };
    return (
      <div className="body">
        <Navbar sticky="top" collapseOnSelect expand="md">
          <Navbar.Brand href="#home">
            <img src={Logo} alt={"logo"} style={{ height: "50px" }} onClick={() => history.push("/")}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features"></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Services</Nav.Link>
              <Nav.Link href="#req">My Requests</Nav.Link>

              <Nav.Link href="#bell">Bell icon</Nav.Link>
              <Nav.Link href="#bash">Bash Shadrack</Nav.Link>
              <Nav.Link href="#service">
                <Link to="/bookingForm" style={mystyle1}>
                  Request Service
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="green-service1 " fluid="md">
          <Container
            fluid
            style={{
              fontSize: 25,
              paddingBottom: "5px",
              marginBottom: "20px",
            }}
          >
            <Row>
              <Col>
                <div>My Service Requests</div>
              </Col>
              <Col>
                <div>Ongoing</div>
              </Col>
              <Col>
                <div>Completed</div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="white-services">
          <h2>My Service Requests</h2>
        </div>

        <div className="requests">
          <h3>SIGN LANGUAGE INTERPRETER</h3>
          {/* <br /> */}
          <div>
            Mark Shanty
            <br />
            2hrs
            <br />
            14th Nov 2020
            <br />
            10:00am - 12:00pm
            <br />
            King Fahad Plaza Kampala Road
            <br />
            40,000ugx
          </div>
        </div>

        <div>
          <footer className="footer">
            <div class="container pt-5 border-bottom">
              <div class="row">
                <div class="col-md-3 col-sm-12 mb-3 ">
                  <img
                    src={LogoWhite}
                    alt={"logo"}
                    style={{ height: "50px" }}
                  />
                </div>
                <div class="col-md-9 col-sm-12">
                  <div class="col-md-3 col-sm-6 col-6 p-0 float-left mb-3">
                    <h6 class="mb-4 font-weight-bold">About Us</h6>
                  </div>

                  <div class="col-md-3 col-sm-6 col-6 p-0 mb-3 float-left">
                    <h6 class="mb-2 font-weight-bold">FAQ</h6>
                  </div>

                  <div class="col-md-3 col-sm-6 col-6 mb-3 p-0 float-left">
                    <h6 class="mb-4 font-weight-bold">Contact Us</h6>
                  </div>

                  <div class="col-md-3 col-sm-6 col-6 mb-3 p-0 float-left">
                    <h6 class="mb-4 font-weight-bold">Follow Us On</h6>
                    <img
                      src={facebook}
                      alt={"facebook"}
                      style={{ height: "40px" }}
                    />
                    <img
                      src={twitter}
                      alt={"twitter"}
                      style={{ height: "40px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
export default Request;
