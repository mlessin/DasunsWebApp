import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  };
  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.username)
        alert.error(`Username: ${error.msg.username.join()}`);
      if (error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
      if (error.msg.password)
        alert.error(`Password: ${error.msg.password.join()}`);
      if (error.msg.password2)
        alert.error(`Confirm Password: ${error.msg.password2.join()}`);
      if (error.msg.non_field_errors)
        alert.error(error.msg.non_field_errors.join());
      if (error.msg.detail) alert.error(error.msg.detail.join());
      if (error.msg.username) alert.error(error.msg.username.join());
      if (error.msg.error) alert.error(error.msg.error.join());
    }

    if (message !== prevProps.message) {
      if (message.login) alert.success(message.login);
      if (message.loginfail) alert.error(message.loginfail);
      if (message.register) alert.success(message.register);
      if (message.registerfail) alert.error(message.registerfail);
      if (message.logout) alert.success(message.logout);
      if (message.passwordNotMatch) alert.error(message.passwordNotMatch);
      if (message.non_field_errors) alert.error(message.non_field_errors);
      if (message.username) alert.error(message.username);
      if (message.email) alert.error(message.email);
      if (message.password) alert.error(message.password);
      if (message.addBooking) alert.success(message.addBooking);
      if (message.updateBooking) alert.success(message.updateBooking);
      if (message.deleteBooking) alert.success(message.deleteBooking);
      
    }
  }
  render() {
    return <Fragment />;
  }
}
const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));
