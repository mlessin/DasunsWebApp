import React, { Component } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export class SPReg5 extends Component {

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
    
  };

  back = (event) => {
    event.preventDefault();
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
                  <b>Finally! Enter your Service, Price & Availability</b>
                </h4>
                <p>
                  We would like to capture your availability and your pricing
                  per service
                </p>
                <div className="row">
                  <div className="col-12 ">
                    <div className="form-group">
                      <label>
                        Service
                        <small style={{ color: "red" }}> (Required)</small>
                      </label>
                      <select
                        className="form-control"
                        name="service"
                        onChange={handleChange("service")}
                        defaultValue={values.service}
                      >
                        <option value="Default">Select Service </option>
                        <option value="Personal Support Assistance">
                          Personal Support Assistance
                        </option>
                        <option value="Ugandan Sign Language Interpreter">Ugandan Sign language Interpreter</option>
                        <option value="International Sign Language Interpreter">International Sign language Interpreter</option>
                        <option value="Captioning">Captioning</option>
                        <option value="Mobility Guide">Mobility Guide</option>
                      </select>
                    </div>
                  </div>
                </div>
                <p>
                  <b>Enter your Service Availability</b>
                </p>
                <p>
                  Days <small style={{ color: "red" }}> (Required)</small>
                </p>

                <div className="row" style={{ fontSize: "12px" }}>
                  <div className="col-3">
                    <FormControlLabel
                      control={
                        <Checkbox
                          // checked={state.checkedB}
                          onChange={handleChange("sunday")}
                          checked={values.sunday}
                          name="sunday"
                          value="Sunday"
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
                          value="Monday"
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
                          value="Tuesday"
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
                          value="Wednesday"
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
                          value="Thursday"
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
                          value="Friday"
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
                          checked={values.saturday}
                          name="saturday"
                          value="Saturday"
                          color="primary"
                        />
                      }
                      label="Saturday"
                    />
                  </div>
                </div>
                <p>
                  Time<small style={{ color: "red" }}> (Required)</small>
                </p>
                <div className="row">
                  <div className="col-5">
                    <div className="form-inputs">
                      <input
                        type="time"
                        placeholder="Start Time"
                        name="starttime"
                        className="form-control"
                        onChange={handleChange("starttime")}
                        defaultValue={values.starttime}
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
                        onChange={handleChange("endtime")}
                        defaultValue={values.endtime}
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
                      onChange={handleChange("pricevisit")}
                      defaultValue={values.pricevisit}
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
                      onChange={handleChange("terms")}
                      checked={values.terms}
                      name="terms"
                      value="Agree"
                      color="primary"
                    />
                  }
                  label="I agree to the terms and conditions set by Dasuns"
                />
              </div>
              <div className="form-group">
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

export default SPReg5;
