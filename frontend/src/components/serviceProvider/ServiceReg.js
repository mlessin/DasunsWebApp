import React, { Component } from "react";
// import { Stepper } from "@progress/kendo-react-layout";

import SPReg1 from "./SPReg1";
import SPReg2 from "./SPReg2";
import SPReg3 from "./SPReg3";
import SPReg4 from "./SPReg4";
import SPReg5 from "./SPReg5";
import SPReg6 from "./SPReg6";

import Banner from "../Banner";

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

  handleChange = (input) => (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  // handleChange = input => e => {
  //     this.setState({[input]: e.target.value});
  // }

  //  handleChange = evt => {
  //     const value =
  //       evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
  //     this.setState({
  //       ...state,
  //       [evt.target.name]: value
  //     });
  //   }

  // handleCheckboxChange = checkbox => e =>
  // this.setState({ [checkbox]: e.target.checked })

  // handleCheck = event =>{
  // this.setState({ checked: event.target.checked })
  // }

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
    };

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
              values={values}
            />
          </>
        );
      case 6:
        return (
          <>
            <Banner />
            <SPReg6
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          </>
        );
      // default:
      //   return state;
    }
  }
}

export default ServiceReg;
