import React, { Component } from "react";
// import "./styles.css";
import ReactStars from "react-rating-stars-component";

const rateSize = {
    size: 30,
    value: 2.5,
    edit: false
};

const FirstRate = {
    size: 50,
    count: 10,
    color: "black",
    activeColor: "red",
    value: 7.5,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    // halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: newValue => {
        console.log(`Example 2: new value is ${newValue}`);
    }
};


export class ServiceRate extends Component {
    render() {
        return (
            <form>
                <h1>Rate your Service.</h1>


            <div className="">
                
                
                <ReactStars {...rateSize} />
                <h4></h4>
                <ReactStars {...FirstRate} />
                
            </div>

            <div>
                <h5>Feedback/Comment/</h5>
                <input
                type="text"
                />
                
                



            </div>
            </form>

        );
    }
}
