import React from "react";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBIcon,
  } from "mdb-react-ui-kit";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Viewtravelhistmodal from "../components/modals/Viewtravelhistmodal";
import Reviewmodal from "../components/modals/Reviewmodal";

export default function TravelHistory() {
  return (
    <div>
      <Header />
      <br/>
      <br/>
      <br/>
      <MDBContainer fluid className="p-5">
      <h2>Travel History</h2>
      <br/>
      <table class="table">
        <thead class="table-dark">
          <tr>
            <td>From</td>
            <td>To</td>
            <td>Date & Time</td>
            <td>Price</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Colombo</td>
            <td>Moratuwa</td>
            <td>20-08-2022</td>
            <td>100</td>
            <td><Reviewmodal/><Viewtravelhistmodal/></td>
          </tr>
          <tr>
            <td>Colombo</td>
            <td>Moratuwa</td>
            <td>20-08-2022</td>
            <td>100</td>
            <td><Reviewmodal/><Viewtravelhistmodal/></td>
          </tr>
          <tr>
            <td>Colombo</td>
            <td>Moratuwa</td>
            <td>20-08-2022</td>
            <td>100</td>
            <td><Reviewmodal/><Viewtravelhistmodal/></td>
          </tr>
        </tbody>
      </table>
      </MDBContainer>
      <Footer />
    </div>
  );
}
