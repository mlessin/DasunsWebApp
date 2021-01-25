import React, { Component } from "react";
// import { Stepper } from "@progress/kendo-react-layout";
import axios from "axios";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Banner from "../Banner";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addServiceProvider } from "../../actions/serviceProviders";

import { Formik, Form } from "formik";
import * as Yup from "yup";

const formSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("You must specify your full name"),
});

const initialValues = {
  fullname: "",
  phone: "",
  email: "",
  nin: "",
  dob: "",
  gender: "",
  phyadd: "",

  yearexp: false,
  notmidman: false,
  skillset: false,
  internet: false,

  qualification: "",
  portifolio: "",

  profession: "",
  ref1name: "",
  ref1title: "",
  ref1email: "",
  ref1phone: "",
  ref2name: "",
  ref2title: "",
  ref2email: "",
  ref2phone: "",

  category: "",
  service: "",
  sunday: false,
  monday: false,
  tuesday: false,
  wednesday: false,
  thursday: false,
  friday: false,
  saturday: false,
  starttime: "",
  endtime: "",
  pricevisit: "",
  terms: false,
};

export class JointForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      phone: "",
      email: "",
      nin: "",
      dob: "",
      gender: "",
      phyadd: "",

      yearexp: false,
      notmidman: false,
      skillset: false,
      internet: false,

      qualification: "",
      portifolio: "",

      profession: "",
      ref1name: "",
      ref1title: "",
      ref1email: "",
      ref1phone: "",
      ref2name: "",
      ref2title: "",
      ref2email: "",
      ref2phone: "",

      category: "",
      service: "",
      sunday: false,
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      starttime: "",
      endtime: "",
      pricevisit: "",
      terms: false,
    };
  }

//   static propTypes = {
//     addServiceProvider: PropTypes.func.isRequired,
//     isAuthenticated: PropTypes.bool,
//   };

  onChangeyearexp = () => {
    this.setState((initialState) => ({
      yearexp: !initialState.yearexp,
    }));
  };

  onChangenotmidman = () => {
    this.setState((initialState) => ({
      notmidman: !initialState.notmidman,
    }));
  };

  onChangeskillset = () => {
    this.setState((initialState) => ({
      skillset: !initialState.skillset,
    }));
  };

  onChangeinternet = () => {
    this.setState((initialState) => ({
      internet: !initialState.internet,
    }));
  };

  onChangesunday = () => {
    this.setState((initialState) => ({
      sunday: !initialState.sunday,
    }));
  };
  onChangemonday = () => {
    this.setState((initialState) => ({
      monday: !initialState.monday,
    }));
  };

  onChangetuesday = () => {
    this.setState((initialState) => ({
      tuesday: !initialState.tuesday,
    }));
  };
  onChangewednesday = () => {
    this.setState((initialState) => ({
      wednesday: !initialState.wednesday,
    }));
  };

  onChangethursday = () => {
    this.setState((initialState) => ({
      thursday: !initialState.thursday,
    }));
  };
  onChangefriday = () => {
    this.setState((initialState) => ({
      friday: !initialState.friday,
    }));
  };

  onChangesaturday = () => {
    this.setState((initialState) => ({
      saturday: !initialState.saturday,
    }));
  };
  onChangeterms = () => {
    this.setState((initialState) => ({
      terms: !initialState.terms,
    }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    
    let checkArray = [];
    for (var key in this.state) {
      if (this.state[key] === true) {
        checkArray.push(key);
      }
    }

    let data = {
      // checkbox: checkArray.toString(),
      fullname: this.state.fullname,
      phone: this.state.phone,
      email: this.state.email,
      nin: this.state.nin,
      dob: this.state.dob,
      gender: this.state.gender,
      phyadd: this.state.phyadd,
      yearexp: this.state.yearexp,
      notmidman: this.state.notmidman,
      skillset: this.state.skillset,
      internet: this.state.internet,
      qualification: this.state.qualification,
      portifolio: this.state.portifolio,
      profession: this.state.profession,
      ref1name: this.state.ref1name,
      ref1title: this.state.ref1title,
      ref1email: this.state.ref1email,
      ref1phone: this.state.ref1phone,
      ref2name: this.state.ref2name,
      ref2title: this.state.ref2title,
      ref2email: this.state.ref2email,
      ref2phone: this.state.ref2phone,
      category: this.state.category,
      service: this.state.service,
      sunday: this.state.sunday,
      monday: this.state.monday,
      tuesday: this.state.tuesday,
      wednesday: this.state.wednesday,
      thursday: this.state.thursday,
      friday: this.state.friday,
      saturday: this.state.saturday,
      starttime: this.state.starttime,
      endtime: this.state.endtime,
      pricevisit: this.state.pricevisit,
      terms: this.state.terms,

    };

   
      console.log(data)
      axios.post('http://localhost:8000/backend/api/serviceproviders/',  data, {headers: {
        // Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=utf-8'
     } })
        .then(res=>{
          console.log(res.data);
        })
        .catch(err => console.log(err, 'We encountered an error'));
  };

  // onSubmit = (values, { setSubmitting }) => {
  //   this.props.addServiceProvider(values);
  //   this.setSubmitting = setSubmitting;
  //   this.props.history.push("/request");
  // };

  //   const serviceProv = {
  //     fullname: this.state.fullname,
  //     phone: this.state.phone,
  //     email: this.state.email,
  //     nin: this.state.nin,
  //     dob: this.state.dob,
  //     gender: this.state.gender,
  //     phyadd: this.state.phyadd,
  //     yearexp: this.state.yearexp,
  //     notmidman: this.state.notmidman,
  //     skillset: this.state.skillset,
  //     internet: this.state.internet,
  //     qualification: this.state.qualification,
  //     portifolio: this.state.portifolio,
  //     profession: this.state.profession,
  //     ref1name: this.state.ref1name,
  //     ref1title: this.state.ref1title,
  //     ref1email: this.state.ref1email,
  //     ref1phone: this.state.ref1phone,
  //     ref2name: this.state.ref2name,
  //     ref2title: this.state.ref2title,
  //     ref2email: this.state.ref2email,
  //     ref2phone: this.state.ref2phone,
  //     category: this.state.category,
  //     service: this.state.service,
  //     sunday: this.state.sunday,
  //     monday: this.state.monday,
  //     tuesday: this.state.tuesday,
  //     wednesday: this.state.wednesday,
  //     thursday: this.state.thursday,
  //     friday: this.state.friday,
  //     saturday: this.state.saturday,
  //     starttime: this.state.starttime,
  //     endtime: this.state.endtime,
  //     pricevisit: this.state.pricevisit,
  //     terms: this.state.terms,
  //   };

  // handleChange = (input) => (event) => {
  //   const isCheckbox = event.target.type === "checkbox";
  //   this.setState({
  //     [event.target.name]: isCheckbox
  //       ? event.target.checked
  //       : event.target.value,
  //   });
  // };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  //   handleSubmit = (event) => {
  //     event.preventDefault();
  //     this.props.addServiceProvider(serviceProv);
  //   };

  render() {
    // const { values, handleChange } = this.props;
    // const { handleChange } = this.state;
    const { history } = this.props;
    return (
      <>
        <Banner />
        {/* <Formik
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
          }) => ( */}
            <div className="main-service">
              <div className="card" id="signup-service-card">
                <div className="card-body" id="cardBody">
                  <form onSubmit={this.onSubmit}>
                    <h3>
                      <b>Personal Details</b>
                    </h3>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name (Required)"
                        name="fullname"
                        onChange={this.handleChange("fullname")}
                        //   defaultValue={values.fullname}
                        //   required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone Number(Required)"
                        name="phone"
                        onChange={this.handleChange("phone")}
                        //   defaultValue={values.phone}
                        // required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email(Required)"
                        name="email"
                        onChange={this.handleChange("email")}
                        //   defaultValue={values.email}
                        // required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="NIN(Required)"
                        name="nin"
                        onChange={this.handleChange("nin")}
                        //   defaultValue={values.nin}
                        // required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="date"
                        className="form-control"
                        placeholder="DOB(Required)"
                        name="dob"
                        onChange={this.handleChange("dob")}
                        //   defaultValue={values.dob}
                        // required
                      />
                    </div>
                    <div className="row">
                      <div className="col-12 ">
                        <div className="form-group">
                          <select
                            className="form-control"
                            name="gender"
                            onChange={this.handleChange("gender")}
                            //   defaultValue={values.gender}
                          >
                            <option value="Default">Select gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Physical Address(Required)"
                        name="phyadd"
                        onChange={this.handleChange("phyadd")}
                        //   defaultValue={values.phyadd}
                        // required
                      />
                    </div>
                    <br />
                    <br />
                    <div className="container">
                      <h4>
                        <b>Eligibility</b>
                      </h4>
                      <p>
                        As a Dasuns Professional Service Provider, Make sure you
                        meet the criteria by selecting the options which apply
                        to you below
                        <small style={{ color: "red" }}> (Required)</small>
                      </p>

                      <div
                        style={{
                          width: "100",
                          height: "auto",
                          marginBottom: 40,
                        }}
                      ></div>

                      {/* <div className="form-check">
                        <label className="form-check-label">
                          <input
                            type="checkbox"
                            checked={this.state.yearexp}
                            onChange={this.onChangeyearexp}
                            className="form-check-input"
                          />
                          You have at least one year of experience in your profession
                        </label>
                      </div> */}

                      <FormControlLabel
                        control={
                          <Checkbox
                            // checked={state.checkedB}
                            // onChange={this.handleChange}
                            checked={this.state.yearexp}
                            onChange={this.onChangeyearexp}
                            name="yearexp"
                            // checked={state.notMiddle}
                            // onChange={this.handleChange("yearexp")}
                            //   checked={values.yearexp}
                            color="primary"
                          />
                        }
                        label="You have at least one year of experience in your profession"
                      />
                      <br />
                      <br />
                      <br />
                      <br />
                      <FormControlLabel
                        control={
                          <Checkbox
                            // checked={state.checkedB}
                            // onChange={this.handleChange}
                            checked={this.state.notmidman}
                            onChange={this.onChangenotmidman}
                            name="notmidman"
                            // checked={state.notmidman}
                            // onChange={this.handleChange("notmidman")}
                            //   checked={values.notmidman}
                            color="primary"
                          />
                        }
                        label="You're not a middleman"
                      />
                      <br />
                      <br />
                      <br />
                      <br />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="skillset"
                            checked={this.state.skillset}
                            onChange={this.onChangeskillset}
                            // onChange={this.handleChange("skillset")}
                            //   checked={values.skillset}
                            color="primary"
                          />
                        }
                        label="You have the skillset to give proffesional service"
                      />
                      <br />
                      <br />
                      <br />
                      <br />
                      <FormControlLabel
                        control={
                          <Checkbox
                            // checked={state.checkedB}
                            // onChange={this.handleChange}
                            checked={this.state.internet}
                            onChange={this.onChangeinternet}
                            name="internet"
                            // onChange={this.handleChange("internet")}
                            //   checked={values.internet}
                            // defaultChecked={isChecked()}
                            color="primary"
                          />
                        }
                        label="You have a phone/computer with active internet"
                      />
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="container">
                      <h4>
                        <b>Evidence of Expertise</b>
                      </h4>
                      <p>
                        Please provide your Technical Training or Your
                        Qualifications.
                        <small style={{ color: "red" }}> (Required)</small>
                      </p>
                      <div className="form-group">
                        <input
                          type="file"
                          className="form-control"
                          placeholder="Please Add your Qualification here (Required)"
                          name="qualification"
                          onChange={this.handleChange("qualification")}
                          // defaultValue={values.qualification}
                          // required
                        />
                      </div>
                      <p>
                        Please provide a link to your Portfolio (Could be a link
                        of a website or social media pages)
                      </p>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Please Add your link here (Optional)"
                          name="portifolio"
                          onChange={this.handleChange("portifolio")}
                          // defaultValue={values.portifolio}
                        />
                      </div>
                      <p>
                        Please leave it blank if you have no online portfolio
                      </p>
                      <br />
                      <br />
                      <div className="container">
                        <h4>
                          <b>We only work with Professionals</b>
                        </h4>
                        <p>
                          We would like you to tell us more about yourself and
                          your professional services that you offer
                        </p>

                        <div className="row">
                          <div className="col-12 ">
                            <div className="form-textarea">
                              <textarea
                                type="text"
                                className="form-control"
                                name="profession"
                                onChange={this.handleChange("profession")}
                                // defaultValue={values.profession}
                                // required
                              />
                              <p>100 words</p>
                            </div>
                          </div>
                        </div>
                        <p>
                          <b>Provide us with 2 Referees who we can contact</b>
                          <small style={{ color: "red" }}> (Required)</small>
                        </p>
                        <p>
                          Referee 1
                          <small style={{ color: "red" }}> (Required)</small>
                        </p>

                        <div className="row">
                          <div className="col-5">
                            <div className="form-inputs">
                              <input
                                type="text"
                                placeholder="Full Name"
                                name="ref1name"
                                className="form-control"
                                onChange={this.handleChange("ref1name")}
                                // defaultValue={values.ref1name}
                                // className="left-inputs"
                                // required
                              />
                            </div>
                          </div>

                          <div className="col-2"></div>

                          <div className="col-5">
                            <div className="form-inputs">
                              <input
                                type="text"
                                placeholder="Description/Title"
                                name="ref1title"
                                className="form-control"
                                onChange={this.handleChange("ref1title")}
                                // defaultValue={values.ref1title}
                                // className="right-inputs"
                                // required
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-5">
                            <div className="form-inputs">
                              <input
                                type="text"
                                placeholder="Email"
                                name="ref1email"
                                className="form-control"
                                onChange={this.handleChange("ref1email")}
                                // defaultValue={values.ref1email}
                                // className="left-inputs"
                                // required
                              />
                            </div>
                          </div>

                          <div className="col-2"></div>

                          <div className="col-5">
                            <div className="form-inputs">
                              <input
                                type="text"
                                placeholder="Phone Number"
                                name="ref1phone"
                                className="form-control"
                                onChange={this.handleChange("ref1phone")}
                                // defaultValue={values.ref1phone}
                                // className="right-inputs"
                                // required
                              />
                            </div>
                          </div>
                        </div>
                        <p>
                          Referee 2
                          <small style={{ color: "red" }}> (Required)</small>
                        </p>

                        <div className="row">
                          <div className="col-5">
                            <div className="form-inputs">
                              <input
                                type="text"
                                placeholder="Full Name"
                                name="ref2name"
                                className="form-control"
                                onChange={this.handleChange("ref2name")}
                                // defaultValue={values.ref2name}
                                // className="left-inputs"
                                // required
                              />
                            </div>
                          </div>

                          <div className="col-2"></div>

                          <div className="col-5">
                            <div className="form-inputs">
                              <input
                                type="text"
                                placeholder="Description/Title"
                                name="ref2title"
                                className="form-control"
                                onChange={this.handleChange("ref2title")}
                                // defaultValue={values.ref2title}
                                // className="right-inputs"
                                // required
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-5">
                            <div className="form-inputs">
                              <input
                                type="text"
                                placeholder="Email"
                                name="ref2email"
                                className="form-control"
                                onChange={this.handleChange("ref2email")}
                                // defaultValue={values.ref2email}
                                // className="left-inputs"
                                // required
                              />
                            </div>
                          </div>

                          <div className="col-2"></div>

                          <div className="col-5">
                            <div className="form-inputs">
                              <input
                                type="text"
                                placeholder="Phone Number"
                                name="ref2phone"
                                className="form-control"
                                onChange={this.handleChange("ref2phone")}
                                // defaultValue={values.ref2phone}
                                // className="right-inputs"
                                // required
                              />
                            </div>
                          </div>
                        </div>
                        <br />
                        <br />
                        <div className="container">
                          <h4>
                            <b>
                              Finally! Enter your Service, Price & Availability
                            </b>
                          </h4>
                          <p>
                            We would like to capture your availability and your
                            pricing per service
                          </p>

                          <div className="row">
                            <div className="col-12 ">
                              <div className="form-group">
                                <label>
                                  Service Category
                                  <small style={{ color: "red" }}>
                                    {" "}
                                    (Required)
                                  </small>
                                </label>
                                <select
                                  className="form-control"
                                  name="category"
                                  onChange={this.handleChange("category")}
                                  // defaultValue={values.category}
                                >
                                  <option value="Default">
                                    Select Service Category
                                  </option>
                                  <option value="Deaf and physica">
                                    Deaf and Physical
                                  </option>
                                  <option value="Deaf">Deaf</option>
                                  <option value="hard of hearing">
                                    Hard Of Hearing
                                  </option>
                                  <option value="Physical support">
                                    Physical Support
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12 ">
                              <div className="form-group">
                                <label>
                                  Service
                                  <small style={{ color: "red" }}>
                                    (Required)
                                  </small>
                                </label>
                                <select
                                  className="form-control"
                                  name="service"
                                  onChange={this.handleChange("service")}
                                  // defaultValue={values.service}
                                >
                                  <option value="Default">
                                    Select Service{" "}
                                  </option>
                                  <option value="personal assistant">
                                    Personal Assistant
                                  </option>
                                  <option value="Interpreter">
                                    Interpreter
                                  </option>
                                  <option value="Captioner">Captioner </option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <p>
                            <b>Enter your Service Availability</b>
                          </p>
                          <p>
                            Days
                            <small style={{ color: "red" }}> (Required)</small>
                          </p>

                          <div className="row" style={{ fontSize: "12px" }}>
                            <div className="col-3">
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    // checked={state.checkedB}
                                    checked={this.state.sunday}
                                    onChange={this.onChangesunday}
                                    // onChange={this.handleChange("sunday")}
                                    //   checked={values.sunday}
                                    name="sunday"
                                    color="primary"
                                  />
                                }
                                label="Sunday"
                              />
                            </div>
                            <div className="col-3">
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    // checked={state.checkedB}
                                    // onChange={this.handleChange("monday")}
                                    //   checked={values.monday}
                                    checked={this.state.monday}
                                    onChange={this.onChangemonday}
                                    name="monday"
                                    color="primary"
                                  />
                                }
                                label="Monday"
                              />
                            </div>
                            <div className="col-3">
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    // checked={state.checkedB}
                                    // onChange={this.handleChange("tuesday")}
                                    //   checked={values.tuesday}
                                    checked={this.state.tuesday}
                                    onChange={this.onChangetuesday}
                                    name="tuesday"
                                    color="primary"
                                  />
                                }
                                label="Tuesday"
                              />
                            </div>
                            <div className="col-3">
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    // checked={state.checkedB}
                                    // onChange={this.handleChange("wednesday")}
                                    //   checked={values.wednesday}
                                    checked={this.state.wednesday}
                                    onChange={this.onChangewednesday}
                                    name="wednesday"
                                    color="primary"
                                  />
                                }
                                label="Wednesday"
                              />
                            </div>
                            <div className="col-3">
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    // checked={state.checkedB}
                                    // onChange={this.handleChange("thursday")}
                                    //   checked={values.thursday}
                                    checked={this.state.thursday}
                                    onChange={this.onChangethursday}
                                    name="thursday"
                                    color="primary"
                                  />
                                }
                                label="Thursday"
                              />
                            </div>
                            <div className="col-3">
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    // checked={state.checkedB}
                                    // onChange={this.handleChange("friday")}
                                    //   checked={values.friday}
                                    checked={this.state.friday}
                                    onChange={this.onChangefriday}
                                    name="friday"
                                    color="primary"
                                  />
                                }
                                label="Friday"
                              />
                            </div>
                            <div className="col-3">
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    // checked={state.checkedB}
                                    // onChange={this.handleChange("saturday")}
                                    //   checked={values.saturday}
                                    checked={this.state.saturday}
                                    onChange={this.onChangesaturday}
                                    name="saturday"
                                    color="primary"
                                  />
                                }
                                label="Saturday"
                              />
                            </div>
                          </div>
                          <p>
                            Time
                            <small style={{ color: "red" }}> (Required)</small>
                          </p>
                          <div className="row">
                            <div className="col-5">
                              <div className="form-inputs">
                                <input
                                  type="time"
                                  placeholder="Start Time"
                                  name="starttime"
                                  className="form-control"
                                  onChange={this.handleChange("starttime")}
                                  // defaultValue={values.starttime}
                                  // className="left-inputs"
                                  // required
                                />
                              </div>
                            </div>

                            <div className="col-2"></div>

                            <div className="col-5">
                              <div className="form-inputs">
                                <input
                                  type="time"
                                  placeholder="End Time"
                                  name="endtime"
                                  className="form-control"
                                  onChange={this.handleChange("endtime")}
                                  // defaultValue={values.endtime}
                                  // className="right-inputs"
                                  // required
                                />
                              </div>
                            </div>
                          </div>
                          <p>
                            <b>Enter your Service Pricing</b>
                          </p>

                          <div className="col-2"></div>

                          <div className="col-5">
                            <div className="form-inputs">
                              <label>
                                <b>Per Day(UGX)</b>
                              </label>
                              <input
                                type="text"
                                placeholder="Price Per Visit(UGX)"
                                name="pricevisit"
                                className="form-control"
                                onChange={this.handleChange("pricevisit")}
                                //   defaultValue={values.pricevisit}
                                // className="right-inputs"
                                // required
                              />
                            </div>
                          </div>
                        </div>
                        <small style={{ color: "green" }}>
                          <b>+ Add Service</b>
                        </small>
                        <div className="col-3">
                          <FormControlLabel
                            control={
                              <Checkbox
                                // onChange={this.handleChange("terms")}
                                //   checked={values.terms}
                                checked={this.state.terms}
                                onChange={this.onChangeterms}
                                name="terms"
                                color="primary"
                              />
                            }
                            label="I agree to the terms and conditions set by Dasuns"
                          />
                        </div>
                    
                      </div>
                    </div>
                    <div className="form-group">
                      <button
                        className="btn btn-success btn-block"
                        //   onClick={this.continue}
                        type="submit"
                      >
                        <strong>SUBMIT</strong>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
           {/* )} */}
         {/* </Formik> */}
      </>
    );
  }
}

export default JointForm;
// export default connect(null, { addServiceProvider })(JointForm);
