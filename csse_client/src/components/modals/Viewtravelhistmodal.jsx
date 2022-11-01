import React from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Col, Row, Form } from "react-bootstrap";
import { useState } from "react";

export default function Viewtravelhistmodal() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
    <>
    <Button className="btn btn-success btn-sm" onClick={handleShow}>
      View
    </Button>

    <Modal show={show} size="lg" centered>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Trip Information</Modal.Title>
      </Modal.Header>
        <Modal.Body>
            <table className='table table-bordered border-primary'>
              <tr>
                <td><b>From</b></td>
                <td>Colombo</td>
              </tr>
              <tr>
                <td><b>To</b></td>
                <td>Galle</td>
              </tr>
              <tr>
                <td><b>Date</b></td>
                <td>20-08-2022</td>
              </tr>
              <tr>
                <td><b>Get In Time</b></td>
                <td>8.30 am</td>
              </tr>
              <tr>
                <td><b>Get Out Time</b></td>
                <td>9.15 am</td>
              </tr>
              <tr>
                <td><b>Price</b></td>
                <td>100</td>
              </tr>
              <tr>
                <td><b>Bus Number</b></td>
                <td>NC-7678</td>
              </tr>
              <tr>
                <td><b>Review</b></td>
                <td>Good</td>
              </tr>
            </table>     
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="primary" type="submit" onClick={handleClose}>
            topup
          </Button> */}
          <Button variant="danger" onClick={handleClose}>
            Exit
          </Button>
        </Modal.Footer>
    </Modal>
  </>
  )
}
