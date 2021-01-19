import React, { Component } from "react";
import axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import Button from "@material-ui/core/Button";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addServiceProvider } from "../../actions/serviceProviders";

export class SPReg6 extends Component {
  // static propTypes = {
  //   addServiceProvider: PropTypes.func.isRequired,
  //   // isAuthenticated: PropTypes.bool
  // };

  // onSubmit = (values, { setSubmitting }) => {
  //   this.props.addServiceProvider(values);
  //   this.setSubmitting = setSubmitting;
  //   this.props.history.push("/");
  // };

  // onSubmit = e => {
  //   e.preventDefault()
  //   console.log(this.props)
  //   axios
  //     .post("/backend/api/serviceProviders/", this.props)
  //     .then(response => {
  //       console.log(response)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // };

  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    //   console.log(this.props)
    // axios
    //   .post("/backend/api/serviceProviders/", this.props)
    //   .then(response => {
    //     console.log(response)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })

    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  submit = (e) => {
    e.preventDefault();
    this.props.handleSubmit();
  };


  // handleSubmit = event => {
  //   event.preventDefault();
  //   const data = {
  //         fullname: this.state.fullname,
  //         phone: this.state.phone,
  //         email: this.state.email,
  //         nin: this.state.nin,
  //         dob: this.state.dob,
  //         gender: this.state.gender,
  //         phyadd: this.state.phyadd,
  //         yearexp: this.state.yearexp,
  //         notmidman: this.state.notmidman,
  //         skillset: this.state.skillset,
  //         internet: this.state.internet,
  //         qualification: this.state.qualification,
  //         portifolio: this.state.portifolio,
  //         profession: this.state.profession,
  //         ref1name: this.state.ref1name,
  //         ref1email: this.state.ref1email,
  //         ref1title: this.state.ref1title,
  //         ref1phone: this.state.ref1phone,
  //         ref2name: this.state.ref2name,
  //         ref2email: this.state.ref2email,
  //         ref2title: this.state.ref2title,
  //         ref2phone: this.state.ref2phone,
  //         category: this.state.category,
  //         service: this.state.service,
  //         sunday: this.state.sunday,
  //         monday: this.state.monday,
  //         tuesday: this.state.tuesday,
  //         wednesday: this.state.wednesday,
  //         thursday: this.state.thursday,
  //         friday: this.state.friday,
  //         saturday: this.state.saturday,
  //         starttime: this.state.starttime,
  //         endtime: this.state.endtime,
  //         pricevisit: this.state.pricevisit,
  //         terms: this.state.terms,
  //       };
  //   axios.post('http://localhost:8000/backend/api/serviceproviders/', { data })
  //     .then(res=>{
  //       console.log(res);
  //       console.log(res.data);
  //       // window.location = "/retrieve" //This line of code will redirect you once the submission is succeed
  //     })
  // }
  // onSubmit = (e) => {
  //   e.preventDefault();
  //   const data = {
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
  //     ref1email: this.state.ref1email,
  //     ref1title: this.state.ref1title,
  //     ref1phone: this.state.ref1phone,
  //     ref2name: this.state.ref2name,
  //     ref2email: this.state.ref2email,
  //     ref2title: this.state.ref2title,
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

  //   axios
  //     .post("http://localhost:8000/backend/api/serviceproviders/", data)
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // };

  // this.props.addServiceProvider(serviceprovider);

  render() {
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
            <form onSubmit={this.onSubmit}>
              <List>
                <ListItem>
                  <ListItemText primary="Full Name" secondary={fullname} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Phone number" secondary={phone} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Email" secondary={email} />
                </ListItem>

                <ListItem>
                  <ListItemText primary="NIN" secondary={nin} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="DOB" secondary={dob} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Gender" secondary={gender} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Physical Address" secondary={phyadd} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="One year Experience in your profession"
                    secondary={yearexp}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="You're not a middleman"
                    secondary={notmidman}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="You have the skillset to give proffesional service"
                    secondary={skillset}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="You have a phone/computer with active internet"
                    secondary={internet}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Qualificatoins"
                    secondary={qualification}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Web link" secondary={portifolio} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Tell us about yourself"
                    secondary={profession}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Ref 1 name" secondary={ref1name} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Ref 1 title" secondary={ref1title} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Ref 1 email" secondary={ref1email} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Ref 1 phone number"
                    secondary={ref1phone}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Ref 2 name" secondary={ref2name} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Ref 2 title" secondary={ref2title} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Ref 2 email" secondary={ref2email} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Ref 2 phone number"
                    secondary={ref2phone}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Enter your Service Availability:" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Sunday" secondary={sunday} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Monday" secondary={monday} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Tuesday" secondary={tuesday} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Wednesday" secondary={wednesday} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Thursday" secondary={thursday} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Friday" secondary={friday} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Saturday" secondary={saturday} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Service category"
                    secondary={category}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Service" secondary={service} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Start time" secondary={starttime} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="End time" secondary={endtime} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Price per visit"
                    secondary={pricevisit}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="I agree to the terms and conditions set by Dasuns"
                    secondary={terms}
                  />
                </ListItem>
              </List>
            </form>
            <br />

            <Button color="secondary" variant="contained" onClick={this.back}>
              Back
            </Button>

            <Button color="primary" variant="contained" onClick={this.submit}>
              Confirm & Submit
            </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}
// export default SPReg6;

// export default connect(null, { addServiceProvider })(SPReg6);
export default SPReg6;
