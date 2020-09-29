import React, { Component } from "react";
import Logo from "../images/Logo.png";
import { Link } from "react-router-dom";
import "./style.css";

export class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <img src={Logo} alt={"logo"} />
          </div>
          <div className="col-2">
            <span className="nav-item">
              <br />
              <br />
              <Link to="/signup" className="nav-link text-dark">
                <strong className="heading3">Signup</strong>
              </Link>
            </span>
          </div>
          <div className="col-2">
            <span className="nav-item">
              <br />
              <br />
              <Link to="/login" className="nav-link text-dark">
                <strong className="heading3">Login</strong>
              </Link>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
