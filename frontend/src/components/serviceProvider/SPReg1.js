import React, { Component } from "react";

// import { debugContextDevtool } from 'react-context-devtool';


export class SPReg1 extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
        <div className="main-service">
        <div className="card" id="signup-service-card">
          <div className="card-body" id="cardBody">
            <form>
              <h3>
                <b>Personal Details</b>
              </h3>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name (Required)"
                  name="fullname"
                  onChange={handleChange("fullname")}
                  defaultValue={values.fullname}
                //   required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number(Required)"
                  name="phone"
                  onChange={handleChange("phone")}
                  defaultValue={values.phone}
                  // required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email(Required)"
                  name="email"
                  onChange={handleChange("email")}
                  defaultValue={values.email}
                  // required
                />
              </div>
              {/* <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password(Required)"
                  name="password"
                  // required
                />
              </div> */}
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="NIN(Required)"
                  name="nin"
                  onChange={handleChange("nin")}
                  defaultValue={values.nin}
                  // required
                />
              </div>
              <div className="form-group">
                <input
                  type="date"
                  className="form-control"
                  placeholder="DOB(Required)"
                  name="dob"
                  onChange={handleChange("dob")}
                  defaultValue={values.dob}
                  // required
                />
              </div>
              <div className="row">
                  <div className="col-12 ">
                    <div className="form-group">
                      <select className="form-control" 
                      name="gender"
                      onChange={handleChange("gender")}
                      defaultValue={values.gender}>
                        <option value="Default">Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                  </div>
                </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Physical Address(Required)"
                  name="phyadd"
                  onChange={handleChange("phyadd")}
                  defaultValue={values.phyadd}
                  // required
                />
              </div>
              <div className="form-group">
                <button
                  className="btn btn-success btn-block"
                  onClick={this.continue}
                >
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

export default SPReg1;
