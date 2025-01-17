import React from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import FAQeChallanPayments from './FAQeChallanPayments';



const TrafficChallan = () => {
  return (
    <>
        <Container className="py-5">
        <Row>
          {/* Left Side Content */}
          <Col md={6} className="text-center text-md-start">
            {/* <h6 className="text-primary">Trusted by over 167M customers</h6> */}
            <h2 className="fw-bold">
            Hassle-free Traffic Ticket Settlement
            </h2>
            <p>
            Navigate the fines and penalties seamlessly with online traffic challan payment.
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
              <h5 className="mb-4 text-center">Online Traffic Challan Payment</h5>
              <Form>
                <Form.Group className="mb-3" controlId="operator">
                  <Form.Label>Operator</Form.Label>
                  <Form.Select>
                    <option>Asianet Digital</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="subscriberCode">
                  <Form.Label>Subscriber Code</Form.Label>
                  <Form.Control type="text" placeholder="Subscriber Code" />
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
      <FAQeChallanPayments/>
    </>
  )
}

export default TrafficChallan