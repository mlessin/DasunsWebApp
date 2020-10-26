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

import {
    Navbar,
    Nav,
    Badge,
    Image,
    Container,
    Row,
    Col,
    Card,
} from "react-bootstrap";

export class Landing extends Component {
    render() {
        return (
            <div className="body">
                <Navbar sticky="top" collapseOnSelect expand="md">
                    <Navbar.Brand href="#home">
                        <img
                            src={Logo}
                            alt={"logo"}
                            style={{ height: "50px" }}
                        />
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
                                        alt="Physical support"
                                        style={{ height: "60px" }}
                                    />
                                </div>
                                <div>Physical support</div>
                            </Col>
                            <Col>
                                <div>
                                    <Image
                                        src={deaf2}
                                        alt="Deaf support"
                                        style={{ height: "60px" }}
                                    />
                                </div>
                                <div>Deaf</div>
                            </Col>
                            <Col>
                                <div>
                                    <Image
                                        src={phydeaf}
                                        alt="Physical support"
                                        style={{ height: "60px" }}
                                    />
                                </div>
                                <div>Deaf & Physical</div>
                            </Col>
                            <Col>
                                <div>
                                    <Image
                                        src={hear2}
                                        alt="Physical support"
                                        style={{ height: "60px" }}
                                    />
                                </div>
                                <div>Hard of hearing</div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="white-services">
                    <h3>All services</h3>
                    <Container fluid>
                        <Row>
                        
                            <Col md="auto">
                                <Card
                                    style={{
                                        width: "auto",
                                        height: "auto",
                                        marginBottom: 40,
                                    }}
                                >
                                    <Card.Body>
                                        <Container>
                                            <Row>
                                                <Col>
                                                    <div>
                                                        <Image
                                                            src={physical}
                                                            alt={"physical"}
                                                            style={{
                                                                height: "70px",
                                                            }}
                                                        />
                                                    </div>
                                                </Col>
                                                <Col md="auto">
                                                    <h4>Physical Support</h4>
                                                    View service providers
                                                </Col>
                                                <Col>
                                                    <svg
                                                        width="2em"
                                                        height="4em"
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
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Card.Body>
                                </Card>
                            </Col>{" "}
                            <Col md="auto">
                                <Card
                                    style={{
                                        width: "auto",
                                        height: "auto",
                                        marginBottom: 40,
                                    }}
                                >
                                    <Card.Body>
                                        <Container>
                                            <Row>
                                                <Col>
                                                    <div>
                                                        <Image
                                                            src={deaf}
                                                            alt={"physical"}
                                                            style={{
                                                                height: "70px",
                                                            }}
                                                        />
                                                    </div>
                                                </Col>
                                                <Col md="auto">
                                                    <h4>Deaf</h4>
                                                    View service providers
                                                </Col>
                                                <Col>
                                                    <svg
                                                        width="2em"
                                                        height="4em"
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
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Card.Body>
                                </Card>
                            </Col>{" "}
                            <Col md="auto">
                                <Card
                                    style={{
                                        width: "auto",
                                        height: "auto",
                                        marginBottom: 40,
                                    }}
                                >
                                    <Card.Body>
                                        <Container>
                                            <Row>
                                                <Col>
                                                    <div>
                                                        <Image
                                                            src={phydeaf2}
                                                            alt={"physical"}
                                                            style={{
                                                                height: "70px",
                                                            }}
                                                        />
                                                    </div>
                                                </Col>
                                                <Col md="auto">
                                                    <h4>Deaf & Physical</h4>
                                                    View service providers
                                                </Col>
                                                <Col>
                                                    <svg
                                                        width="2em"
                                                        height="4em"
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
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                    <Container fluid>
                        <Row>
                            <Col md="auto">
                                <Card
                                    style={{
                                        width: "auto",
                                        height: "auto",
                                        marginBottom: 40,
                                    }}
                                >
                                    <Card.Body>
                                        <Container>
                                            <Row>
                                                <Col>
                                                    <div>
                                                        <Image
                                                            src={hear}
                                                            alt={
                                                                "Hard of hearing"
                                                            }
                                                            style={{
                                                                height: "70px",
                                                            }}
                                                        />
                                                    </div>
                                                </Col>
                                                <Col md="auto">
                                                    <h4>Hard of Hearing</h4>
                                                    View service providers
                                                </Col>
                                                <Col>
                                                    <svg
                                                        width="2em"
                                                        height="4em"
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
                    <h3>Who we are</h3>
                    {/* <br /> */}
                    <div>
                        The Digital Ability Support Network System (Dasuns) is a
                        social enterprise company registered
                        <br />
                        in Uganda to promote social and inclusive development
                        through facilitating access to
                        <br />
                        professional assisttive support services and
                        technologies to advance rights and opportunities
                        <br />
                        for persons with disabilities.
                    </div>
                </div>

                <div className="howItWorks" fluid>
                    <h3>How it works</h3>
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
                                                    class="bi bi-arrow-right"
                                                    fill="#707070"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                                    />
                                                </svg>
                                            </Col>
                                        </Row>
                                        <h4>Request Service</h4>
                                        <p>
                                            Browse through our services,
                                            <br />
                                            submit request details and pay
                                            deposit.
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
                                                    class="bi bi-arrow-right"
                                                    fill="#707070"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                                    />
                                                </svg>
                                            </Col>
                                        </Row>
                                        <h4>Choose a professional</h4>
                                        <p>
                                           In the list select a service provider you want to get service from.
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
                                                    class="bi bi-arrow-right"
                                                    fill="#707070"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                                    />
                                                </svg>
                                            </Col>
                                        </Row>
                                        <h4>Make Appointment</h4>
                                        <p>
                                           Make an appointment according to the providers availability
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
                                            <Col sm>
                                                
                                            </Col>
                                        </Row>
                                        <h4>Receive Service</h4>
                                        <p>
                                            After booking sit back and relax
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
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
                                        <h6 class="mb-4 font-weight-bold">
                                            About Us
                                        </h6>
                                    </div> 

                                    <div class="col-md-3 col-sm-6 col-6 p-0 mb-3 float-left">
                                        <h6 class="mb-2 font-weight-bold">
                                            FAQ
                                        </h6>
                                    </div>

                                    <div class="col-md-3 col-sm-6 col-6 mb-3 p-0 float-left">
                                        <h6 class="mb-4 font-weight-bold">
                                            Contact Us
                                        </h6>
                                    </div>

                                    <div class="col-md-3 col-sm-6 col-6 mb-3 p-0 float-left">
                                        <h6 class="mb-4 font-weight-bold">
                                            Follow Us On
                                        </h6>
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

export default Landing;
