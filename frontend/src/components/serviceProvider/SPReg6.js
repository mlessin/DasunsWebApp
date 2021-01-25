import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import Button from "@material-ui/core/Button";

// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { addServiceProvider } from "../../actions/serviceProviders"

export class SPReg6 extends Component {
  constructor() {
    super();

    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // static propTypes = {
  //   addServiceProvider: PropTypes.func.isRequired,
  //   isAuthenticated: PropTypes.bool
  // };

  // handleSubmit = (values) => {
  //   this.props.addServiceProvider(values);
  //   // this.props.history.push("/");
  // };
  


  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM //post to the api
    this.props.handleSubmit();
    // this.props.nextStep();
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
          {/* <Dialog open fullWidth maxWidth="sm"> */}
            <AppBar title="Confirm User Data" />
            {/* <form onSubmit={this.handleSubmit}> */}
            <List>
              <ListItem>
                <ListItemText primary="Full Name" secondary={fullname}/>
              </ListItem>
              <ListItem>
                <ListItemText primary="Phone number" secondary={phone} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email}/>
              </ListItem>
              <ListItem>
                <ListItemText primary="NIN" secondary={nin} />
              </ListItem>
              <ListItem>
                <ListItemText primary="DOB" secondary={dob} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Gender" secondary={gender}/>
              </ListItem>
              <ListItem>
                <ListItemText primary="Physical Address" secondary={phyadd}/>
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
                <ListItemText primary="Web link" secondary={portifolio}  />
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
                <ListItemText primary="Ref 1 title" secondary={ref1title}/>
              </ListItem>
              <ListItem>
                <ListItemText primary="Ref 1 email" secondary={ref1email}/>
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
                  secondary={pricevisit}
                  // name="pricevisit"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="I agree to the terms and conditions set by Dasuns"
                  secondary={terms}
                  // name="terms"
                />
              </ListItem>
            </List>
            <br />

            <Button color="secondary" variant="contained" onClick={this.back}>
              Back
            </Button>

            <Button color="primary" variant="contained" type="submit" onClick={this.continue}>
              Confirm & Submit
            </Button>
            {/* </form> */}
          {/* </Dialog> */}
        </>
      </MuiThemeProvider>
    );
  }
}

export default SPReg6;

// export default connect(null, { addServiceProvider })(SPReg6);