import React from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Col, Row, Form } from "react-bootstrap";
import { useState } from "react";

export default function Topupcreditmodal() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn btn-info btn-lg" onClick={handleShow}>
        Topup Credit
      </Button>

      <Modal show={show} size="lg" centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">TopUp Credit</Modal.Title>
        </Modal.Header>

        <Form>
          <Modal.Body>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Col sm={1}>
                <Form.Label>Card Type:</Form.Label>
              </Col>
              <Col sm={2}>
              <select
                  className="Col-3"
                  aria-label="Default select example"
                  style={{ height: "35px"}}
                >
                  <option value="Visa">Visa</option>
                  <option value="Mastercard">Mastercard</option>
                </select>
              </Col>
              <Col sm={2}>
                <Form.Label>Card Number:</Form.Label>
              </Col>
              <Col sm={4}>
                <Form.Control
                  type="text"
                />
              </Col>
              <Col sm={1}>
                <Form.Label>CVV:</Form.Label>
              </Col>
              <Col sm={2}>
                <Form.Control
                  type="text"
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Name:
              </Form.Label>
              <Col sm="4">
              <Form.Control
                  type="text"
                />
              </Col>
              <Form.Label column sm="2">
                Amount:
              </Form.Label>
              <Col sm="3">
              <Form.Control
                  type="text"
                />
              </Col>
            </Form.Group>
            ** For cash topup please visit a Pay Station in the nearby bus station. 
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" onClick={handleClose}>
              topup
            </Button>
            <Button variant="danger" onClick={handleClose}>
              Exit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
