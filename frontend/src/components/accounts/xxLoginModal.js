import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "../style.css";
import Logo from "../../images/Logo.png";
import Modal from "react-bootstrap/Modal";

export class LoginModal extends Component {
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
            {/* <Modal.Title id="contained-modal-title-vcenter">Signup</Modal.Title> */}
            <div className>
              <img src={Logo} alt={"logo"} style={{ height: "50px" }} />
            </div>
          </Modal.Header>
          <Modal.Body>
            <div className="main-card-login">
              <div className="card" id="login-card">
                <div className="card-body">
                  <form onSubmit={this.onSubmit}>
                    <h3 className="heading3">Login</h3>
                    <div className="form-group">
                      <input
                        type="phone"
                        className="form-control"
                        placeholder="Phone number"
                        name="username"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-success btn-block"
                      onClick={() => history.push("/splist")}
                    >
                      Submit
                    </button>
                    <p className="forgot-password text-center">
                      Forgot Password?
                      <a className="password-reset" href="#">
                        Reset Password
                      </a>
                    </p>
                    {/* <p>
                      Don't have an account?
                      <Link to="/signup">Signup</Link>
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

export default LoginModal;
