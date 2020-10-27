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
            <div>
                <Form id="book">

                    <ul>
                        <li class="list-group-item">
                            Bootstrap Switch Success
                                <label class="switch ">
                                <input type="checkbox" class="success" />
                                <span class="slider round"></span>
                            </label>
                        </li>
                    </ul>
                    <Form.Group as={Row} controlId="meetPoint" >
                        <Form.Label column sm={2}>
                            Meeting Point:
                          </Form.Label>
                        <Col sm={5} id="meet1">
                            <Form.Control type="text" placeholder="Enter location" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="meetDate"> 
                        <Form.Label column sm={2}>
                            Meeting Date:
    </Form.Label>
                        <Col sm={5} id="meet2">
                            <Form.Control type="text" placeholder="Enter Date" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="contact" >
                        <Form.Label column sm={2}>
                            Contact:
                          </Form.Label>
                        <Col sm={5} id="contact">
                            <Form.Control type="tel" name="phone" placeholder="Enter Phone Number" />
                        </Col>
                    </Form.Group>


                    <Form.Row>
                        <Form.Group as={Col} controlId="StartTime">
                            <Form.Label>Start Time:</Form.Label>
                            <Form.Control type="text" placeholder="Enter Starting time" id="start1" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="endTime">
                            <Form.Label>End Time</Form.Label>
                            <Form.Control type="text" placeholder="Enter Ending time" id="start2 " />
                        </Form.Group>
                    </Form.Row>



                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit">BOOK NOW</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        );


    }
}
export default bookingForm; 