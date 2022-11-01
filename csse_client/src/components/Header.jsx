import { MDBBtn } from 'mdb-react-ui-kit'
import React from 'react'
import "../assets/style.css"

export default function Header() {
  return (
    <div>
      
<nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:'#204051'}}>
  
  <div className="container-fluid">
    
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     
      <a className="navbar-brand mt-2 mt-lg-0" href="#">
        <img
          src=""
          height="15"
          alt="BOD LOGO"
          loading="lazy"
        />
      </a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Time Table</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">FAQs</a>
        </li>
      </ul>
      <MDBBtn href='/register' className='btn-secondary me-2'>Register</MDBBtn>
      <MDBBtn href='/' className='btn-secondary'>Login</MDBBtn>
    </div>
  </div>
</nav>
    </div>
  )
}
