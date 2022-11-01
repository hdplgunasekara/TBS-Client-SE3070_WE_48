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
import Topupcreditmodal from "../components/modals/Topupcreditmodal";

export default function CreditBalance() {
  return (
    <div>
      <Header />
      <br/>
      <br/>
      <br/>
      <MDBContainer fluid className="p-5">
        <h2>Credit Balance</h2>
        <hr />
        <br />
        <div class="row justify-content-center">
          <div class="col-auto">
            <table class="" style={{ fontSize: "25px", textAlign: "left" }}>
              <tr>
                <td>Account Credit Balance</td>
                <td>= $ 99</td>
              </tr>
              <tr>
                <td>Account Fine</td>
                <td>= $ 2</td>
              </tr>
            </table>
          </div>
        </div>
        <br />
        <hr />
        <div className="row">
          <div className="col">
            <Topupcreditmodal />
          </div>
        </div>
      </MDBContainer>
      <Footer />
    </div>
  );
}
