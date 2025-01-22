import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import FAQHousingBillPayments from './FAQHousingBillPayments';

const HousingBillPayment = () => {
  const [formData, setFormData] = useState({
    city: "",
    societyName: "",
    serviceType: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const isFormValid = formData.city && formData.societyName && formData.serviceType && formData.amount.trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      console.log("Form submitted:", formData);
      // Add form submission logic here
    }
  };

  return (
    <>
      <Container className="py-5">
        <Row>
          {/* Left Side Content */}
          <Col md={6} className="text-center text-md-start">
            <h2 className="fw-bold">Simplify Your Housing Bill Payments</h2>
            <p>
              Enhance your living experience by managing housing bills with ease, ensuring comfort and convenience.
            </p>
          </Col>

          {/* Right Side Form */}
          <Col md={6}>
            <div
              className="p-4 rounded bg-white shadow"
              style={{ maxWidth: "400px", margin: "0 auto" }}
            >
              <h5 className="mb-4 text-center">Online Housing Society Electricity Bill Payment</h5>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="city">
                  <Form.Label>City</Form.Label>
                  <Form.Select id="city" value={formData.city} onChange={handleChange}>
                    <option value="">Select City</option>
                    <option value="City1">City 1</option>
                    <option value="City2">City 2</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="societyName">
                  <Form.Label>Society Name</Form.Label>
                  <Form.Select id="societyName" value={formData.societyName} onChange={handleChange}>
                    <option value="">Select Society</option>
                    <option value="Society1">Society 1</option>
                    <option value="Society2">Society 2</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="serviceType">
                  <Form.Label>Service Type</Form.Label>
                  <Form.Select id="serviceType" value={formData.serviceType} onChange={handleChange}>
                    <option value="">Select Service Type</option>
                    <option value="Electricity">Electricity</option>
                    <option value="Water">Water</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="amount">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="₹ Amount"
                    value={formData.amount}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100"
                  style={{ backgroundColor: '#664A86', color: 'white' }}
                  disabled={!isFormValid} // Disable the button if the form is not valid
                >
                  Confirm
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <FAQHousingBillPayments />
    </>
  );
};

export default HousingBillPayment;
