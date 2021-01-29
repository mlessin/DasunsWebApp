import React, { Component } from "react";

import SPReg1 from "./SPReg1";
import SPReg2 from "./SPReg2";
import SPReg3 from "./SPReg3";
import SPReg4 from "./SPReg4";
import SPReg5 from "./SPReg5";
import SPReg6 from "./SPReg6";

import Banner from "../Banner";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addServiceProvider } from "../../actions/serviceProviders"

export class ServiceReg extends Component {
  state = {
    step: 1,
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

    // category: "",
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

  static propTypes = {
    addServiceProvider: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };

 
  //go to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  //back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  //Handle field change

  // handleChangeCheck = (input) => (event) => {
  //   const isCheckbox = event.target.type === "checkbox";
  //   this.setState({
  //     [event.target.name]: isCheckbox
  //       ? event.target.value
  //       : event.target.value,
  //   });
  // };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };


  handleSubmit = ()  => {
   
    const data = {
          fullname: this.state.fullname,
          phone: this.state.phone,
          email: this.state.email,
          nin: this.state.nin,
          dob: this.state.dob,
          gender: this.state.gender,
          phyadd: this.state.phyadd,
          yearexp: this.state.yearexp.toString(),
          notmidman: this.state.notmidman.toString(),
          skillset: this.state.skillset.toString(),
          internet: this.state.internet.toString(),
          qualification: this.state.qualification,
          portifolio: this.state.portifolio,
          profession: this.state.profession,
          ref1name: this.state.ref1name,
          ref1email: this.state.ref1email,
          ref1title: this.state.ref1title,
          ref1phone: this.state.ref1phone,
          ref2name: this.state.ref2name,
          ref2email: this.state.ref2email,
          ref2title: this.state.ref2title,
          ref2phone: this.state.ref2phone,
          // category: this.state.category,
          service: this.state.service,
          sunday: this.state.sunday.toString(),
          monday: this.state.monday.toString(),
          tuesday: this.state.tuesday.toString(),
          wednesday: this.state.wednesday.toString(),
          thursday: this.state.thursday.toString(),
          friday: this.state.friday.toString(),
          saturday: this.state.saturday.toString(),
          starttime: this.state.starttime,
          endtime: this.state.endtime,
          pricevisit: this.state.pricevisit,
          terms: this.state.terms.toString()
        };
        console.log(data)

        this.props.addServiceProvider(data);
        this.props.history.push("/splist");
  }

 
  render() {
    const { step } = this.state;
    const {
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
      // category,
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
    } = this.state;

    const values = {
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
      // category,
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
    };
    console.log(this.state)
    switch (step) {
      case 1:
        return (
          <>
            <Banner />
            <SPReg1
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          </>
        );

      case 2:
        return (
          <>
            <Banner />
            <SPReg2
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              // handleChange={this.handleChangeCheck}
              values={values}
            />
          </>
        );
      case 3:
        return (
          <>
            <Banner />
            <SPReg3
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          </>
        );
      case 4:
        return (
          <>
            <Banner />
            <SPReg4
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          </>
        );
      case 5:
        return (
          <>
            <Banner />
            <SPReg5
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              // handleChange={this.handleChangeCheck}
              values={values}
             
            />
          </>
        );
      case 6:
        return (
          <>
            <Banner />
            <SPReg6
              prevStep={this.prevStep}
              values={values}
              handleSubmit={this.handleSubmit}
            />
          </>
        );
        default:
          return null
    }
  }
}

export default connect(null, { addServiceProvider })(ServiceReg);
