import React, { Component } from "react";
import "../style.css";
import PaginationPage from "../PaginationPage";

export default class SignupServiceP3 extends Component {
  render() {
    return (
      <div className="main-service">
        <PaginationPage />
        <div className="card" id="signup-service-card">
          <div className="card-body" id="cardBody">
            <form onSubmit={this.onSubmit}>
              <div className="container">
                <h4>
                  <b>Evidence of Expertise</b>
                </h4>
                <p>
                  Please provide your Technical Training or Your Qualifications.
                  <small style={{ color: "red" }}> (Required)</small>
                </p>
                <div className="form-group">
                  <input
                    type="file"
                    className="form-control"
                    placeholder="Please Add your Qualification here (Required)"
                    name="qualification"
                    required
                  />
                </div>
                <p>
                  Please provide a link to your Portfolio (Could be a link of a
                  website or social media pages)
                </p>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Please Add your link here (Optional)"
                    name="link"
                  />
                </div>
                <p>Please leave it blank if you have no online portfolio</p>
                <div className="row">
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
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
