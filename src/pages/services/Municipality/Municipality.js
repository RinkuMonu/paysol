import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import FAQMunicipality from './FAQMunicipality';

const Municipality = () => {
  const [formData, setFormData] = useState({
    operator: "Asianet Digital",
    houseNumber: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Check if all fields are filled
  const isFormValid = formData.operator && formData.houseNumber.trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      console.log("Form submitted:", formData);
      // Add form submission logic here (e.g., API call)
    }
  };

  return (
    <>
      <Container className="py-5">
        <Row>
          {/* Left Side Content */}
          <Col md={6} className="text-center text-md-start">
            <h2 className="fw-bold" style={{color:"#664A86"}}>Simplify Municipal Bill Payments</h2>
            <h3>Simplify urban life with convenient municipality bill payments.</h3>
          </Col>

          {/* Right Side Form */}
          <Col md={6}>
            <div
              className="p-4 rounded bg-white shadow"
              style={{ maxWidth: "400px", margin: "0 auto" }}
            >
              <h5 className="mb-4 text-center">
                Online Municipal Property Tax Payment
              </h5>
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
                    value={formData.operator}
                    onChange={handleChange}
                    id="operator"
                  >
                    <option>Asianet Digital</option>
                    {/* Add more operators here if needed */}
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="houseNumber">
                  <Form.Label>House Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="House Number"
                    value={formData.houseNumber}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100"
                  style={{ backgroundColor: '#872D67', color: 'white' }}
                  disabled={!isFormValid} 
                >
                  Confirm
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <FAQMunicipality />
    </>
  );
};

export default Municipality;
