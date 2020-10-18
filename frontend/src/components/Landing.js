import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.css";

import banner from "../images/banner.jpg";
import Logo from "../images/Logo.png";
import physical2 from "../images/physical2.png";
import physical from "../images/physical.png";
import deaf2 from "../images/deaf2.png";
import deaf from "../images/deaf.png";
import phydeaf from "../images/phydeaf.png";
import phydeaf2 from "../images/phydeaf2.png";
import hear2 from "../images/hear2.png";
import hear from "../images/hear.png";

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
} from "react-bootstrap";
import { CardText } from "reactstrap";

export class Landing extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        <img src={Logo} alt={"logo"} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#features"></Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown
                                title="Dropdown"
                                id="collasible-nav-dropdown"
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    Action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    Something
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Services</Nav.Link>
                            <Nav.Link href="#req">My Requests</Nav.Link>
                            <Nav.Link href="#chat">Chat</Nav.Link>
                            <Nav.Link href="#bell">Bell icon</Nav.Link>
                            <Nav.Link href="#bash">Bash Shadrack</Nav.Link>
                            <Nav.Link href="#service">
                                <Badge pill variant="success">
                                    Request Service
                                </Badge>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div>
                    <Image src={banner} alt={"banner"} fluid />
                </div>

                <div className="green-service" fluid="md">
                    <Row>
                        <Col sm="3">
                            <Card
                                className="green-service"
                                style={{
                                    width: "18rem",
                                    height: "auto",
                                    border: "0px",
                                }}
                            >
                                <Card.Body>
                                    <Figure>
                                        <Figure.Image
                                            width={82}
                                            height={82}
                                            alt="Physical support"
                                            src={physical2}
                                        />
                                        <Figure.Caption>
                                            Physical support
                                        </Figure.Caption>
                                    </Figure>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm="3">
                            <Card
                                className="green-service"
                                style={{
                                    width: "18rem",
                                    height: "auto",
                                    border: "0px",
                                }}
                            >
                                <Card.Body>
                                    <Figure>
                                        <Figure.Image
                                            width={82}
                                            height={82}
                                            alt="Physical support"
                                            src={deaf2}
                                        />
                                        <Figure.Caption>
                                            Physical support
                                        </Figure.Caption>
                                    </Figure>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm="3">
                            <Card
                                className="green-service"
                                style={{
                                    width: "18rem",
                                    height: "auto",
                                    border: "0px",
                                }}
                            >
                                <Card.Body>
                                    <Figure>
                                        <Figure.Image
                                            width={82}
                                            height={82}
                                            alt="Physical support"
                                            src={phydeaf}
                                        />
                                        <Figure.Caption>
                                            Physical support
                                        </Figure.Caption>
                                    </Figure>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm="3">
                            <Card
                                className="green-service"
                                style={{
                                    width: "18rem",
                                    height: "auto",
                                    border: "0px",
                                }}
                            >
                                <Card.Body>
                                    <Figure>
                                        <Figure.Image
                                            width={82}
                                            height={82}
                                            alt="Physical support"
                                            src={hear2}
                                        />
                                        <Figure.Caption>
                                            Physical support
                                        </Figure.Caption>
                                    </Figure>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>

                <div className="white-services">
                    <h3>All services</h3>
                    <div class="w-20 p-4" style={{ backgroundColor: "#eee" }}>
                        <Image src={physical} alt={"physical"} />
                        <h4>Physical Support</h4> View service providers
                    </div>
                    <div class="w-20 p-4" style={{ backgroundColor: "#eee" }}>
                        <Image src={physical} alt={"physical"} />
                        <h4>Physical Support</h4> View service providers
                    </div>
                    <div class="w-20 p-4" style={{ backgroundColor: "#eee" }}>
                        <Image src={physical} alt={"physical"} />
                        <h4>Physical Support</h4> View service providers
                    </div>
                    <div class="w-20 p-4" style={{ backgroundColor: "#eee" }}>
                        <Image src={physical} alt={"physical"} />
                        <h4>Physical Support</h4> View service providers
                        <svg
                            width="5em"
                            height="5em"
                            viewBox="0 0 16 16"
                            class="bi bi-chevron-right"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            float="left"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                            />
                        </svg>
                    </div>
                </div>
                <div>
                    <div class="w-20 p-4" style={{ backgroundColor: "#eee" }}>
                        <h3>Who we are</h3>
                        <div>The Digital Ability Support Network System...</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;
