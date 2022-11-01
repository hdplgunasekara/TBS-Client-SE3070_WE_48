import React from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBIcon
  }
  from 'mdb-react-ui-kit';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Register() {
  return (
    <>
    <Header/>
    <br/>
      <br/>
    <MDBContainer fluid className='p-4'>

      <MDBRow>
      <MDBCol md='3'></MDBCol>

        <MDBCol md='6'>

          <MDBCard className='my-5' style={{backgroundColor: "#EEEEEE" }}>
            <MDBCardBody className='p-5'>
            <h2>Register</h2>
            <br/>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text'/>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Address' id='form1' type='text'/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Phone Number' id='form1' type='text'/>
                </MDBCol>
              </MDBRow>

              <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <MDBBtn className='btn btn-info w-100 mb-4' size='md'>sign up</MDBBtn>

              <div className="text-center">

                <div className="d-flex justify-content-center mb-4">
                Already have an account?<a href="/">Login</a>
              </div>

              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    <Footer/>
    </>
  );
}
