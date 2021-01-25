import React, { Component } from "react";

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export class SPReg2 extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="main-service">
        <div className="card" id="signup-service-card">
          <div className="card-body" id="cardBody">
            <form>
              <div className="container">
                <h4>
                  <b>Eligibility</b>
                </h4>
                <p>
                  As a Dasuns Professional Service Provider, Make sure you meet
                  the criteria by selecting the options which apply to you below
                  <small style={{ color: "red" }}> (Required)</small>
                </p>

                <div
                  style={{
                    width: "100",
                    height: "auto",
                    marginBottom: 40,
                  }}
                ></div>

                <FormControlLabel
                  control={
                    <Checkbox
                      // checked={state.checkedB}
                      // onChange={handleChange}
                      name="yearexp"
                      onChange={handleChange("yearexp")}
                      checked={values.yearexp}
                      color="primary"
                      defaultValue={values.yearexp}
                      value="One year experince"
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
                      value="I am not a middle man"
                      // checked={state.notmidman}
                      onChange={handleChange("notmidman")}
                      checked={values.notmidman}
                      color="primary"
                      defaultValue={values.notmidman}
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
                      value="I have the required skillset"
                      color="primary"
                      defaultValue={values.skillset}
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
                      // defaultChecked={isChecked()}
                      color="primary"
                      value="I have a reliable internet and device"
                      defaultValue={values.internet}
                    />
                  }
                  label="You have a phone/computer with active internet"
                />

                <button
                  className="btn btn-success btn-block"
                  onClick={this.continue}
                >
                  <strong>SAVE & CONTINUE</strong>
                </button>
                <button
                  className="btn btn-success btn-block"
                  onClick={this.back}
                >
                  <strong>BACK</strong>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SPReg2;
