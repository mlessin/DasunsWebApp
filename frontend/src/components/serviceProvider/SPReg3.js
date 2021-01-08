import React, { Component } from "react";
export class SPReg3 extends Component {
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
                    onChange={handleChange("qualification")}
                    defaultValue={values.qualification}
                    // required
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
                    name="portifolio"
                    onChange={handleChange("portifolio")}
                    defaultValue={values.portifolio}
                  />
                </div>
                <p>Please leave it blank if you have no online portfolio</p>

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

export default SPReg3;
