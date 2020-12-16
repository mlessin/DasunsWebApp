import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "../style.css";
import Logo from "../../images/Logo.png";
// import { Button} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

export class SignupModal extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <Modal
          {...this.props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <div className>
              <img src={Logo} alt={"logo"} style={{ height: "50px" }} />
            </div>
          </Modal.Header>
          <Modal.Body>
            <div className="main-card-signup">
              <div className="card" id="signup-card">
                <div className="card-body">
                  <form onSubmit={this.onSubmit}>
                    <h3 className="heading3">Signup</h3>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        name="fullname"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                        name="username"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Create Password"
                        name="password"
                        required
                      />
                    </div>
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
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-success btn-block"
                        onClick={() => history.push("/splist")}
                      >
                        SIGNUP
                      </button>
                    </div>
                    {/* <p>
                      Already have an account?
                      <Link to="/login">Login</Link>
                    </p> */}
                  </form>
                </div>
              </div>
            </div>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide}>
              Close
            </Button>
          </Modal.Footer> */}
        </Modal>
      </div>
    );
  }
}

export default SignupModal;
