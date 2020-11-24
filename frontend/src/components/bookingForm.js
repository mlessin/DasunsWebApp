// import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import Logo from "../images/Logo.png";
// import Modal from "react-bootstrap/Modal";
// //import "./style.css";
// //import { Link } from "react-router-dom";
// import {
//   Row,
//   Col,
//   Button,
//   Form,
// } from "react-bootstrap";

// export class bookingModal extends Component {
//   state = {
//     name: "",
//     MeetingPlace: "",
//     payment: "",
//   };

//   render() {
//     return (
//       <Modal>
//         <Modal.Body>
//           <div className="main">
//             <div className="card" id="booking-card">
//               <div className="card-body">
//                 <Form onSubmit={this.onSubmit}>
//                   <h4 className="heading3">
//                     BOOKING MARK SHARNTY
//                     {this.state.name}.
//                   </h4>
//                   <h6 className="heading3">
//                     From Muyenga Kampala UG
//                     {this.state.MeetingPlace}
//                   </h6>
//                   <h6 className="heading3">
//                     20000UGX, Per Hour.
//                     {this.state.payment}
//                   </h6>

//                   <Form.Group as={Row} controlId="meetPoint">
//                     <Form.Label column sm={4}>
//                       Meeting Place:
//                     </Form.Label>
//                     <Col sm={8} id="meet1">
//                       <Form.Control
//                         type="text"
//                         placeholder="Preffered meeting place"
//                       />
//                     </Col>
//                   </Form.Group>
//                   <Form.Group as={Row} controlId="meetDate">
//                     <Form.Label column sm={4}>
//                       Meeting Date:
//                     </Form.Label>
//                     <Col sm={8} id="meet2">
//                       <Form.Control
//                         type="text"
//                         placeholder="Schedule your preffered Date"
//                       />
//                     </Col>
//                   </Form.Group>

//                   <Form.Group as={Row} controlId="contact">
//                     <Form.Label column sm={4}>
//                       Phone No:
//                     </Form.Label>
//                     <Col sm={8} id="contact">
//                       <Form.Control
//                         type="tel"
//                         name="phone"
//                         placeholder="Enter your Phone Number"
//                       />
//                     </Col>
//                   </Form.Group>
//                   <div>
//                     {" "}
//                     <b>Meeting Time:</b>
//                   </div>

//                   <Form.Row>
//                     <Form.Group as={Col} controlId="StartTime">
//                       <Form.Label>Start Time:</Form.Label>
//                       <Col sm={11}>
//                         <Form.Control
//                           type="text"
//                           placeholder="Enter Starting time"
//                         />
//                       </Col>
//                     </Form.Group>
//                     <Form.Group as={Col} controlId="endTime">
//                       <Form.Label>End Time</Form.Label>
//                       <Col sm={13} id="start2 ">
//                         <Form.Control
//                           type="text"
//                           placeholder="Enter Ending time"
//                         />
//                       </Col>
//                     </Form.Group>
//                   </Form.Row>

//                   <Form.Group as={Row}>
//                     <Col sm={{ span: 10, offset: 4 }}>
//                       <Button
//                         type="submit"
//                         // style={button}
//                         onClick={() => this.setState({ addModalShow: true })}
//                       >
//                         BOOK NOW
//                         <link to="Request"></link>
//                       </Button>
//                     </Col>
//                   </Form.Group>
//                 </Form>
//               </div>
//             </div>
//           </div>
//         </Modal.Body>
//       </Modal>
//     );
//   }
// }
// export default bookingModal;

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Logo from "../images/Logo.png";
//import "./style.css";
//import { Link } from "react-router-dom";
import { Navbar, Nav, Row, Col, Button, Form } from "react-bootstrap";
// import Banner from "./Banner";
import { Link } from "react-router-dom";

import { withRouter } from "react-router-dom";


export class bookingForm extends Component {
  // state = {
  //   PaymentType: "",
  //   MeetingTime: "",
  // };

  render() {
    const { history } = this.props;

    const mystyle1 = {
      color: "#fff",
      backgroundColor: "#006712",
      borderRadius: "10px",
      fontFamily: "Montserrat",
      textDecoration: "none",
    };
    return (
      <div>
        {/* <Banner /> */}
        <Navbar
          className="navbar"
          bg-primary
          sticky="top"
          collapseOnSelect
          expand="md"
        >
          <Navbar.Brand href="#">
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
        <div className="main">
          <div className="card" id="booking-card">
            <div className="card-body" id="card-body">
              <Form onSubmit={this.onSubmit}>
                <h4 className="heading3">BOOKING MARK SHARNTY.</h4>
                <h6 className="heading3">From Muyenga Kampala UG</h6>
                <h6 className="heading3">20000UGX, Per Hour.</h6>

                <Form.Group as={Row} controlId="meetPoint">
                  <Form.Label column sm={4}>
                    Meeting Place:
                  </Form.Label>
                  <Col sm={8} id="meet1">
                    <Form.Control
                      type="text"
                      placeholder="Preferred Meeting Place"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="meetDate">
                  <Form.Label column sm={4}>
                    Meeting Date:
                  </Form.Label>
                  <Col sm={8} id="meet2">
                    <Form.Control
                      type="text"
                      placeholder="Schedule Your Preferred Date"
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="contact">
                  <Form.Label column sm={4}>
                    Phone No:
                  </Form.Label>
                  <Col sm={8} id="contact">
                    <Form.Control
                      type="tel"
                      name="phone"
                      placeholder="Enter Your Phone Number"
                    />
                  </Col>
                </Form.Group>
                <div>
                  <b>Meeting Time:</b>
                </div>

                <Form.Row>
                  <Form.Group as={Col} controlId="StartTime">
                    <Form.Label>Start Time:</Form.Label>
                    <Col sm={11}>
                      <Form.Control
                        type="text"
                        placeholder="Enter Starting time"
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Col} controlId="endTime">
                    <Form.Label>End Time:</Form.Label>
                    <Col sm={11} id="start2 ">
                      <Form.Control
                        type="text"
                        placeholder="Enter Ending time"
                      />
                    </Col>
                  </Form.Group>
                </Form.Row>

                <Form.Group as={Row}>
                  <Col sm={{ span: 10, offset: 4 }}>
                    <Button
                      type="submit"
                      onClick={() => history.push("/Request")}
                    >
                      BOOK NOW
                    </Button>
                  </Col>
                </Form.Group>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(bookingForm);
