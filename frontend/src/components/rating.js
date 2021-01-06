import React, { Component,  } from "react";
import "./style.css"
import ReactStars from "react-rating-stars-component";
import Banner from "./Banner";
import LogoWhite from "../images/LogoWhite.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";



// const rateSize = {
//     size: 30,
//     value: 2.5,
//     edit: true,
//     color:"#35d187",
// };

const FirstRate = {
    size: 40,
    value: 5,
    color: "#006712",
    activeColor: "#35d187",
    // value: 7.5,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    // halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" required />,

    // onChange: newValue => {
    //     console.log(`Example 2: new value is ${newValue}`);
    // }
};


export default class Rating extends Component {
    render() {
        return (
            <div>
                <Banner />


                <form className="rate">
                    <h4>Rate your Service.</h4>


                    <div className="star">


                        {/* <ReactStars {...rateSize} /> */}
                        {/* <h4></h4> */}
                        <ReactStars {...FirstRate} />


                    </div>




                    <div>
                        <h4>Comment.</h4>
                        <textarea
                            type="text"
                            className="texting"
                            name="comment"
                            // onChange={handleChange("comment")}
                            // defaultValue={values.comment}
                            required
                        />

                    </div>

                    <button type="submit" className="submiting">
                        <strong>SUBMIT</strong>
                    </button>
                    
<div>
<h4 id="extension">Extend Time?</h4>
<input
                      name=""
                      id="starttime"
                      type="time"
                      placeholder="Enter Starting time"
                  />  
</div>




                </form>

                <footer className="footer">
                    <div className="container pt-5 border-bottom">
                        <div className="row">
                            <div className="col-md-3 col-sm-12 mb-3 ">
                                <img
                                    src={LogoWhite}
                                    alt={"logo"}
                                    style={{ height: "50px" }}
                                />
                            </div>
                            <div className="col-md-9 col-sm-12">
                                <div className="col-md-3 col-sm-6 col-6 p-0 float-left mb-3">
                                    <h6 className="mb-4 font-weight-bold">About Us</h6>
                                </div>

                                <div className="col-md-3 col-sm-6 col-6 p-0 mb-3 float-left">
                                    <h6 className="mb-2 font-weight-bold">FAQ</h6>
                                </div>

                                <div className="col-md-3 col-sm-6 col-6 mb-3 p-0 float-left">
                                    <h6 className="mb-4 font-weight-bold">Contact Us</h6>
                                </div>

                                <div className="col-md-3 col-sm-6 col-6 mb-3 p-0 float-left">
                                    <h6 className="mb-4 font-weight-bold">Follow Us On</h6>
                                    <img
                                        src={facebook}
                                        alt={"facebook"}
                                        style={{ height: "40px" }}
                                    />
                                    <img
                                        src={twitter}
                                        alt={"twitter"}
                                        style={{ height: "40px" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        );
    }
}
