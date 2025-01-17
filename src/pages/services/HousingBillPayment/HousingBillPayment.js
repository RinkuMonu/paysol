import React from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import FAQHousingBillPayments from './FAQHousingBillPayments';



const HousingBillPayment = () => {
  return (
    <>
         <Container className="py-5">
        <Row>
          {/* Left Side Content */}
          <Col md={6} className="text-center text-md-start">
            {/* <h6 className="text-primary">Trusted by over 167M customers</h6> */}
            <h2 className="fw-bold">
            Simplify Your Housing Bill Payments
            </h2>
            <p>
            Enhance your living experience by managing housing bills with ease, ensuring comfort and convenience.
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
              <h5 className="mb-4 text-center">Online Housing Society Electricity Bill Payment</h5>
              <Form>
                <Form.Group className="mb-3" controlId="city">
                  <Form.Label>City</Form.Label>
                  <Form.Select>
                    <option>City</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="societyName">
                  <Form.Label>Society Name</Form.Label>
                  <Form.Select>
                    <option>Society Name</option>
                  </Form.Select>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="serviceType">
                  <Form.Label>Service Type</Form.Label>
                  <Form.Select>
                    <option>service Type</option>
                  </Form.Select>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="subscriberCode">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control type="text" placeholder="₹ Amount" />
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
      <FAQHousingBillPayments/>
    </>
  )
}

export default HousingBillPayment;