import React from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import FAQLpgGasBooking from './FAQLpgGasBooking';




const LpgBooking = () => {
  return (
    <>
            <Container className="py-5">
        <Row>
          {/* Left Side Content */}
          <Col md={6} className="text-center text-md-start">
            {/* <h6 className="text-primary">Trusted by over 167M customers</h6> */}
            <h2 className="fw-bold">
            Quick Gas Booking Service
            </h2>
            <p>
            Effortlessly secure your fuel supply with swift and convenient gas booking services, ensuring uninterrupted energy for your needs.
            </p>
            {/* <Button variant="primary" className="me-2">
              Download App
            </Button>
            <Button variant="outline-primary">App Store</Button> */}
          </Col>

          {/* Right Side Form */}
          <Col md={6}>
            <div
              className="p-4 rounded bg-white shadow"
              style={{ maxWidth: "400px", margin: "0 auto" }}
            >
              <h5 className="mb-4 text-center">Gas Booking Online</h5>
              <Form>
                <Form.Group className="mb-3" controlId="operator">
                  <Form.Label>Operator</Form.Label>
                  <Form.Select>
                    <option>Bharat Gas(BPCL)</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="registeredContactNumber">
                  <Form.Label>Registered Contact Number</Form.Label>
                  <Form.Control type="text" placeholder="Registered Contact Number" />
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="circle">
                  <Form.Label>Circle</Form.Label>
                  <Form.Select>
                    <option>Select Circle</option>
                    <option>Mumbai</option>
                    <option>Delhi</option>
                  </Form.Select>
                </Form.Group> */}

                {/* <Form.Group className="mb-3" controlId="amount">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control type="text" placeholder="₹ Amount" />
                </Form.Group> */}

                <Button variant="primary" type="submit" className="w-100">
                  Confirm
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <FAQLpgGasBooking/>
    </>
  )
}

export default LpgBooking;