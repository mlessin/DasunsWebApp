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
                <Navbar collapseOnSelect expand="lg">
                    <Navbar.Brand href="#home">
                        <img src={Logo} alt={"logo"} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#features"></Nav.Link>
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
                <section
                    id="header"
                    class="jumbotron text-right text-white img-responsive "
                >
                    <h1 class="display-6">
                        Access Professional support service <br />
                        providers at your fingertips
                    </h1>
                    <p class="lead">
                        Leveraging technology to advance rights, choices and
                        opportunities for
                        <br />
                        persons with disabilities
                    </p>
                    <a href="" class="btn btn-success">
                        Request Service
                    </a>
                </section>

                <div className="green-service " fluid="md">
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

                    <Container className="" fluid>
                        <Row>
                            <Col>
                                <div class="card w-100 whiteservice">
                                    <div class="card-img-top d-flex align-items-center bg-light">
                                        <div>
                                            <Image
                                                src={physical}
                                                alt={"physical"}
                                            />
                                        </div>
                                        <p class="col p-2 m-0">
                                            <h4>Physical Support</h4>
                                            <br />
                                            View service providers
                                        </p>
                                        <p class="col p-2 m-0">
                                            <svg
                                                width="2em"
                                                height="2em"
                                                viewBox="0 0 16 16"
                                                class="bi bi-chevron-right"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                                float="right"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                                />
                                            </svg>
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div class="card w-100 whiteservice">
                                    <div class="card-img-top d-flex align-items-center bg-light">
                                        <div>
                                            <Image
                                                src={physical}
                                                alt={"physical"}
                                            />
                                        </div>
                                        <p class="col p-2 m-0">
                                            <h4>Physical Support</h4>
                                            <br />
                                            View service providers
                                        </p>
                                        <p class="col p-2 m-0">
                                            <svg
                                                width="2em"
                                                height="2em"
                                                viewBox="0 0 16 16"
                                                class="bi bi-chevron-right"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                                float="right"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                                />
                                            </svg>
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div class="card w-100 whiteservice">
                                    <div class="card-img-top d-flex align-items-center bg-light">
                                        <div>
                                            <Image
                                                src={physical}
                                                alt={"physical"}
                                            />
                                        </div>
                                        <p class="col p-2 m-0">
                                            <h4>Physical Support</h4>
                                            <br />
                                            View service providers
                                        </p>
                                        <p class="col p-2 m-0">
                                            <svg
                                                width="2em"
                                                height="2em"
                                                viewBox="0 0 16 16"
                                                class="bi bi-chevron-right"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                                float="right"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                                />
                                            </svg>
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="" fluid>
                        <Row>
                            <Col>
                                <div class="card w-100 whiteservice">
                                    <div class="card-img-top d-flex align-items-center bg-light">
                                        <div>
                                            <Image
                                                src={physical}
                                                alt={"physical"}
                                            />
                                        </div>
                                        <p class="col p-2 m-0">
                                            <h4>Physical Support</h4>
                                            <br />
                                            View service providers
                                        </p>
                                        <p class="col p-2 m-0">
                                            <svg
                                                width="2em"
                                                height="2em"
                                                viewBox="0 0 16 16"
                                                class="bi bi-chevron-right"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                                float="right"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                                />
                                            </svg>
                                        </p>
                                    </div>
                                </div>
                            </Col>

                            <Col>
                                <div class="card w-100 whiteservice"></div>
                            </Col>
                            <Col>
                                <div class="card w-100 whiteservice"></div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div>
                    <div class="w-20 p-4" style={{ backgroundColor: "#e8e8e8" }}>
                        <h3>Who we are</h3>
                        <br/>
                        <div>The Digital Ability Support Network System (Dasuns) is a social enterprise company registered<br/>
                        in Uganda to promote social and inclusive development through facilitating access to<br/>
                        professional assisttive support services and technologies to advance rights and opportunities<br/>
                        for persons with disabilities.</div>
                    </div>
                </div>

<div>
    
</div>
            </div>
        );
    }
}

export default Landing;
