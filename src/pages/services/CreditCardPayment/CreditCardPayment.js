import React from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import FAQCreditCardPayment from './FAQCreditCardBill';


const CreditCardPayment = () => {
  return (
   <>
     <Container className="py-5">
        <Row>
        
          <Col md={6} className="text-center text-md-start">
            {/* <h6 className="text-primary">Trusted by over 167M customers</h6> */}
            <h2 className="fw-bold">Streamlined Credit Card Payments</h2>
            <p>
            Effortlessly manage your finances by settling credit card bills with ease, ensuring financial peace of mind.
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
              <h5 className="mb-4 text-center">Credit Card Payment</h5>
              <Form>
                <Form.Group className="mb-3" controlId="creditCard">
                  <Form.Label>Credit card Number</Form.Label>
                  <Form.Control type="text" placeholder="Mobile Number" />
                </Form.Group>

                

                

                <Form.Group className="mb-3" controlId="amount">
                  <Form.Label>Bill Amount</Form.Label>
                  <Form.Control type="text" placeholder="₹ Bill Amount" />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Confirm
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <FAQCreditCardPayment/>
   </>
  )
}

export default CreditCardPayment;