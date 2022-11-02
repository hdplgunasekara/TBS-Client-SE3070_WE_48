import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
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
  const [balance, setBalance] = useState("");
  useEffect(()=>{ 
    const getUser = async()=>{  
    const res=  await axios.get(
        `http://127.0.0.1:8090/user/${localStorage.getItem('id')}` );
      setBalance(res.data.data.credit_amount);
    };
    getUser();
   
    },[]);



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
                <td>={balance}.00 LKR</td>
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
