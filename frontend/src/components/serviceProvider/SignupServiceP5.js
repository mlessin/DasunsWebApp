import React, { Component } from "react";
import "../style.css";
import PaginationPage from "../PaginationPage";
import Banner from "../Banner";

export default class SignupServiceP5 extends Component {
  render() {
    const { history } = this.props;
    const radios = {
      fontSize: "12px",
    };

    const requiredInput = {
      color: "red",
    };
    return (
      <div>
        <Banner />
        <div className="main-service">
          <PaginationPage />
          <div className="card" id="signup-service-card">
            <div className="card-body" id="cardBody">
              <form onSubmit={this.onSubmit}>
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
                          Service Category
                          <small style={requiredInput}> (Required)</small>
                        </label>
                        <select value="{}" className="form-control" required>
                          <option defaultValue>Select Service Category</option>
                          <option value="1">Test</option>
                          <option value="2">Test 2</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12 ">
                      <div className="form-group">
                        <label>
                          Service
                          <small style={requiredInput}> (Required)</small>
                        </label>
                        <select value="{}" className="form-control" required>
                          <option defaultValue>Select Service </option>
                          <option value="1">Test</option>
                          <option value="2">Test 2</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <p>
                    <b>Enter your Service Availability</b>
                  </p>
                  <p>
                    Days <small style={requiredInput}> (Required)</small>
                  </p>

                  <div className="row" style={radios}>
                    <div className="col-3">
                      <div class="">
                        <input
                          type="radio"
                          value="sunday"
                          name="sunday"
                          id=""
                        />
                        <label class="" for="">
                          SUNDAY
                        </label>
                      </div>
                    </div>

                    <div className="col-3">
                      <div class="">
                        <input
                          type="radio"
                          value="monday"
                          name="monday"
                          id=""
                        />
                        <label class="" for="">
                          MONDAY
                        </label>
                      </div>
                    </div>

                    <div className="col-3">
                      <div class="">
                        <input
                          type="radio"
                          value="tuesday"
                          name="tuesday"
                          id=""
                        />
                        <label class="" for="">
                          TUESDAY
                        </label>
                      </div>
                    </div>

                    <div className="col-3">
                      <div class="">
                        <input
                          type="radio"
                          value="wednesday"
                          name="wednesday"
                          id=""
                        />
                        <label class="" for="">
                          WEDNESDAY
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row" style={radios}>
                    <div className="col-3">
                      <div class="">
                        <input
                          type="radio"
                          value="thurday"
                          name="thursday"
                          id=""
                        />
                        <label class="" for="">
                          THURSDAY
                        </label>
                      </div>
                    </div>

                    <div className="col-3">
                      <div class="">
                        <input
                          type="radio"
                          value="friday"
                          name="friday"
                          id=""
                        />
                        <label class="" for="">
                          FRIDAY
                        </label>
                      </div>
                    </div>

                    <div className="col-3">
                      <div class="">
                        <input
                          type="radio"
                          value="saturday"
                          name="saturday"
                          id=""
                        />
                        <label class="" for="">
                          SATURDAY
                        </label>
                      </div>
                    </div>
                  </div>
                  <p>
                    Time<small style={requiredInput}> (Required)</small>
                  </p>
                  <div className="row">
                    <div className="col-5">
                      <div className="form-inputs">
                        <input
                          type="text"
                          placeholder="Start Time"
                          name="starttime"
                          className="left-inputs"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-2"></div>

                    <div className="col-5">
                      <div className="form-inputs">
                        <input
                          type="text"
                          placeholder="End Time"
                          name="endtime"
                          className="right-inputs"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <p>
                    <b>Enter your Service Pricing</b>
                  </p>
                  <div className="row">
                    <div className="col-5">
                      <div className="form-inputs">
                        <label>
                          <b>Per Hour</b>
                        </label>
                        <input
                          type="text"
                          placeholder="Price Per Hour(UGX)"
                          name="priceperhour"
                          className="left-inputs"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-2"></div>

                    <div className="col-5">
                      <div className="form-inputs">
                        <label>
                          <b>Per Day</b>
                        </label>
                        <input
                          type="text"
                          placeholder="Price Per Visit(UGX)"
                          name="pricepervisit"
                          className="right-inputs"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <small style={{ color: "green" }}>
                    <b>+ Add Service</b>
                  </small>

                  <div class="custom-control custom-switch">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="customSwitches"
                      required
                    />
                    <label class="custom-control-label" for="customSwitches">
                      I agree to the terms and conditions set by Dasuns
                    </label>
                  </div>

                  <div className="row">
                    <div className="col-5">
                      <div id="btn-group">
                        <button
                          type="submit"
                          id="btn-default"
                          onClick={() => history.push("/signupserviceprov4")}
                        >
                          <strong>BACK TO PREVIOUS</strong>
                        </button>
                      </div>
                    </div>

                    <div className="col-2"></div>

                    <div className="col-5">
                      <div id="btn-group">
                        <button
                          type="submit"
                          id="btn-success"
                          onClick={() => history.push("/splist")}
                        >
                          <strong>SAVE & CONTINUE</strong>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
