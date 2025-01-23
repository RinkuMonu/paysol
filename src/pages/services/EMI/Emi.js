import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import FAQLoanEMIPayments from './FAQLoanEMIPayments';

const Emi = () => {
  const [formData, setFormData] = useState({
    operator: "Asianet Digital",
    applicationId: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const isFormValid = formData.operator && formData.applicationId.trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      console.log("Form submitted:", formData);
      // Add your form submission logic here (e.g., API call)
    }
  };

  return (
    <>
      <Container className="py-5">
        <Row>
          {/* Left Side Content */}
          <Col md={6} className="text-center text-md-start">
            <h2 className="fw-bold" style={{color:"#664A86"}}>Seamless online EMI payments.</h2>
            <h3>
              Streamline your financial commitments with effortless online loan
              EMI payments.
            </h3>
          </Col>

          {/* Right Side Form */}
          <Col md={6}>
            <div
              className="p-4 rounded bg-white shadow"
              style={{ maxWidth: "400px", margin: "0 auto" }}
            >
              <h5 className="mb-4 text-center">Loan EMI Payment Online</h5>
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
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="applicationId">
                  <Form.Label>Application ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Application ID"
                    value={formData.applicationId}
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
      <FAQLoanEMIPayments />
    </>
  );
};

export default Emi;
