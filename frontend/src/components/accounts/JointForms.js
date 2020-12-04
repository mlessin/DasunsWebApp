import React, { Component } from "react";

export default class JointForms extends Component {
  render() {
    const { history } = this.props;
    const [login, setlogin] = useState(false);
    return (
      <div>
        <Modal
          {...this.props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          {/* <Modal.Header closeButton>
            <div className>
            <img src={Logo} alt={"logo"} style={{ height: "50px" }} />
            </div>
            <div>

            </div>
          </Modal.Header> */}
          <Modal.Header>
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="#">
                <a href="#">
                  <img src={Logo} alt={"logo"} style={{ height: "50px" }} />
                </a>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Nav className="mr-right" style={{ marginLeft: "10em" }}>
                <Nav.Link href="# ">Sign In</Nav.Link>
                <Nav.Link href="# ">Sign Up</Nav.Link>
              </Nav>
            </Navbar>
          </Modal.Header>

          <Modal.Body>
            {login ? (
              <div class="main">
                <div class="card">
                  <div class="card-body">
                    <form>
                      {/* <div>
                  <div>
                    <img src={Logo} alt={"logo"} />
                  </div>
                </div>
                <h3 className="heading3">Login</h3> */}
                      <div className="form-group">
                        <input
                          type="phone"
                          className="form-control"
                          placeholder="Phone number"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-success btn-block"
                      >
                        Submit
                      </button>
                      <p className="forgot-password text-center">
                        Forgot Password? <a href="#">Reset Password</a>
                      </p>
                      <p>
                        Don't have an account?
                        <Link to="/signup">Signup</Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            ) : (
              <div className="main">
                <div className="card" id="signup-card">
                  <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                      {/* <div>
                <div className="dasuns-logo">
                  <img src={Logo} alt={"logo"} />
                </div>
              </div>
              <h3 className="heading3">Signup</h3> */}
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Full Name"
                          name="fullname"
                          // onChange={this.onChange}
                          // value={fullname}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          name="email"
                          // onChange={this.onChange}
                          // value={email}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone Number"
                          name="phonenumber"
                          // onChange={this.onChange}
                          // value={phonenumber}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Create Password"
                          name="password"
                          // onChange={this.onChange}
                          // value={password}
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
                        <label
                          class="custom-control-label"
                          for="customSwitches"
                        >
                          I agree to the terms and conditions set by Dasuns
                        </label>
                      </div>
                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-success btn-block"
                        >
                          SIGNUP
                        </button>
                      </div>

                      <p>
                        Already have an account?
                        <Link to="/login">Login</Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
