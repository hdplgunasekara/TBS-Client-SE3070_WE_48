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
import "../assets/style.css"

export default function Login() {
  return (
    <>
    <Header/>
    <MDBContainer fluid className="p-4">
      <h1>Log in as</h1>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard className="my-3" style={{ backgroundColor: "#EEEEEE" }}>
            <MDBCardBody className="p-5">
              <h2>Local User</h2>
              <br />

              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                id="form1"
                type="email"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form1"
                type="password"
              />

              <div className="d-flex justify-content-center mb-4">
                <a href="">Forgot password?</a>
              </div>

              <MDBBtn className="btn btn-info w-100 mb-4" size="md">
                sign in
              </MDBBtn>

              <div className="text-center">
                <p>OR</p>
                  <MDBBtn className="btn btn-info w-100 mb-4" size="md" href="/register">
                    sign up
                  </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol md="6">
          <MDBCard className="my-3" style={{ backgroundColor: "#EEEEEE" }}>
            <MDBCardBody className="p-5">
              <h2>Foreign User</h2>
              <br />

              <MDBRow>
                <MDBCol col="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="NIE Number"
                    id="form1"
                    type="text"
                  />
                </MDBCol>
              </MDBRow>

              <MDBBtn className="btn btn-info w-100 mb-4" size="md">
                Create a one day pass
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <Footer/>
    </>
  );
}
