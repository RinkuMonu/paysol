import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import FAQInsurancePayment from "./FAQInsurancePayment";

const Insurance = () => {
  return (
    <>
      <Container  className="py-5">
        <Row> 
          {/* Left Side Content */}
          <Col md={6} className="text-center text-md-start">
            {/* <h6 className="text-primary">Trusted by over 167M customers</h6> */}
            <h2 className="fw-bold">
              Secure Pay: Your Convenient Insurance Payment Solution
            </h2>
            <p>
              Secure your peace of mind through easy and timely insurance
              payments, ensuring your financial protection remains intact.
            </p>
            {/* <Button variant="primary" className="me-2">
              Download App
            </Button>
            <Button variant="outline-primary">App Store</Button> */}
          </Col>

          
          <Col md={6}>
            <div
              className="p-4 rounded bg-white shadow"
              style={{ maxWidth: "400px", margin: "0 auto" }}
            >
              <h5 className="mb-4 text-center">
                Insurance Premium Payment Online
              </h5>
              <Form>
                <Form.Group className="mb-3" controlId="operator">
                  <Form.Label>Operator</Form.Label>
                  <Form.Select>
                    <option>Select Operator</option>
                    <option>Airtel</option>
                    <option>Jio</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="policynumber">
                  <Form.Label>POLICY NO</Form.Label>
                  <Form.Control type="text" placeholder="POLICY NO" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="dateOfBirth">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control type="date" placeholder="Date of Birth" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="mobileNumber">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control type="text" placeholder="Mobile Number" />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Confirm
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <FAQInsurancePayment/>
    </>
  );
};

export default Insurance;
