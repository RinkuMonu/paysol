import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import FAQElectricityBill from "./FAQElectricityBill";

const ElectricityBillPayment = () => {
  const [formData, setFormData] = useState({
    operator: "",
    consumerNumber: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const isFormValid = formData.operator && formData.consumerNumber;

  return (
    <>
      <Container className="py-5">
        <Row>
          {/* Left Side Content */}
          <Col md={6} className="text-center text-md-start">
            <h2 className="fw-bold" style={{color:"#664A86"}}>Ingenious Electricity Bill Settlement</h2>
            <h3>
              Empower your life with the efficient management of electricity
              bills, ensuring uninterrupted power supply for your world of
              possibilities.
            </h3>
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
                  <div className="d-flex justify-content-between align-items-center">
                    <Form.Label>Operator</Form.Label>
                    <img
                      height={20}
                      src="https://static.mobikwik.com/appdata/operator_icons/bbps_v2.png"
                      alt="BBPS"
                    />
                  </div>
                  <Form.Select
                    value={formData.operator}
                    onChange={handleChange}
                  >
                    <option value="">Select Operator</option>
                    <option value="Airtel">Airtel</option>
                    <option value="Jio">Jio</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="consumerNumber">
                  <Form.Label>Consumer Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Consumer Number"
                    value={formData.consumerNumber}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100"
                  style={{ backgroundColor: "#872D67", color: "white" }}
                  disabled={!isFormValid}
                >
                  Confirm
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <FAQElectricityBill />
    </>
  );
};

export default ElectricityBillPayment;
