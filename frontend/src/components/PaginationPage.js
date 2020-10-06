import React from "react";
import {
  MDBPagination,
  MDBPageItem,
  MDBPageNav,
  MDBCol,
  MDBRow
} from "mdbreact";
import "./style.css";

const PaginationPage = () => {
  return (
    <MDBRow>
      <MDBCol>
        <h4 className="title my-5 text-left" style={{marginLeft: 10 + 'em'}}>
          Sign Up by following the process to join <strong>Dasuns</strong> community of service providers
        </h4>
        <MDBPagination circle style={{marginLeft: 23 + 'em'}}>
          {/* <MDBPageItem disabled>
            <MDBPageNav className="page-link">
              <span>First</span>
            </MDBPageNav>
          </MDBPageItem> */}
          {/* <MDBPageItem disabled>
            <MDBPageNav className="page-link" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </MDBPageNav>
          </MDBPageItem> */}
          <MDBPageItem active>
            <MDBPageNav className="page-link">
              1 <span className="sr-only">(current)</span>
            </MDBPageNav>
            <span>Personal Info</span>
          </MDBPageItem>
          {/* <span>Personal Info</span> */}
          <MDBPageItem>
            <MDBPageNav className="page-link">2</MDBPageNav>
            <span>Eligibility</span>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav className="page-link">3</MDBPageNav>
            <span>Evidence of Expertise</span>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav className="page-link">4</MDBPageNav>
            <span>Referees</span>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav className="page-link">5</MDBPageNav>
            <span>Pricing & Availability</span>
          </MDBPageItem>
          {/* <MDBPageItem>
            <MDBPageNav className="page-link">
              &raquo;
            </MDBPageNav>
          </MDBPageItem> */}
          {/* <MDBPageItem>
            <MDBPageNav className="page-link">
              Last
            </MDBPageNav>
          </MDBPageItem> */}
        </MDBPagination>
      </MDBCol>
    </MDBRow>
  );
};

export default PaginationPage;
