import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Logo from "../images/Logo.png";
//import "./style.css";
//import { Link } from "react-router-dom";
import {
    Navbar,
    Nav,
    NavDropdown,
    Badge,
    Image,
    Figure,
    Container,
    Row,
    Col,
    Card,
    Button,
    Form,
} from "react-bootstrap";


export class bookingForm extends Component {
    state = {
        PaymentType: "",
        MeetingTime: "",

    };



    render() {
        return (
            <div className="main">
                <div className="card" id="booking-card">
                    <div className="card-body">
                
                <Form onSubmit={this.onSubmit}>
                    <h4 className="heading3">BOOKING MARK SHARNTY.</h4>
                    <h6 className="heading3">From Muyenga Kampala UG</h6>
                    <h6 className="heading3">20000UGX, Per Hour.</h6>

                    <Form.Group as={Row} controlId="meetPoint" >
                        <Form.Label column sm={2}>
                            Meet:
                          </Form.Label>
                        <Col sm={5} id="meet1">
                            <Form.Control type="text" placeholder="Enter location" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="meetDate">
                        <Form.Label column sm={2}>
                            Meet:
    </Form.Label>
                        <Col sm={5} id="meet2">
                            <Form.Control type="text" placeholder="Enter Date" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="contact" >
                        <Form.Label column sm={2}>
                            Phone:
                          </Form.Label>
                        <Col sm={5} id="contact">
                            <Form.Control type="tel" name="phone" placeholder="Enter Phone Number" />
                        </Col>
                    </Form.Group>
                    <div> <b>Meeting Time:</b></div>


                    <Form.Row >
                        <Form.Group as={Col} controlId="StartTime">
                            <Form.Label>Start Time:</Form.Label>
                            <Col sm={5}>
                            <Form.Control type="text" placeholder="Enter Starting time"  />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Col} controlId="endTime">
                            
                            <Form.Label>End Time</Form.Label>
                            <Col sm={5} id="start2 ">
                            <Form.Control type="text" placeholder="Enter Ending time"  />
                            </Col>
                        </Form.Group>
                    </Form.Row>



                    <Form.Group as={Row}>
                        <Col sm={{ span: 5, offset: 2 }}>
                            <Button type="submit">BOOK NOW</Button>
                        </Col>
                    </Form.Group>
                </Form>
                
                </div>
                </div>
            </div>
        );


    }
}
export default bookingForm; 