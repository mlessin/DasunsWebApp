import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
 

export class ServiceRate extends Component{
     render(
        
     ){
         return(
             <form onSubmit={this.onSubmit}>
                 <h3>Rate your service.</h3>

                 <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
      />




             </form>
         );
     }
 }