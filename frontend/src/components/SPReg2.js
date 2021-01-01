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
                      name="oneYrExp"
                      // checked={state.notMiddle}
                      onChange={handleChange("oneYrExp")}
                      checked={values.oneYrExp}
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
                      name="notMiddle"
                      // checked={state.notMiddle}
                      onChange={handleChange("notMiddle")}
                      checked={values.notMiddle}
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

                {/* <div className="checkboxes">
                  <div class="">
                    <input type="checkbox" value="sunday" name="sunday" id="" />
                    <label class="" for="">
                      At least 1 year of experience in your profession
                    </label>
                  </div>
                  <div class="">
                    <input type="checkbox" value="monday" name="monday" id="" />
                    <label class="" for="">
                      You're not a middle man
                    </label>
                  </div>
                  <div class="">
                    <input type="checkbox" value="monday" name="monday" id="" />
                    <label class="" for="">
                      You have the skillset to give professional service
                    </label>
                  </div>
                  <div class="">
                    <input type="checkbox" value="monday" name="monday" id="" />
                    <label class="" for="">
                      You have a phone / Computer and active Phone Number
                    </label>
                  </div>
                </div>
                <div> */}
                {/* <p>
                    Only allowed to proceed to the other step by checking all
                    fields. If you do not have the above eligibility requirements,
                    We can not proceed to the next step. You can always signup later
                    when you meet all the above eligibility requirements
                  </p>
                </div> */}
                {/* <div className="row">
                  <div className="col-5">
                    <div id="btn-group">
                      <button type="submit" id="btn-default">
                        <strong>BACK TO PREVIOUS</strong>
                      </button>
                    </div>
                  </div>
    
                  <div className="col-2"></div>
    
                  <div className="col-5">
                    <div id="btn-group">
                      <button type="submit" id="btn-success">
                        <strong>SAVE & CONTINUE</strong>
                      </button>
                    </div>
                  </div>
                </div> */}
                {/* <div className="row"> */}
                  {/* <div className="col-5"> */}
                    {/* <div className="form-group"> */}
                      <button
                        className="btn btn-success btn-block"
                        onClick={this.continue}
                      >
                        <strong>SAVE & CONTINUE</strong>
                      </button>
                    {/* </div> */}
                    {/* <div className="col-5"> */}
                      <button
                        className="btn btn-success btn-block"
                        onClick={this.back}
                      >
                        <strong>BACK</strong>
                      </button>
                    {/* </div> */}
                  {/* </div> */}
                {/* </div> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SPReg2;
