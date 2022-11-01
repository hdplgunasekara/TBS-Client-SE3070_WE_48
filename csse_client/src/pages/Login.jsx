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

export default function Login() {
  return (
    <MDBContainer fluid className="p-4">
      <br />
      <h1>Log in as</h1>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard className="my-3" style={{ backgroundColor: "#e6e6e6" }}>
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

              <MDBBtn className="w-100 mb-4" size="md">
                sign in
              </MDBBtn>

              <div className="text-center">
                <p>OR</p>
                <a href="/register">
                  <MDBBtn className="w-100 mb-4" size="md">
                    sign up
                  </MDBBtn>
                </a>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol md="6">
          <MDBCard className="my-3" style={{ backgroundColor: "#e6e6e6" }}>
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

              <MDBBtn className="w-100 mb-4" size="md">
                Create a one day pass
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
