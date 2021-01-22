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
import { addServiceProvider } from "../../actions/serviceProviders";

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

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
  yearexp: "",
  notmidman: "",
  skillset: "",
  internet: "",
  qualification: "",
  portifolio: "",
  profession: "",
  ref1name: "",
  ref1email: "",
  ref1title: "",
  ref1phone: "",
  ref2name: "",
  ref2email: "",
  ref2title: "",
  ref2phone: "",
  category: "",
  service: "",
  sunday: "",
  monday: "",
  tuesday: "",
  wednesday: "",
  thursday: "",
  friday: "",
  saturday: "",
  starttime: "",
  endtime: "",
  pricevisit: "",
  terms: "",
};
class SPReg6 extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onSubmit = this.onSubmit.bind(this);
  }

  static propTypes = {
    addServiceProvider: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = (values, { setSubmitting }) => {
    this.props.addServiceProvider(values);
    this.setSubmitting = setSubmitting;
    this.props.history.push("/");
  };

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
                <Form mode="themed">
                  <div>
                    <div>
                      <div>
                        <h2>Confirm </h2>
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
                          name="fullname"
                          label="Full Name"
                          //   value={values.fullname}
                          value={fullname}
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
                          name="phone"
                          label="Phone"
                          //   value={values.fullname}
                          value={phone}
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
                          name="email"
                          label="Email"
                          //   value={values.fullname}
                          value={email}
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
                          name="nin"
                          label="NIN"
                          //   value={values.nin}
                          value={nin}
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
                          name="dob"
                          label="DOB"
                          //   value={values.dob}
                          value={dob}
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
                          name="gender"
                          label="Gender"
                          //   value={values.gender}
                          value={gender}
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
                          name="phyadd"
                          label="Physical Address"
                          //   value={values.phyadd}
                          value={phyadd}
                        />
                      </div>

                      <FormControlLabel
                        control={
                          <Checkbox
                            // checked={state.checkedB}
                            // onChange={handleChange}
                            name="yearexp"
                            // checked={state.notMiddle}
                            onChange={handleChange("yearexp")}
                            checked={values.yearexp}
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
                            checked={values.notmidman}
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
                            checked={values.skillset}
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
                            checked={values.internet}
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
                          name="qualification"
                          label="Qualification"
                          //   value={values.qualification}
                          value={qualification}
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
                          name="portifolio"
                          label="Portifolio"
                          //   value={values.portifolio}
                          value={portifolio}
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
                          name="profession"
                          label="Profession"
                          //   value={values.profession}
                          value={profession}
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
                          name="ref1name"
                          label="Ref 1 Full name"
                          //   value={values.ref1name}
                          value={ref1name}
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
                          name="ref1title"
                          label="Ref 1 Title"
                          //   value={values.ref1title}
                          value={ref1title}
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
                          name="ref1email"
                          label="Ref1 Email"
                          //   value={values.ref1email}
                          value={ref1email}
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
                          name="ref1phone"
                          label="Ref 1 Phone"
                          //   value={values.ref1phone}
                          value={ref1phone}
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
                          name="ref2name"
                          label="Ref 2 Full name"
                          //   value={values.ref2name}
                          value={ref2name}
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
                          name="ref2title"
                          label="Ref 2 Title"
                          //   value={values.ref2title}
                          value={ref2title}
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
                          name="ref2email"
                          label="Ref2 Email"
                          //   value={values.ref2email}
                          value={ref2email}
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
                          name="ref2phone"
                          label="Ref 2 Phone"
                          //   value={values.ref2phone}
                          value={ref2phone}
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
                          name="category"
                          label="Service Category"
                          //   value={values.category}
                          value={category}
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
                          name="service"
                          label="Service"
                          //   value={values.service}
                          value={service}
                        />
                      </div>

                      <div className="row" style={{ fontSize: "12px" }}>
                        <div className="col-3">
                          <FormControlLabel
                            control={
                              <Checkbox
                                // checked={state.checkedB}
                                onChange={handleChange("sunday")}
                                checked={values.sunday}
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
                                checked={values.monday}
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
                                checked={values.tuesday}
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
                                checked={values.wednesday}
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
                                checked={values.thursday}
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
                                checked={values.friday}
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
                                // onChange={handleChange("saturday")}
                                value={saturday}
                                // checked={values.saturday}
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
                          name="starttime"
                          label="Start Time"
                          //   value={values.starttime}
                          value={starttime}
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
                          name="endtime"
                          label="End Time"
                          //   value={values.endtime}
                          value={endtime}
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
                          name="pricevisit"
                          label="Price per Visit"
                          value={values.pricevisit}
                          // value={pricevisit}
                        />
                      </div>

                      <div className="col-3">
                        <FormControlLabel
                          control={
                            <Switch
                              onChange={handleChange("terms")}
                              checked={values.terms}
                              name="terms"
                              value={terms}
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

// export default connect(null, {  addServiceProvider })(SPReg6);

const mapStateToProps = (state) => ({
  serviceProvider: state.serviceProviders.serviceProvider,
});

export default connect(mapStateToProps, { addServiceProvider })(SPReg6);
