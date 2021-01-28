import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Logo from "../images/Logo.png";
import LogoWhite from "../images/LogoWhite.png";
import physical2 from "../images/physical2.png";
import physical from "../images/physical.png";
import deaf2 from "../images/deaf2.png";
import deaf from "../images/deaf.png";
import phydeaf from "../images/phydeaf.png";
import phydeaf2 from "../images/phydeaf2.png";
import hear2 from "../images/hear2.png";
import hear from "../images/hear.png";
import order from "../images/order.png";
import getsp from "../images/getsp.png";
import relax from "../images/relax.png";
import book from "../images/book.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
// import { withRouter } from "react-router-dom";
import {
  Navbar,
  Nav,
  Image,
  Container,
  Row,
  Col,
  Card,
  ButtonToolbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import ParentModal from "./accounts/ParentModal";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../actions/auth";
import MessageModal from "./MessageModal";

export class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addModalShowParent: false,
      addModalShowMessage: false
    };
  }
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const { history } = this.props;
    let addModalCloseParent = () =>
      this.setState({ addModalShowParent: false });
    let addModalCloseMessage = () =>
      this.setState({ addModalShowMessage: false });

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

    const authLinks = (
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
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-right" style={{ marginLeft: "10em" }}>
            <span className="navbar-text mr-3">
              <strong>{user ? `Welcome ${user.username}` : ""}</strong>
            </span>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#who-we-are">Who We Are</Nav.Link>
            <Nav.Link href="#how-it-works">How It Works</Nav.Link>
            <Nav.Link href="#services" style={mystyle}>Request Now</Nav.Link>
            {/* <Link to="/splist" style={mystyle}>
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

    const guestLinks = (
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
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-right" style={{ marginLeft: "10em" }}>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#who-we-are">Who We Are</Nav.Link>
            <Nav.Link href="#how-it-works">How It Works</Nav.Link>
            <ButtonToolbar>
              <button
                style={button}
                onClick={() => this.setState({ addModalShowParent: true })}
              >
                SignIn / SignUp
              </button>
              <ParentModal
                show={this.state.addModalShowParent}
                onHide={addModalCloseParent}
              />
            </ButtonToolbar>
            <ButtonToolbar>
              <button
                style={mystyle}
                onClick={() => this.setState({ addModalShowMessage: true })}
              >
                Request Now
              </button>
              <MessageModal
                show={this.state.addModalShowMessage}
                onHide={addModalCloseMessage}
              />
            </ButtonToolbar>
            <ButtonToolbar>
              <button
                style={mystyle1}
                onClick={() => this.setState({ addModalShowMessage: true })}
              >
                Provide a Service
              </button>
              <MessageModal
                show={this.state.addModalShowMessage}
                onHide={addModalCloseMessage}
              />
            </ButtonToolbar>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );

    return (
      <div>
        {isAuthenticated ? authLinks : guestLinks}
        <div className="body">
          <section
            id="header"
            className="jumbotron text-right text-white img-responsive"
          >
            <h1 className="display-6">
              Access Professional support service <br />
              providers at your fingertips
            </h1>
            <p className="lead">
              Leveraging technology to advance rights, choices and opportunities
              for
              <br />
              persons with disabilities
            </p>
            {/* <button
              className="btn btn-success"
              onClick={() => history.push("/bookingForm")}
            >
              Request Service
            </button> */}
          </section>

          <div className="green-service " fluid="md">
            <Container
              fluid
              style={{
                fontSize: 15,
                paddingBottom: "5px",
                marginBottom: "20px",
              }}
            >
              <Row>
                <Col>
                  <div>
                    <Image
                      src={physical2}
                      alt="Physical support"
                      style={{ height: "60px" }}
                    />
                  </div>
                  <div>All services</div>
                </Col>
                <Col>
                  <div>
                    <Image
                      src={physical2}
                      alt="personal support assistance"
                      style={{ height: "60px" }}
                      onClick={() => history.push("/splist-psa")}
                    />
                  </div>
                  <div>Personal Support Assistance</div>
                </Col>
                <Col>
                  <div>
                    <Image
                      src={deaf2}
                      alt="ugandan interpreter"
                      style={{ height: "60px" }}
                      onClick={() => history.push("/splist-usi")}
                    />
                  </div>
                  <div>Ugandan Sign-language Interpreter</div>
                </Col>
                <Col>
                  <div>
                    <Image
                      src={deaf2}
                      alt="international interpreter"
                      style={{ height: "60px" }}
                      onClick={() => history.push("/splist-isi")}
                    />
                  </div>
                  <div>International Sign-language Interpreter</div>
                </Col>
                <Col>
                  <div>
                    <Image
                      src={phydeaf}
                      alt="mobility guide"
                      style={{ height: "60px" }}
                      onClick={() => history.push("/splist-mg")}
                    />
                  </div>
                  <div>Mobility Guide</div>
                </Col>
                <Col>
                  <div>
                    <Image
                      src={hear2}
                      alt="captioning"
                      style={{ height: "60px" }}
                      onClick={() => history.push("/splist-cpt")}
                    />
                  </div>
                  <div>Captioning</div>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="white-services">
            <h3 id="services">All services</h3>
            <Container fluid>
              <Row>
                <Col md="auto">
                  <Card
                    style={{
                      width: "auto",
                      height: "auto",
                      marginBottom: 40,
                    }}
                    onClick={() => history.push("/splist-psa")}
                  >
                    <Card.Body>
                      <Container>
                        <Row>
                          <Col>
                            <div>
                              <Image
                                src={physical}
                                alt={"personal support assistance"}
                                style={{
                                  height: "70px",
                                }}
                              />
                            </div>
                          </Col>
                          <Col md="auto">
                            <h4>Personal Support Assistance</h4>
                            View service providers
                          </Col>
                          <Col>
                            <svg
                              width="2em"
                              height="4em"
                              viewBox="0 0 16 16"
                              className="bi bi-chevron-right"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              float="right"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </Col>
                        </Row>
                      </Container>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="auto">
                  <Card
                    style={{
                      width: "auto",
                      height: "auto",
                      marginBottom: 40,
                    }}
                    onClick={() => history.push("/splist-usi")}
                  >
                    <Card.Body>
                      <Container>
                        <Row>
                          <Col>
                            <div>
                              <Image
                                src={deaf}
                                alt={"ugandan interpreter"}
                                style={{
                                  height: "70px",
                                }}
                              />
                            </div>
                          </Col>
                          <Col md="auto">
                            <h4>Ugandan Sign-language Interpreter</h4>
                            View service providers
                          </Col>
                          <Col>
                            <svg
                              width="2em"
                              height="4em"
                              viewBox="0 0 16 16"
                              className="bi bi-chevron-right"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              float="right"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </Col>
                        </Row>
                      </Container>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md="auto">
                  <Card
                    style={{
                      width: "auto",
                      height: "auto",
                      marginBottom: 40,
                    }}
                    onClick={() => history.push("/splist-isi")}
                  >
                    <Card.Body>
                      <Container>
                        <Row>
                          <Col>
                            <div>
                              <Image
                                src={deaf}
                                alt={"international interpreter"}
                                style={{
                                  height: "70px",
                                }}
                              />
                            </div>
                          </Col>
                          <Col md="auto">
                            <h4>International Sign-language Interpreter</h4>
                            View service providers
                          </Col>
                          <Col>
                            <svg
                              width="2em"
                              height="4em"
                              viewBox="0 0 16 16"
                              className="bi bi-chevron-right"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              float="right"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </Col>
                        </Row>
                      </Container>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="auto">
                  <Card
                    style={{
                      width: "auto",
                      height: "auto",
                      marginBottom: 40,
                    }}
                    onClick={() => history.push("/splist-mg")}
                  >
                    <Card.Body>
                      <Container>
                        <Row>
                          <Col>
                            <div>
                              <Image
                                src={phydeaf2}
                                alt={"mobility guide"}
                                style={{
                                  height: "70px",
                                }}
                              />
                            </div>
                          </Col>
                          <Col md="auto">
                            <h4>Mobility Guide</h4>
                            View service providers
                          </Col>
                          <Col>
                            <svg
                              width="2em"
                              height="4em"
                              viewBox="0 0 16 16"
                              className="bi bi-chevron-right"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              float="right"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </Col>
                        </Row>
                      </Container>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            {/* </Container>
            <Container fluid> */}
              <Row>
                <Col md="auto">
                  <Card
                    style={{
                      width: "auto",
                      height: "auto",
                      marginBottom: 40,
                    }}
                    onClick={() => history.push("/splist-cpt")}
                  >
                    <Card.Body>
                      <Container>
                        <Row>
                          <Col>
                            <div>
                              <Image
                                src={hear}
                                alt={"captioning"}
                                style={{
                                  height: "70px",
                                }}
                              />
                            </div>
                          </Col>
                          <Col md="auto">
                            <h4>Captioning</h4>
                            View service providers
                          </Col>
                          <Col>
                            <svg
                              width="2em"
                              height="4em"
                              viewBox="0 0 16 16"
                              className="bi bi-chevron-right"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              float="right"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </Col>
                        </Row>
                      </Container>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="whoWeAre">
            <h3 id="who-we-are">Who we are</h3>
            {/* <br /> */}
            <div>
              The Digital Ability Support Network System (Dasuns) is a social
              enterprise company registered
              <br />
              in Uganda to promote social and inclusive development through
              facilitating access to
              <br />
              professional assisttive support services and technologies to
              advance rights and opportunities
              <br />
              for persons with disabilities.
            </div>
          </div>

          <div className="howItWorks" fluid="true">
            <h3 id="how-it-works"> How it works</h3>
            <div>
              <Container fluid>
                <Row>
                  <Col md>
                    <div>
                      <Row>
                        <Col sm>
                          <Image
                            style={{
                              width: 70,
                              height: 70,
                            }}
                            src={order}
                            alt={"order"}
                          />
                        </Col>
                        <Col sm>
                          <svg
                            width="4em"
                            height="2em"
                            viewBox="0 0 16 16"
                            className="bi bi-arrow-right"
                            fill="#707070"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                            />
                          </svg>
                        </Col>
                      </Row>
                      <h4>Request Service</h4>
                      <p>
                        Browse through our services,
                        <br />
                        submit request details and pay deposit.
                      </p>
                    </div>
                  </Col>
                  <Col md>
                    <div>
                      <Row>
                        <Col sm>
                          <Image
                            style={{
                              width: 70,
                              height: 70,
                            }}
                            src={getsp}
                            alt={"order"}
                          />
                        </Col>
                        <Col sm>
                          <svg
                            width="4em"
                            height="2em"
                            viewBox="0 0 16 16"
                            className="bi bi-arrow-right"
                            fill="#707070"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                            />
                          </svg>
                        </Col>
                      </Row>
                      <h4>Choose a professional</h4>
                      <p>
                        In the list select a service provider you want to get
                        service from.
                      </p>
                    </div>
                  </Col>
                  <Col md>
                    <div>
                      <Row>
                        <Col sm>
                          <Image
                            style={{
                              width: 70,
                              height: 70,
                            }}
                            src={book}
                            alt={"order"}
                          />
                        </Col>
                        <Col sm>
                          <svg
                            width="4em"
                            height="2em"
                            viewBox="0 0 16 16"
                            className="bi bi-arrow-right"
                            fill="#707070"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                            />
                          </svg>
                        </Col>
                      </Row>
                      <h4>Make Appointment</h4>
                      <p>
                        Make an appointment according to the providers
                        availability
                      </p>
                    </div>
                  </Col>
                  <Col md>
                    <div>
                      <Row>
                        <Col sm>
                          <Image
                            style={{
                              width: 70,
                              height: 70,
                            }}
                            src={relax}
                            alt={"order"}
                          />
                        </Col>
                        <Col sm></Col>
                      </Row>
                      <h4>Receive Service</h4>
                      <p>After booking sit back and relax</p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <div>
            <footer className="footer">
              <div className="container pt-5 border-bottom">
                <div className="row">
                  <div className="col-md-3 col-sm-12 mb-3 ">
                    <img
                      src={LogoWhite}
                      alt={"logo"}
                      style={{ height: "50px" }}
                    />
                  </div>
                  <div className="col-md-9 col-sm-12">
                    <div className="col-md-3 col-sm-6 col-6 p-0 float-left mb-3">
                      <h6 className="mb-4 font-weight-bold">About Us</h6>
                    </div>

                    <div className="col-md-3 col-sm-6 col-6 p-0 mb-3 float-left">
                      <h6 className="mb-2 font-weight-bold">FAQ</h6>
                    </div>

                    <div className="col-md-3 col-sm-6 col-6 mb-3 p-0 float-left">
                      <h6 className="mb-4 font-weight-bold">Contact Us</h6>
                    </div>

                    <div className="col-md-3 col-sm-6 col-6 mb-3 p-0 float-left">
                      <h6 className="mb-4 font-weight-bold">Follow Us On</h6>
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Landing);
// export default withRouter(Landing);

// return (
//   <div>
//     <Navbar bg="light" expand="lg">
//       <Navbar.Brand href="#">
//         <a href="#">
//           <img src={Logo} alt={"logo"} style={{ height: "50px" }} onClick={() => history.push("/")}/>
//         </a>
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="mr-right" style={{ marginLeft: "10em" }}>
//           <Nav.Link href="#services">Services</Nav.Link>
//           <Nav.Link href="#who-we-are">Who We Are</Nav.Link>
//           <Nav.Link href="#how-it-works">How It Works</Nav.Link>
//           <ButtonToolbar>
//             <button
//               style={button}
//               onClick={() => this.setState({ addModalShowParent: true })}
//             >
//                SignIn / SignUp
//             </button>
//             <ParentModal
//               show={this.state.addModalShowParent}
//               onHide={addModalCloseParent}
//             />
//           </ButtonToolbar>
//           <Link to="/bookingForm" style={mystyle}>
//           Request Now
//           </Link>
//           <Link to="/signupservicep" style={mystyle1}>
//             Provide a Service
//           </Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//     <div className="body">
//       <section
//         id="header"
//         className="jumbotron text-right text-white img-responsive"
//       >
//         <h1 className="display-6">
//           Access Professional support service <br />
//           providers at your fingertips
//         </h1>
//         <p className="lead">
//           Leveraging technology to advance rights, choices and opportunities
//           for
//           <br />
//           persons with disabilities
//         </p>
//         <button
//           className="btn btn-success"
//           onClick={() => history.push("/bookingForm")}
//         >
//           Request Service
//         </button>
//       </section>

//       <div className="green-service " fluid="md">
//         <Container
//           fluid
//           style={{
//             fontSize: 15,
//             paddingBottom: "5px",
//             marginBottom: "20px",
//           }}
//         >
//           <Row>
//             <Col>
//               <div>
//                 <Image
//                   src={physical2}
//                   alt="Physical support"
//                   style={{ height: "60px" }}
//                 />
//               </div>
//               <div>All services</div>
//             </Col>
//             <Col>
//               <div>
//                 <Image
//                   src={physical2}
//                   alt="Physical support"
//                   style={{ height: "60px" }}
//                 />
//               </div>
//               <div>Physical support</div>
//             </Col>
//             <Col>
//               <div>
//                 <Image
//                   src={deaf2}
//                   alt="Deaf support"
//                   style={{ height: "60px" }}
//                 />
//               </div>
//               <div>Deaf</div>
//             </Col>
//             <Col>
//               <div>
//                 <Image
//                   src={phydeaf}
//                   alt="Physical support"
//                   style={{ height: "60px" }}
//                 />
//               </div>
//               <div>Deaf & Physical</div>
//             </Col>
//             <Col>
//               <div>
//                 <Image
//                   src={hear2}
//                   alt="Physical support"
//                   style={{ height: "60px" }}
//                 />
//               </div>
//               <div>Hard of hearing</div>
//             </Col>
//           </Row>
//         </Container>
//       </div>

//       <div className="white-services">
//         <h3 id="services">All services</h3>
//         <Container fluid>
//           <Row>
//             <Col md="auto">
//               <Card
//                 style={{
//                   width: "auto",
//                   height: "auto",
//                   marginBottom: 40,
//                 }}
//               >
//                 <Card.Body>
//                   <Container>
//                     <Row>
//                       <Col>
//                         <div>
//                           <Image
//                             src={physical}
//                             alt={"physical"}
//                             style={{
//                               height: "70px",
//                             }}
//                           />
//                         </div>
//                       </Col>
//                       <Col md="auto">
//                         <h4>Physical Support</h4>
//                         View service providers
//                       </Col>
//                       <Col>
//                         <svg
//                           width="2em"
//                           height="4em"
//                           viewBox="0 0 16 16"
//                           className="bi bi-chevron-right"
//                           fill="currentColor"
//                           xmlns="http://www.w3.org/2000/svg"
//                           float="right"
//                         >
//                           <path
//                             fillRule="evenodd"
//                             d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
//                           />
//                         </svg>
//                       </Col>
//                     </Row>
//                   </Container>
//                 </Card.Body>
//               </Card>
//             </Col>{" "}
//             <Col md="auto">
//               <Card
//                 style={{
//                   width: "auto",
//                   height: "auto",
//                   marginBottom: 40,
//                 }}
//               >
//                 <Card.Body>
//                   <Container>
//                     <Row>
//                       <Col>
//                         <div>
//                           <Image
//                             src={deaf}
//                             alt={"physical"}
//                             style={{
//                               height: "70px",
//                             }}
//                           />
//                         </div>
//                       </Col>
//                       <Col md="auto">
//                         <h4>Deaf</h4>
//                         View service providers
//                       </Col>
//                       <Col>
//                         <svg
//                           width="2em"
//                           height="4em"
//                           viewBox="0 0 16 16"
//                           className="bi bi-chevron-right"
//                           fill="currentColor"
//                           xmlns="http://www.w3.org/2000/svg"
//                           float="right"
//                         >
//                           <path
//                             fillRule="evenodd"
//                             d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
//                           />
//                         </svg>
//                       </Col>
//                     </Row>
//                   </Container>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md="auto">
//               <Card
//                 style={{
//                   width: "auto",
//                   height: "auto",
//                   marginBottom: 40,
//                 }}
//               >
//                 <Card.Body>
//                   <Container>
//                     <Row>
//                       <Col>
//                         <div>
//                           <Image
//                             src={phydeaf2}
//                             alt={"physical"}
//                             style={{
//                               height: "70px",
//                             }}
//                           />
//                         </div>
//                       </Col>
//                       <Col md="auto">
//                         <h4>Deaf & Physical</h4>
//                         View service providers
//                       </Col>
//                       <Col>
//                         <svg
//                           width="2em"
//                           height="4em"
//                           viewBox="0 0 16 16"
//                           className="bi bi-chevron-right"
//                           fill="currentColor"
//                           xmlns="http://www.w3.org/2000/svg"
//                           float="right"
//                         >
//                           <path
//                             fillRule="evenodd"
//                             d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
//                           />
//                         </svg>
//                       </Col>
//                     </Row>
//                   </Container>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//         <Container fluid>
//           <Row>
//             <Col md="auto">
//               <Card
//                 style={{
//                   width: "auto",
//                   height: "auto",
//                   marginBottom: 40,
//                 }}
//               >
//                 <Card.Body>
//                   <Container>
//                     <Row>
//                       <Col>
//                         <div>
//                           <Image
//                             src={hear}
//                             alt={"Hard of hearing"}
//                             style={{
//                               height: "70px",
//                             }}
//                           />
//                         </div>
//                       </Col>
//                       <Col md="auto">
//                         <h4>Hard of Hearing</h4>
//                         View service providers
//                       </Col>
//                       <Col>
//                         <svg
//                           width="2em"
//                           height="4em"
//                           viewBox="0 0 16 16"
//                           className="bi bi-chevron-right"
//                           fill="currentColor"
//                           xmlns="http://www.w3.org/2000/svg"
//                           float="right"
//                         >
//                           <path
//                             fillRule="evenodd"
//                             d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
//                           />
//                         </svg>
//                       </Col>
//                     </Row>
//                   </Container>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//       <div className="whoWeAre">
//         <h3 id="who-we-are">Who we are</h3>
//         {/* <br /> */}
//         <div>
//           The Digital Ability Support Network System (Dasuns) is a social
//           enterprise company registered
//           <br />
//           in Uganda to promote social and inclusive development through
//           facilitating access to
//           <br />
//           professional assisttive support services and technologies to
//           advance rights and opportunities
//           <br />
//           for persons with disabilities.
//         </div>
//       </div>

//       <div className="howItWorks" fluid>
//         <h3 id="how-it-works"> How it works</h3>
//         <div>
//           <Container fluid>
//             <Row>
//               <Col md>
//                 <div>
//                   <Row>
//                     <Col sm>
//                       <Image
//                         style={{
//                           width: 70,
//                           height: 70,
//                         }}
//                         src={order}
//                         alt={"order"}
//                       />
//                     </Col>
//                     <Col sm>
//                       <svg
//                         width="4em"
//                         height="2em"
//                         viewBox="0 0 16 16"
//                         className="bi bi-arrow-right"
//                         fill="#707070"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
//                         />
//                       </svg>
//                     </Col>
//                   </Row>
//                   <h4>Request Service</h4>
//                   <p>
//                     Browse through our services,
//                     <br />
//                     submit request details and pay deposit.
//                   </p>
//                 </div>
//               </Col>
//               <Col md>
//                 <div>
//                   <Row>
//                     <Col sm>
//                       <Image
//                         style={{
//                           width: 70,
//                           height: 70,
//                         }}
//                         src={getsp}
//                         alt={"order"}
//                       />
//                     </Col>
//                     <Col sm>
//                       <svg
//                         width="4em"
//                         height="2em"
//                         viewBox="0 0 16 16"
//                         className="bi bi-arrow-right"
//                         fill="#707070"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
//                         />
//                       </svg>
//                     </Col>
//                   </Row>
//                   <h4>Choose a professional</h4>
//                   <p>
//                     In the list select a service provider you want to get
//                     service from.
//                   </p>
//                 </div>
//               </Col>
//               <Col md>
//                 <div>
//                   <Row>
//                     <Col sm>
//                       <Image
//                         style={{
//                           width: 70,
//                           height: 70,
//                         }}
//                         src={book}
//                         alt={"order"}
//                       />
//                     </Col>
//                     <Col sm>
//                       <svg
//                         width="4em"
//                         height="2em"
//                         viewBox="0 0 16 16"
//                         className="bi bi-arrow-right"
//                         fill="#707070"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
//                         />
//                       </svg>
//                     </Col>
//                   </Row>
//                   <h4>Make Appointment</h4>
//                   <p>
//                     Make an appointment according to the providers
//                     availability
//                   </p>
//                 </div>
//               </Col>
//               <Col md>
//                 <div>
//                   <Row>
//                     <Col sm>
//                       <Image
//                         style={{
//                           width: 70,
//                           height: 70,
//                         }}
//                         src={relax}
//                         alt={"order"}
//                       />
//                     </Col>
//                     <Col sm></Col>
//                   </Row>
//                   <h4>Receive Service</h4>
//                   <p>After booking sit back and relax</p>
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         </div>
//       </div>
//       <div>
//         <footer className="footer">
//           <div className="container pt-5 border-bottom">
//             <div className="row">
//               <div className="col-md-3 col-sm-12 mb-3 ">
//                 <img
//                   src={LogoWhite}
//                   alt={"logo"}
//                   style={{ height: "50px" }}
//                 />
//               </div>
//               <div className="col-md-9 col-sm-12">
//                 <div className="col-md-3 col-sm-6 col-6 p-0 float-left mb-3">
//                   <h6 className="mb-4 font-weight-bold">About Us</h6>
//                 </div>

//                 <div className="col-md-3 col-sm-6 col-6 p-0 mb-3 float-left">
//                   <h6 className="mb-2 font-weight-bold">FAQ</h6>
//                 </div>

//                 <div className="col-md-3 col-sm-6 col-6 mb-3 p-0 float-left">
//                   <h6 className="mb-4 font-weight-bold">Contact Us</h6>
//                 </div>

//                 <div className="col-md-3 col-sm-6 col-6 mb-3 p-0 float-left">
//                   <h6 className="mb-4 font-weight-bold">Follow Us On</h6>
//                   <img
//                     src={facebook}
//                     alt={"facebook"}
//                     style={{ height: "40px" }}
//                   />
//                   <img
//                     src={twitter}
//                     alt={"twitter"}
//                     style={{ height: "40px" }}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </div>
//   </div>
// );
// }
// }

// const mapStateToProps = state => ({
// auth: state.auth
// });

// export default connect(mapStateToProps, { logout })(Landing);
// // export default withRouter(Landing);
