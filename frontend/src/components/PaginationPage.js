import React, { Component } from "react";
// import Logo from "../images/Logo.png";
// import { Link } from "react-router-dom";
import "./style.css";

export class PaginationPage extends Component {
  render() {
    const mystyle = {
      color: "#fff",
      backgroundColor: "#006734",
      borderRadius: "6px",
      fontFamily: "Montserrat"
    };
    const mystyle1 = {
      color: "#fff",
      backgroundColor: "#006712",
      borderRadius: "50px",
      fontFamily: "Montserrat"
    };

    return (
      <div className="vendor_registration_tabs_main big_gray text-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2
                class="section_title_sm"
                style={{ marginTop: "25px" }}
              >
                Sign Up by following the process to join <strong>Dasuns</strong> community of service providers
              </h2>
              <ul className="list-inline">
                <li id="li_step_1" className="progres_bar active">
                  <a className="pagn" href="">
                    <div className="tab_number">
                      <span>1</span>
                    </div>
                    <h5>Personal Details</h5>
                  </a>
                </li>

                <li id="li_step_2" className="progres_bar">
                  <a className="pagn" href="">
                    <div className="tab_number">
                      <span>2</span>
                    </div>
                    <h5>Eligibility</h5>
                  </a>
                </li>

                <li id="li_step_3" className="progres_bar">
                  <a className="pagn" href="">
                    <div className="tab_number">
                      <span>3</span>
                    </div>
                    <h5>Evidence of Expertise</h5>
                  </a>
                </li>

                <li id="li_step_4" className="progres_bar">
                  <a className="pagn" href="">
                    <div className="tab_number">
                      <span>4</span>
                    </div>
                    <h5>References</h5>
                  </a>
                </li>

                <li id="li_step_5" className="progres_bar">
                  <a className="pagn" href="">
                    <div className="tab_number">
                      <span>5</span>
                    </div>
                    <h5>Pricing & Availability</h5>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PaginationPage;
