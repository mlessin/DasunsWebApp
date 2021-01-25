import { Formik } from "formik";
import { Form, Datepicker, Button, Textarea, Input } from "react-formik-ui";
import * as Yup from "yup";
import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
// import { List, ListItem, ListItemText } from "@material-ui/core/";
// import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addServiceProvider, oneServiceProvider } from "../../actions/serviceProviders";

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import axios from "axios";

const formSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("You must specify your full name"),
});

// const initialValues = {
//   fullname: "",
//   phone: "",
//   email: "",
//   nin: "",
//   dob: "",
//   gender: "",
//   phyadd: "",
//   yearexp: "",
//   notmidman: "",
//   skillset: "",
//   internet: "",
//   qualification: "",
//   portifolio: "",
//   profession: "",
//   ref1name: "",
//   ref1email: "",
//   ref1title: "",
//   ref1phone: "",
//   ref2name: "",
//   ref2email: "",
//   ref2title: "",
//   ref2phone: "",
//   category: "",
//   service: "",
//   sunday: "",
//   monday: "",
//   tuesday: "",
//   wednesday: "",
//   thursday: "",
//   friday: "",
//   saturday: "",
//   starttime: "",
//   endtime: "",
//   pricevisit: "",
//   terms: "",
// };
class SPReg6 extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onSubmit = this.onSubmit.bind(this);
  }

  static propTypes = {
    addServiceProvider: PropTypes.func.isRequired,
    serviceProvider: PropTypes.object.isRequired,
    // oneServiceProvider: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  // componentDidMount() {
  //   this.props.oneServiceProvider();
  // }

  onSubmit = (values, { setSubmitting }) => {
    this.props.addServiceProvider(values);
    this.setSubmitting = setSubmitting;
    // this.props.history.push("/");
    console.log(values)
  };

  // onSubmit = (values, { setSubmitting }) => {
  //   this.props.updateProject(this.props.match.params.id, values);
  //   this.setSubmitting = setSubmitting;
  //   this.props.history.push("/display");
  // };


  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { history } = this.props;
    const { handleChange } = this.props;
    const {
      values: {
        fullname,
        phone,
        email,
        nin,
        dob,
        gender,
        phyadd,
        yearexp,
        notmidman,
        skillset,
        internet,
        qualification,
        portifolio,
        profession,
        ref1name,
        ref1email,
        ref1title,
        ref1phone,
        ref2name,
        ref2email,
        ref2title,
        ref2phone,
        category,
        service,
        sunday,
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
        starttime,
        endtime,
        pricevisit,
        terms,
      },
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar title="Confirm User Data" />
            <Formik
              // enableReinitialize={true}
              initialValues={this.values}
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
                <Form mode="themed">
                  <div>
                    <div>
                      <div>
                        <h2>Confirm</h2>
                      </div>
                      {/* <div> */}
                      <div
                        style={{
                          paddingTop: 10,
                          width: "100%",
                          backgroundColor: "#fff",
                        }}
                      >
                        <Input
                          type="text"
                          className="form-control"
                          placeholder="Full Name (Required)"
                          name="fullname"
                          onChange={handleChange("fullname")}
                          // defaultValue={values.fullname}
                          // value={fullname}
                        />
                      </div>
                      <div
                        style={{
                          paddingTop: 10,
                          width: "100%",
                          backgroundColor: "#fff",
                        }}
                      >
                        <Input
                          type="text"
                          className="form-control"
                          placeholder="Phone Number(Required)"
                          name="phone"
                          onChange={handleChange("phone")}
                          // defaultValue={values.phone}
                          // value={phone}
                        />
                      </div>
                      <div
                        style={{
                          paddingTop: 10,
                          width: "100%",
                          backgroundColor: "#fff",
                        }}
                      >
                        <Input
                          type="email"
                          className="form-control"
                          placeholder="Email(Required)"
                          name="email"
                          onChange={handleChange("email")}
                          // defaultValue={values.email}
                          // value={email}
                        />
                      </div>

                      <div
                        style={{
                          paddingTop: 10,
                          width: "100%",
                          backgroundColor: "#fff",
                        }}
                      >
                        <Input
                          type="text"
                          className="form-control"
                          placeholder="NIN(Required)"
                          name="nin"
                          onChange={handleChange("nin")}
                          // defaultValue={values.nin}
                          // value={nin}
                        />
                      </div>

                      <div
                        style={{
                          paddingTop: 10,
                          width: "100%",
                          backgroundColor: "#fff",
                        }}
                      >
                        <Input
                          type="date"
                          className="form-control"
                          placeholder="DOB(Required)"
                          name="dob"
                          onChange={handleChange("dob")}
                          // defaultValue={values.dob}
                          // value={dob}
                        />
                      </div>

                      <div
                        style={{
                          paddingTop: 10,
                          width: "100%",
                          backgroundColor: "#fff",
                        }}
                      >
                        {/* <Input
                          name="gender"
                          label="Gender"
                            // value={values.gender}
                          value={gender}
                        /> */}
                        <div className="row">
                          <div className="col-12 ">
                            <div className="form-group">
                              <select
                                className="form-control"
                                name="gender"
                                onChange={handleChange("gender")}
                                // defaultValue={values.gender}
                                // value={gender}
                              >
                                <option value="Default">Select gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        style={{
                          paddingTop: 10,
                          width: "100%",
                          backgroundColor: "#fff",
                        }}
                      >
                        <Input
                          type="text"
                          className="form-control"
                          placeholder="Physical Address(Required)"
                          name="phyadd"
                          onChange={handleChange("phyadd")}
                          // defaultValue={values.phyadd}
                          // value={phyadd}
                        />
                      </div>

                      <FormControlLabel
                        control={
                          <Checkbox
                            name="yearexp"
                            onChange={handleChange("yearexp")}
                            // checked={values.yearexp}
                            // checked={yearexp}
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
                            // onChange={handleChange}
                            name="notmidman"
                            // checked={state.notmidman}
                            onChange={handleChange("notmidman")}
                            // checked={values.notmidman}
                            // checked={notmidman}
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
                            onChange={handleChange("skillset")}
                            // checked={values.skillset}
                            // checked={skillset}
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
                            // onChange={handleChange}
                            name="internet"
                            onChange={handleChange("internet")}
                            // checked={values.internet}
                            // checked={internet}
                            color="primary"
                          />
                        }
                        label="You have a phone/computer with active internet"
                      />
                      <br />
                      <br />
                      <br />
                      <br />
                      <div
                        style={{
                          paddingTop: 10,
                          width: "100%",
                          backgroundColor: "#fff",
                        }}
                      >
                        <Input
                          type="file"
                          className="form-control"
                          placeholder="Please Add your Qualification here (Required)"
                          name="qualification"
                          onChange={handleChange("qualification")}
                          // defaultValue={values.qualification}
                          // value={qualification}
                        />
                      </div>

                      <div
                        style={{
                          paddingTop: 10,
                          width: "100%",
                          backgroundColor: "#fff",
                        }}
                      >
                        <Input
                          type="text"
                          className="form-control"
                          placeholder="Please Add your link here (Optional)"
                          name="portifolio"
                          onChange={handleChange("portifolio")}
                          // defaultValue={values.portifolio}
                          // value={portifolio}
                        />
                      </div>

                      <div
                        style={{
                          paddingTop: 10,
                          width: "100%",
                          backgroundColor: "#fff",
                        }}
                      >
                        <textarea
                          type="text"
                          className="form-control"
                          name="profession"
                          onChange={handleChange("profession")}
                          // defaultValue={values.profession}
                          // value={profession}
                          // required
                        />
                      </div>

                      <div
                        style={{
                          paddingTop: 10,
                          width: "100%",
                          backgroundColor: "#fff",
                        }}
                      >
                        <Input
                          type="text"
                          placeholder="Full Name"
                          name="ref1name"
                          className="form-control"
                          onChange={handleChange("ref1name")}
                          // defaultValue={values.ref1name}
                          // value={ref1name}
                        />
                      </div>

                      <div
                        style={{
                          paddingTop: 10,
                          width: "100%",
                          backgroundColor: "#fff",
                        }}
                      >
                        <Input
                          type="text"
                          placeholder="Description/Title"
                          name="ref1title"
                          className="form-control"
                          onChange={handleChange("ref1title")}
                          // defaultValue={values.ref1title}
                          // value={ref1title}
                        />
                      </div>

                      <div
                        style={{
                          paddingTop: 10,
                          width: "100%",
                          backgroundColor: "#fff",
                        }}
                      >
                        <Input
                          type="text"
                          placeholder="Email"
                          name="ref1email"
                          className="form-control"
                          onChange={handleChange("ref1email")}
                          // defaultValue={values.ref1email}
                          // value={ref1email}
                        />
                      </div>

                      <div
                        style={{
                          paddingTop: 10,
                          width: "100%",
                          backgroundColor: "#fff",
                        }}
                      >
                        <Input
                          type="text"
                          placeholder="Phone Number"
                          name="ref1phone"
                          className="form-control"
                          onChange={handleChange("ref1phone")}
                          // defaultValue={values.ref1phone}
                          // value={ref1phone}
                        />
                      </div>
                      <div
                        style={{
                          paddingTop: 10,
                          width: "100%",
                          backgroundColor: "#fff",
                        }}
                      >
                        <Input
                          type="text"
                          placeholder="Full Name"
                          name="ref2name"
                          className="form-control"
                          onChange={handleChange("ref2name")}
                          // defaultValue={values.ref2name}
                          // value={ref2name}
                        />
                      </div>

                      <div
                        style={{
                          paddingTop: 10,
                          width: "100%",
                          backgroundColor: "#fff",
                        }}
                      >
                        <Input
                          type="text"
                          placeholder="Description/Title"
                          name="ref2title"
                          className="form-control"
                          onChange={handleChange("ref2title")}
                          // defaultValue={values.ref2title}
                          // value={ref2title}
                        />
                      </div>

                      <div
                        style={{
                          paddingTop: 10,
                          width: "100%",
                          backgroundColor: "#fff",
                        }}
                      >
                        <Input
                          type="text"
                          placeholder="Email"
                          name="ref2email"
                          className="form-control"
                          onChange={handleChange("ref2email")}
                          // defaultValue={values.ref2email}
                          // value={ref2email}
                        />
                      </div>

                      <div
                        style={{
                          paddingTop: 10,
                          width: "100%",
                          backgroundColor: "#fff",
                        }}
                      >
                        <Input
                          type="text"
                          placeholder="Phone Number"
                          name="ref2phone"
                          className="form-control"
                          onChange={handleChange("ref2phone")}
                          // defaultValue={values.ref2phone}
                          // value={ref2phone}
                        />
                      </div>

                      <div
                        style={{
                          paddingTop: 10,
                          width: "100%",
                          backgroundColor: "#fff",
                        }}
                      >
                        <select
                          className="form-control"
                          name="category"
                          onChange={handleChange("category")}
                          // defaultValue={values.category}
                          // value={category}
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

                      <div
                        style={{
                          paddingTop: 10,
                          width: "100%",
                          backgroundColor: "#fff",
                        }}
                      >
                        <select
                        className="form-control"
                        name="service"
                        onChange={handleChange("service")}
                        // defaultValue={values.service}
                        // value={service}
                      >
                        <option value="Default">Select Service </option>
                        <option value="personal assistant">
                          Personal Assistant
                        </option>
                        <option value="Interpreter">Interpreter</option>
                        <option value="Captioner">Captioner </option>
                      </select>
                      </div>

                      <div className="row" style={{ fontSize: "12px" }}>
                        <div className="col-3">
                          <FormControlLabel
                            control={
                              <Checkbox
                                // checked={state.checkedB}
                                onChange={handleChange("sunday")}
                                // checked={values.sunday}
                                // checked={sunday}
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
                                onChange={handleChange("monday")}
                                // checked={values.monday}
                                // checked={monday}
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
                                onChange={handleChange("tuesday")}
                                // checked={values.tuesday}
                                // checked={tuesday}
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
                                onChange={handleChange("wednesday")}
                                // checked={values.wednesday}
                                // checked={wednesday}
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
                                onChange={handleChange("thursday")}
                                // checked={values.thursday}
                                // checked={thursday}
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
                                onChange={handleChange("friday")}
                                // checked={values.friday}
                                // checked={friday}
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
                                onChange={handleChange("saturday")}
                                // checked={values.saturday}
                                // value={saturday}
                                name="saturday"
                                color="primary"
                              />
                            }
                            label="Saturday"
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          paddingTop: 10,
                          width: "100%",
                          backgroundColor: "#fff",
                        }}
                      >
                        <Input
                           type="time"
                           placeholder="Start Time"
                           name="starttime"
                           className="form-control"
                           onChange={handleChange("starttime")}
                          //  defaultValue={values.starttime}
                          // value={starttime}
                        />
                      </div>

                      <div
                        style={{
                          paddingTop: 10,
                          width: "100%",
                          backgroundColor: "#fff",
                        }}
                      >
                        <Input
                          type="time"
                          placeholder="End Time"
                          name="endtime"
                          className="form-control"
                          onChange={handleChange("endtime")}
                          // defaultValue={values.endtime}
                          // value={endtime}
                        />
                      </div>

                      <div
                        style={{
                          paddingTop: 10,
                          width: "100%",
                          backgroundColor: "#fff",
                        }}
                      >
                        <Input
                           type="text"
                           label= "Price Per Visit(UGX)"
                           placeholder="Price Per Visit(UGX)"
                           name="pricevisit"
                           className="form-control"
                           onChange={handleChange("pricevisit")}
                          //  defaultValue={values.pricevisit}
                          // value={pricevisit}
                        />
                      </div>

                      <div className="col-3">
                        <FormControlLabel
                          control={
                            <Switch
                              onChange={handleChange("terms")}
                              // checked={values.terms}
                              name="terms"
                              // value={terms}
                              color="primary"
                            />
                          }
                          label="I agree to the terms and conditions set by Dasuns"
                        />
                      </div>
                    </div>
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={this.back}
                    >
                      Back
                    </Button>

                    <Button
                      color="primary"
                      variant="contained"
                      type="submit"
                      // onClick={this.onSubmit}
                    >
                      Confirm & Submit
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

// export default SPReg6;

const mapStateToProps = state => ({
  serviceProvider: state.serviceProviders.serviceProvider
});

export default connect(mapStateToProps, { oneServiceProvider, addServiceProvider })(
  SPReg6
);

// export default connect(null, { addServiceProvider })(SPReg6);

// const mapStateToProps = (state) => ({
//   serviceProvider: state.serviceProviders.serviceProvider,
// });

// export default connect(mapStateToProps, { addServiceProvider })(SPReg6);
