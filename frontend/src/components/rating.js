import React, { Component, } from "react";
import "./style.css"
import ReactStars from "react-rating-stars-component";
import Banner from "./Banner";
import Footer from "./Footer";
import PropTypes from "prop-types";
// import { connect } from "react-redux";




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

const initialValues = {
    Rating: "",
    firstrate: "",
    extend: "",
    comment: "",
    
  };
  


export default class Rating extends Component {
    constructor(props) {
        super(props);
        this.state = {
          Rating: "",
          FirstRate: "",
          Extend: "",
          Comment: "",
          
        };
      }
    
      static propTypes = {
        addRating: PropTypes.func.isRequired,
       
      };
     
      onSubmit = (values, { setSubmitting }) => {
        this.props.addRating(values);
        this.setSubmitting = setSubmitting;
        
      };
    
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

                    <div className="extension">
                        <h4 id="extension">Extend Time?</h4>
                        <input
                            name=""
                            id="starttime"
                            type="time"
                            placeholder="Enter Starting time"
                        />
                        Hours.
                    </div>
                    <button type="submit" className="extending">
                        <strong>EXTEND</strong>
                    </button>







                </form>

                
                <Footer />
            </div>

        );
    }
}
// export default connect(null, { addRating})(Rating);