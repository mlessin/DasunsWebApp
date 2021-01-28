import React, { Component } from "react";
import Banner from "./Banner";
import Landing from "./Landing";
import Dialog from "@material-ui/core/Dialog";
import Modal from "react-bootstrap/Modal";

export class MessageModal extends Component {
  render() {
    return (
      <div>
        <Modal
          {...this.props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <div>
              <h1 style={{ margin: "20px" }}>Sorry!</h1>
            </div>
          </Modal.Header>
          <Modal.Body>
            <h3 style={{ margin: "20px" }}>
              Please Signup or Login to use this Service :-)
            </h3>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default MessageModal;
