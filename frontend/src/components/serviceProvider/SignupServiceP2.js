import React from "react";
// import "../style.css";

export const SignupServiceP2 = (
  <div className="main-service">
    <div className="card" id="signup-service-card">
      <div className="card-body" id="cardBody">
        <form>
          <div className="container">
            <h4>
              <b>Eligibility</b>
            </h4>
            <p>
              As a Dasuns Professional Service Provider, Make sure you meet the
              criteria by selecting the options which apply to you below
              <small style={{ color: "red" }}> (Required)</small>
            </p>
            <div className="checkboxes">
              <div class="">
                <input type="checkbox" value="sunday" name="sunday" id="" />
                <label class="" for="">
                  At least 1 year of experience in your profession
                </label>
              </div>
              <div class="">
                <input type="checkbox" value="monday" name="monday" id="" />
                <label class="" for="">
                  You're not a middle man
                </label>
              </div>
              <div class="">
                <input type="checkbox" value="monday" name="monday" id="" />
                <label class="" for="">
                  You have the skillset to give professional service
                </label>
              </div>
              <div class="">
                <input type="checkbox" value="monday" name="monday" id="" />
                <label class="" for="">
                  You have a phone / Computer and active Phone Number
                </label>
              </div>
            </div>
            <div>
              <p>
                Only allowed to proceed to the other step by checking all
                fields. If you do not have the above eligibility requirements,
                We can not proceed to the next step. You can always signup later
                when you meet all the above eligibility requirements
              </p>
            </div>
            <div className="row">
              <div className="col-5">
                <div id="btn-group">
                  <button type="submit" id="btn-default">
                    <strong>BACK TO PREVIOUS</strong>
                  </button>
                </div>
              </div>

              <div className="col-2"></div>

              <div className="col-5">
                <div id="btn-group">
                  <button type="submit" id="btn-success">
                    <strong>SAVE & CONTINUE</strong>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
);

// import React, { Component } from "react";
// import "../style.css";
// import PaginationPage from "../PaginationPage";
// import Banner from "../Banner";

// export default class SignupServiceP2 extends Component {
//   render() {
//     const { history } = this.props;
//     return (
//       <div>
//         <Banner />
//         <div className="main-service">
//           <PaginationPage />
//           <div className="card" id="signup-service-card">
//             <div className="card-body" id="cardBody">
//               <form onSubmit={this.onSubmit}>
//                 <div className="container">
//                   <h4>
//                     <b>Eligibility</b>
//                   </h4>
//                   <p>
//                     As a Dasuns Professional Service Provider, Make sure you
//                     meet the criteria by selecting the options which apply to
//                     you below
//                     <small style={{ color: "red" }}> (Required)</small>
//                   </p>
//                   <div className="checkboxes">
//                     <div class="">
//                       <input
//                         type="checkbox"
//                         value="sunday"
//                         name="sunday"
//                         id=""
//                       />
//                       <label class="" for="">
//                         At least 1 year of experience in your profession
//                       </label>
//                     </div>
//                     <div class="">
//                       <input
//                         type="checkbox"
//                         value="monday"
//                         name="monday"
//                         id=""
//                       />
//                       <label class="" for="">
//                         You're not a middle man
//                       </label>
//                     </div>
//                     <div class="">
//                       <input
//                         type="checkbox"
//                         value="monday"
//                         name="monday"
//                         id=""
//                       />
//                       <label class="" for="">
//                         You have the skillset to give professional service
//                       </label>
//                     </div>
//                     <div class="">
//                       <input
//                         type="checkbox"
//                         value="monday"
//                         name="monday"
//                         id=""
//                       />
//                       <label class="" for="">
//                         You have a phone / Computer and active Phone Number
//                       </label>
//                     </div>
//                   </div>
//                   <div>
//                     <p>
//                       Only allowed to proceed to the other step by checking all
//                       fields. If you do not have the above eligibility
//                       requirements, We can not proceed to the next step. You can
//                       always signup later when you meet all the above
//                       eligibility requirements
//                     </p>
//                   </div>
//                   <div className="row">
//                     <div className="col-5">
//                       <div id="btn-group">
//                         <button
//                           type="submit"
//                           id="btn-default"
//                           onClick={() => history.push("/signupserviceprov")}
//                         >
//                           <strong>BACK TO PREVIOUS</strong>
//                         </button>
//                       </div>
//                     </div>

//                     <div className="col-2"></div>

//                     <div className="col-5">
//                       <div id="btn-group">
//                         <button
//                           type="submit"
//                           id="btn-success"
//                           onClick={() => history.push("/signupserviceprov3")}
//                         >
//                           <strong>SAVE & CONTINUE</strong>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
