import React from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import FAQLoanEMIPayments from './FAQLoanEMIPayments';



const Emi = () => {
  return (
    <>
         <Container className="py-5">
        <Row>
          {/* Left Side Content */}
          <Col md={6} className="text-center text-md-start">
            {/* <h6 className="text-primary">Trusted by over 167M customers</h6> */}
            <h2 className="fw-bold">
            Seamless online EMI payments.
            </h2>
            <p>
            Streamline your financial commitments with effortless online loan EMI payments.
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
              <h5 className="mb-4 text-center">Loan EMI Payment Online</h5>
              <Form>
                <Form.Group className="mb-3" controlId="operator">
                  <Form.Label>Operator</Form.Label>
                  <Form.Select>
                    <option>Asianet Digital</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="applicationId">
                  <Form.Label>Application ID</Form.Label>
                  <Form.Control type="text" placeholder="Application ID" />
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
      <FAQLoanEMIPayments/>
    </>
  )
}

export default Emi;