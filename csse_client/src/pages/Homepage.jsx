import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
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

export default function Homepage() {
  return (
    <div>
      <Header />
      <br/>
      <br/>
      <br/>
      <MDBContainer fluid className="p-4">
        <MDBBtn href="/qr" className="btn btn-info btn-lg">
          QR
        </MDBBtn>
        <br />
        <br />
        <MDBBtn href="/travhist" className="btn btn-info btn-lg">
          Travel History
        </MDBBtn>
        <br />
        <br />
        <MDBBtn href="/credbal" className="btn btn-info btn-lg">
          Credit Balance
        </MDBBtn>
        <br />
        <br />
        <MDBBtn href="/busloc" className="btn btn-info btn-lg">
          Bus Location
        </MDBBtn>
      </MDBContainer>
      <Footer />
    </div>
  );
}
