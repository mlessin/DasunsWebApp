import React from "react";
import "../style.css";
// import PaginationPage from "../PaginationPage";
// import Banner from "../Banner";

export const SignupServiceP5 = (
  // const radios = {
  //   fontSize: "12px",
  // };

  // const requiredInput = {
  //   color: "red",
  // };

  <div className="main-service">
    <div className="card" id="signup-service-card">
      <div className="card-body" id="cardBody">
        <form >
          <div className="container">
            <h4>
              <b>Finally! Enter your Service, Price & Availability</b>
            </h4>
            <p>
              We would like to capture your availability and your pricing per
              service
            </p>

            <div className="row">
              <div className="col-12 ">
                <div className="form-group">
                  <label>
                    Service Category
                    <small style={{ color: "red" }}> (Required)</small>
                  </label>
                  <select className="form-control">
                    <option value="Default">Select Service Category</option>
                    <option value="1">Deaf Physical</option>
                    <option value="2">Deaf</option>
                    <option value="3">Hard Of Hearing</option>
                    <option value="4">Physical Support</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 ">
                <div className="form-group">
                  <label>
                    Service
                    <small style={{ color: "red" }}> (Required)</small>
                  </label>
                  <select className="form-control">
                    <option value="Default">Select Service </option>
                    <option value="1">Personal Assistant</option>
                    <option value="2">Interpreter</option>
                    <option value="3">Captioner </option>
                    <option value="4"> Personal Assistant</option>
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
                <div class="">
                  <input type="radio" value="sunday" name="sunday" id="" />
                  <label class="" for="">
                    SUNDAY
                  </label>
                </div>
              </div>

              <div className="col-3">
                <div class="">
                  <input type="radio" value="monday" name="monday" id="" />
                  <label class="" for="">
                    MONDAY
                  </label>
                </div>
              </div>

              <div className="col-3">
                <div class="">
                  <input type="radio" value="tuesday" name="tuesday" id="" />
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

            <div className="row" style={{ fontSize: "12px" }}>
              <div className="col-3">
                <div class="">
                  <input type="radio" value="thurday" name="thursday" id="" />
                  <label class="" for="">
                    THURSDAY
                  </label>
                </div>
              </div>

              <div className="col-3">
                <div class="">
                  <input type="radio" value="friday" name="friday" id="" />
                  <label class="" for="">
                    FRIDAY
                  </label>
                </div>
              </div>

              <div className="col-3">
                <div class="">
                  <input type="radio" value="saturday" name="saturday" id="" />
                  <label class="" for="">
                    SATURDAY
                  </label>
                </div>
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
                    // className="right-inputs"
                    // required
                  />
                </div>
              </div>
            </div>
            <p>
              <b>Enter your Service Pricing</b>
            </p>
            <div className="row">
              {/* <div className="col-5">
                <div className="form-inputs">
                  <label>
                    <b>Per Hour(UGX)</b>
                  </label>
                  <input
                    type="text"
                    placeholder="Price Per Hour(UGX)"
                    name="priceperhour"
                    className="form-control"
                    // className="left-inputs"
                    // required
                  />
                </div>
              </div> */}

              <div className="col-4"></div>

              <div className="col-8">
                <div className="form-inputs">
                  <label>
                    <b>Per Day(UGX)</b>
                  </label>
                  <input
                    type="text"
                    placeholder="Price Per Visit(UGX)"
                    name="pricepervisit"
                    className="form-control"
                    // className="right-inputs"
                    // required
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
                name="terms"
                // required
              />
              <label class="custom-control-label" for="customSwitches" id="terms">
                I agree to the terms and conditions set by Dasuns
              </label>
            </div>

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
          </div>
        </form>
      </div>
    </div>
  </div>
);

