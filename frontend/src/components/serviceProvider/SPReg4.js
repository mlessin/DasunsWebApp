import React, { Component } from "react";

export class SPReg4 extends Component {
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
                  <b>We only work with Professionals</b>
                </h4>
                <p>
                  We would like you to tell us more about yourself and your
                  professional services that you offer
                </p>

                <div className="row">
                  <div className="col-12 ">
                    <div className="form-textarea">
                      <textarea
                        type="text"
                        className="form-control"
                        name="profession"
                        onChange={handleChange("profession")}
                        defaultValue={values.profession}
                        // required
                      />
                      <p>100 words</p>
                    </div>
                  </div>
                </div>
                <p>
                  <b>Provide us with 2 Referees who we can contact</b>
                  <small style={{ color: "red" }}> (Required)</small>
                </p>
                <p>
                  Referee 1<small style={{ color: "red" }}> (Required)</small>
                </p>

                <div className="row">
                  <div className="col-5">
                    <div className="form-inputs">
                      <input
                        type="text"
                        placeholder="Full Name"
                        name="ref1name"
                        className="form-control"
                        onChange={handleChange("ref1name")}
                        defaultValue={values.ref1name}
                        // className="left-inputs"
                        // required
                      />
                    </div>
                  </div>

                  <div className="col-2"></div>

                  <div className="col-5">
                    <div className="form-inputs">
                      <input
                        type="text"
                        placeholder="Description/Title"
                        name="ref1title"
                        className="form-control"
                        onChange={handleChange("ref1title")}
                        defaultValue={values.ref1title}
                        // className="right-inputs"
                        // required
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-5">
                    <div className="form-inputs">
                      <input
                        type="text"
                        placeholder="Email"
                        name="ref1email"
                        className="form-control"
                        onChange={handleChange("ref1email")}
                        defaultValue={values.ref1email}
                        // className="left-inputs"
                        // required
                      />
                    </div>
                  </div>

                  <div className="col-2"></div>

                  <div className="col-5">
                    <div className="form-inputs">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        name="ref1phone"
                        className="form-control"
                        onChange={handleChange("ref1phone")}
                        defaultValue={values.ref1phone}
                        // className="right-inputs"
                        // required
                      />
                    </div>
                  </div>
                </div>
                <p>
                  Referee 2 <small style={{ color: "red" }}> (Required)</small>
                </p>

                <div className="row">
                  <div className="col-5">
                    <div className="form-inputs">
                      <input
                        type="text"
                        placeholder="Full Name"
                        name="ref2name"
                        className="form-control"
                        onChange={handleChange("ref2name")}
                        defaultValue={values.ref2name}
                        // className="left-inputs"
                        // required
                      />
                    </div>
                  </div>

                  <div className="col-2"></div>

                  <div className="col-5">
                    <div className="form-inputs">
                      <input
                        type="text"
                        placeholder="Description/Title"
                        name="ref2title"
                        className="form-control"
                        onChange={handleChange("ref2title")}
                        defaultValue={values.ref2title}
                        // className="right-inputs"
                        // required
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-5">
                    <div className="form-inputs">
                      <input
                        type="text"
                        placeholder="Email"
                        name="ref2email"
                        className="form-control"
                        onChange={handleChange("ref2email")}
                        defaultValue={values.ref2email}
                        // className="left-inputs"
                        // required
                      />
                    </div>
                  </div>

                  <div className="col-2"></div>

                  <div className="col-5">
                    <div className="form-inputs">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        name="ref2phone"
                        className="form-control"
                        onChange={handleChange("ref2phone")}
                        defaultValue={values.ref2phone}
                        // className="right-inputs"
                        // required
                      />
                    </div>
                  </div>
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
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SPReg4;
