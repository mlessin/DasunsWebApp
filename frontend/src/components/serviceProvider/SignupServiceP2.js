import React, { Component } from "react";
import "../style.css";
import PaginationPage from "../PaginationPage";

export default class SignupServiceP2 extends Component {
  render() {
    return (
      <div className="main-service">
        <PaginationPage />
        <div className="card" id="signup-service-card">
          <div className="card-body" id="cardBody">
            <form onSubmit={this.onSubmit}>
              <h4>
                <b>Eligibility</b>
              </h4>
              <p>
                As a Dasuns Professional Service Provider, Make sure you meet
                the criteria by selecting the options which apply to you below 
                <small style={{ color: "red" }}> (Required)</small>
              </p>
              <div className="checkboxes">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="defaultChecked2"
                  />
                  <label class="custom-control-label" for="defaultChecked2">
                    At least 1 year of experience in your profession
                  </label>
                </div>

                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="" />
                  <label class="custom-control-label" for="">
                    You're not a middle man
                  </label>
                </div>

                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="" />
                  <label class="custom-control-label" for="">
                    You have the skillset to give professional service
                  </label>
                </div>

                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="" />
                  <label class="custom-control-label" for="">
                    You have a phone / Computer and active Phone Number
                  </label>
                </div>
              </div>
              <div>
                <p>
                  Only allowed to proceed to the other step by checking all
                  fields. If you do not have the above eligibility requirements,
                  We can not proceed to the next step. You can always signup
                  later when you meet all the above eligibility requirements
                </p>
              </div>
              <div id="btn-group">
                <button
                  type="submit"
                  id="btn-default"
                //   className="btn btn-default btn-block"
                >
                    {/* BACK TO PREVIOUS */}
                  <strong>BACK TO PREVIOUS</strong>
                </button>
                <button
                  type="submit"
                  id="btn-success"
                //   className="btn btn-success btn-block"
                >
                    {/* SAVE & CONTINUE */}
                  <strong>SAVE & CONTINUE</strong>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
