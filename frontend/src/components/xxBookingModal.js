import { Formik, Field, Form, ErrorMessage } from "formik";
// import { Form, Datepicker, Button, Textarea, Input } from "react-formik-ui";
import * as Yup from "yup";
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addBooking } from "../actions/bookings";
import "bootstrap/dist/css/bootstrap.css";
import Logo from "../images/Logo.png";
// import "./style.css";
//import { Link } from "react-router-dom";
// import { Navbar, Nav } from "react-bootstrap";
// import Banner from "./Banner";
// import { Link } from "react-router-dom";
// import { withRouter } from "react-router-dom";
//  import { Link } from "react-router-dom";
import "./style.css";
// import { Button} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const formSchema = Yup.object().shape({
  meetplace: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("You must specify the Meeting place"),

  meetdate: Yup.date().required("Please specify the meeting date"),

  phone: Yup.string()
    .min(9, "Too Short!")
    .max(13, "Too Long!")
    .required("Please specify the Phone number"),

  starttime: Yup.string().required("Please specify the start time"),

  endtime: Yup.string().required("Please specify the end time"),
});

const initialValues = {
  meetplace: "",
  meetdate: "",
  phone: "",
  starttime: "",
  endtime: "",
};

class BookingModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meetplace: "",
      meetdate: "",
      phone: "",
      starttime: "",
      endtime: "",
    };
  }

  static propTypes = {
    addBooking: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = (values, { setSubmitting }) => {
    this.props.addBooking(values);
    this.setSubmitting = setSubmitting;
    this.props.history.push("/request");
  };

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

    const field = {
      marginLeft: "25px",
      borderWidth: "2px",
      borderRadius: "5px",
      height: "2.5em",
    };

    const err = {
      color: "red",
    };

    return (
      <div>
        <Modal
          {...this.props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <div className>
              <img src={Logo} alt={"logo"} style={{ height: "50px" }} />
            </div>
          </Modal.Header>
          <Modal.Body>
            <Formik
              initialValues={initialValues}
              validationSchema={formSchema}
              onSubmit={this.onSubmit}
            >
              {({
                values,
                errors,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setFieldValue,
                setFieldTouched,
              }) => (
                // <div className="main-booking">
                //   <div className="card" id="booking-card">
                // <div className="main-card-booking">
                // <div className="card" id="booking-card">
                  <div className="card-body">
                    <Form id="form">
                      <h4 className="heading3">
                        <small
                          style={{
                            color: "black",
                            fontSize: "30px",
                            fontWeight: "bold",
                          }}
                        >
                          BOOKING
                        </small>
                        MARK SHARNTY.
                      </h4>
                      <h6 className="heading3">From Muyenga Kampala UG</h6>
                      <h6 className="heading3">20000UGX, Per Hour.</h6>

                      <div className="form-group">
                        <label htmlFor="meetplace">Meeting Place:</label>
                        <Field
                          style={field}
                          name="meetplace"
                          type="text"
                          placeholder="Preferred Meeting Place"
                        />
                        <br />
                        <small style={err}>
                          <ErrorMessage name="meetplace" style={err} />
                        </small>
                      </div>
                      <div className="form-group">
                        <label htmlFor="meetdate">Meeting Date:</label>
                        <Field
                          style={field}
                          name="meetdate"
                          type="date"
                          placeholder="Schedule Your Preferred Date"
                        />
                        <br />
                        <small style={err}>
                          <ErrorMessage name="meetdate" />
                        </small>
                      </div>

                      <div className="form-group">
                        <label htmlFor="phone"> Phone No:</label>
                        <Field
                          style={field}
                          name="phone"
                          type="text"
                          placeholder="Enter Your Phone Number"
                        />
                        <br />
                        <small style={err}>
                          <ErrorMessage name="phone" />
                        </small>
                      </div>

                      <div className="form-group">
                        <div>
                          <label>
                            <b>Meeting Time:</b>
                          </label>
                        </div>
                      </div>
                      <br />

                      <div className="form-group">
                        <label htmlFor="starttime">Start Time:</label>
                        <label htmlFor="endtime">End Time:</label>
                      </div>
                      <br />

                      <div className="form-group">
                        <Field
                          name="starttime"
                          id="starttime"
                          type="text"
                          placeholder="Enter Starting time"
                        />
                        <Field
                          name="endtime"
                          id="endtime"
                          type="text"
                          placeholder="Enter Ending time"
                        />
                        &nbsp;&nbsp;
                        <br />
                        <small style={err}>
                          <ErrorMessage name="starttime" />
                        </small>
                        <small style={err}>
                          <ErrorMessage name="endtime" />
                        </small>
                      </div>

                      <div className="form-group">
                        <button
                          type="submit"
                          id="booking"
                          className="btn btn-success btn-block"
                        >
                          <strong>BOOK NOW</strong>
                        </button>
                      </div>
                    </Form>
                    </div>
                //   </div>
                // </div>
              )}
            </Formik>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default connect(null, { addBooking })(BookingModal);