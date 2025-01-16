import React from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import FAQElectricityBill from './FAQElectricityBill';




const ElectricityBillPayment = () => {
  return (
    <>
         <Container className="py-5">
        <Row>
          {/* Left Side Content */}
          <Col md={6} className="text-center text-md-start">
            
            <h2 className="fw-bold">Ingenious Electricity Bill Settlement</h2>
            <p>
            Empower your life with the efficient management of electricity bills, ensuring uninterrupted power supply for your world of possibilities.
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
              <h5 className="mb-4 text-center">Electricity Bill Payment</h5>
              <Form>
            

                <Form.Group className="mb-3" controlId="operator">
                  <Form.Label>Operator</Form.Label>
                  <Form.Select>
                    <option>Select Operator</option>
                    <option>Airtel</option>
                    <option>Jio</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="consumernumber">
                  <Form.Label>Consumer Number</Form.Label>
                  <Form.Control type="text" placeholder="consumer Number" />
                </Form.Group>
                
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
      <FAQElectricityBill/>
    </>
  )
}

export default ElectricityBillPayment;