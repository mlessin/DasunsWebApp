import { Formik, Field, Form, ErrorMessage } from "formik";
// import { Form, Datepicker, Button, Textarea, Input } from "react-formik-ui";
import * as Yup from "yup";
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addBooking } from "../actions/bookings";
import { oneServiceProvider } from "../actions/serviceProviders";
// import { getServiceProviders } from "../actions/serviceProviders";
import "bootstrap/dist/css/bootstrap.css";
// import Logo from "../images/Logo.png";
// import "./style.css";
//import { Link } from "react-router-dom";
// import { Navbar, Nav } from "react-bootstrap";
import Banner from "./Banner";
// import { Link } from "react-router-dom";
// import { withRouter } from "react-router-dom";

import "./style.css";
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

class BookingForm extends Component {
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

  componentDidMount() {
    const id = this.props.match.params.serviceProviderId;
    console.log("ayooo----------------------------------", id);

    this.props.oneServiceProvider(id);
  }

  static propTypes = {
    addBooking: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    serviceProvider: PropTypes.object.isRequired,
  };

  onSubmit = (values, { setSubmitting }) => {
    this.props.addBooking(values);
    this.setSubmitting = setSubmitting;
    this.props.history.push("/request");
  };

  render() {
    // let serviceProviderd = this.props.serviceProviders.filter( t => t.id === this.props.match.params.id)[0];
    const { history, route } = this.props;
    const { serviceProvider } = this.props;

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
        <Banner />
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
            <div className="main-booking">
              <div className="card" id="booking-card">
                <div key={serviceProvider.id}>
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
                      <strong>D00{serviceProvider.id}-</strong>
                      {serviceProvider.fullname}
                    </h4>
                    <h6 className="heading3">
                      Location: <strong> {serviceProvider.phyadd}</strong>
                    </h6>
                    <h6 className="heading3">
                      <strong>
                        UGX: {serviceProvider.pricevisit} Per Visit
                      </strong>
                    </h6>
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
                        type="time"
                        placeholder="Enter Starting time"
                      />
                      <Field
                        name="endtime"
                        id="endtime"
                        type="time"
                        placeholder="Enter Ending time"
                      />
                      <br />
                      <small style={err}>
                        <ErrorMessage name="starttime" />
                      </small>{" "}
                      &nbsp;&nbsp; &nbsp;&nbsp;
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
              </div>
            </div>
          )}
        </Formik>
      </div>
    );
  }
}
// const mapStateToProps = (state) => ({
//   serviceProviders: state.serviceProviders.serviceProviders,
// });

// export default connect(mapStateToProps, { addBooking, getServiceProviders })(BookingForm);

const mapStateToProps = (state) => ({
  serviceProvider: state.serviceProviders.serviceProvider,
});

export default connect(mapStateToProps, { addBooking, oneServiceProvider })(
  BookingForm
);
