import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Logo from "../../images/Logo.png";
import "./components/style.css";
import { Link } from "react-router-dom";


export class bookingForm extends Component {
    state = {
        PaymentType: "",
        MeetingTime: "",
        
    };



    render() {
        return (
            <div class="main">
                <div class="card" id="booking-card">
                    <div class="card-body">
                        <form>
                            <div>
                                <div>
                                    <img src={Logo} alt={"logo"} />
                                </div>
                            </div>

                            <h3 className="heading4">Book Service Provider.</h3>
                            <div className="form-group">
                                <h5>Payment type.</h5>
                                <input
                                    type="radio"
                                    value="Per Hour"
                                    required

                                />
                                Per Hour
                                <input
                                    type="radio"
                                    value="Per Visit"
                                    required
                                />
                                Per Visit

                            </div>

                            <div className="form-group">
                                <h5>Meeting Point:</h5>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter location"
                                    required
                                />


                            </div>
                            <div className="form-group">
                                <h5>Meeting Date:</h5>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter location"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <h5>Meeting Time:</h5>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Starting time"
                                    required
                                />
                                Start Time:
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Ending time"
                                    required
                                />
                                End Time:

                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn book">
                                    Book Now
                                     </button>
                            </div>
                        </form>

                    </div>

                </div>
            </div>


        );


    }
}
export default bookingForm;