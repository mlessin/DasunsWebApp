import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import Button from "@material-ui/core/Button";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addServiceProvider } from "../actions/serviceproviders";

export class SPReg6 extends Component {

  static propTypes = {
    addServiceProvider: PropTypes.func.isRequired,
    // isAuthenticated: PropTypes.bool
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
    const {
      values: {
        fullname,
        phone,
        email,
        nin,
        dob,
        gender,
        PhyAdd,
        oneYrExp,
        notMiddle,
        skillset,
        internet,
        qualification,
        link,
        profession,
        ref1Name,
        ref1title,
        ref1email,
        ref1phone,
        ref2Name,
        ref2title,
        ref2email,
        ref2phone,
        sunday,
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        service,
        category,
        saturday,
        starttime,
        endtime,
        priceVisit,
        terms,
      },
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar title="Confirm User Data" />
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
                <ListItemText primary="Physical Address" secondary={PhyAdd} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="One year Experience in your profession"
                  secondary={oneYrExp}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="You're not a middleman"
                  secondary={notMiddle}
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
                <ListItemText primary="Web link" secondary={link} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Tell us about yourself"
                  secondary={profession}
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Ref 1 name" secondary={ref1Name} />
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
                <ListItemText primary="Ref 2 name" secondary={ref2Name} />
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
                <ListItemText primary="Service category" secondary={category} />
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
                  secondary={priceVisit}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="I agree to the terms and conditions set by Dasuns"
                  secondary={terms}
                />
              </ListItem>
            </List>
            <br />

            <Button color="secondary" variant="contained" onClick={this.back}>
              Back
            </Button>

            <Button color="primary" variant="contained" onClick={this.onSubmit}>
              Confirm & Submit
            </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

// export default SPReg6;

export default connect(null, { addServiceProvider })(SPReg6);