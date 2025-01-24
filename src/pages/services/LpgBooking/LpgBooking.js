import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import FAQLpgGasBooking from './FAQLpgGasBooking';

const LpgBooking = () => {
  const [formData, setFormData] = useState({
    operator: "",
    registeredContactNumber: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const isFormValid = formData.operator && formData.registeredContactNumber.trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      console.log("Form submitted:", formData);
      // Add submission logic here
    }
  };

  return (
    <>
      <Container className="py-5">
        <Row>
          {/* Left Side Content */}
          <Col md={6} className="text-center text-md-start">
            <h2 className="fw-bold" style={{color:"#664A86"}}>Quick Gas Booking Service</h2>
            <h3>
              Effortlessly secure your fuel supply with swift and convenient gas booking services, ensuring uninterrupted energy for your needs.
            </h3>
          </Col>

          {/* Right Side Form */}
          <Col md={6}>
            <div
              className="p-4 rounded bg-white shadow"
              style={{ maxWidth: "400px", margin: "0 auto" }}
            >
              <h5 className="mb-4 text-center">Gas Booking Online</h5>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="operator">
                  <div className="d-flex justify-content-between align-items-center">
                    <Form.Label>Operator</Form.Label>
                    <img
                      height={15}
                      src="https://static.mobikwik.com/appdata/operator_icons/bbps_v2.png"
                      alt="BBPS"
                    />
                  </div>
                  <Form.Select
                    id="operator"
                    value={formData.operator}
                    onChange={handleChange}
                  >
                    <option value="">Select Operator</option>
                    <option value="Bharat Gas(BPCL)">Bharat Gas (BPCL)</option>
                    <option value="Indane Gas">Indane Gas</option>
                    <option value="HP Gas">HP Gas</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="registeredContactNumber">
                  <Form.Label>Registered Contact Number</Form.Label>
                  <Form.Control
                    type="text"
                    id="registeredContactNumber"
                    placeholder="Registered Contact Number"
                    value={formData.registeredContactNumber}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100"
                  style={{ backgroundColor: '#872D67', color: 'white' }}
                  disabled={!isFormValid} // Disable the button if the form is incomplete
                >
                  Confirm
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <FAQLpgGasBooking />
    </>
  );
};

export default LpgBooking;
