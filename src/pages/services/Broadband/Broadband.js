import React, { useState } from 'react';
import { Row, Col, Form, Button } from "react-bootstrap";
import FAQBroadbandBillPayment from './FAQBroadbandBillPayment';

const Broadband = () => {
  const [formData, setFormData] = useState({
    operator: "",
    telephoneNumber: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const isFormValid = formData.operator && formData.telephoneNumber;

  return (
    <>
      <div className="p-5" style={{backgroundColor:"#EFF8FF"}}>
        <Row>
          {/* Left Side Content */}
          <Col md={6} className="text-center text-md-start">
            <h2 className="fw-bold" style={{color:"#872D67"}}>Streamlined Broadband Bill Settlement</h2>
            <h3>
              Effortlessly handle your broadband bills, keeping your online world running smoothly.
            </h3>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="/images/broadband.png"
                alt="Image"
                height="300"
                className="item-center"
              />
            </div>
          </Col>

          {/* Right Side Form */}
          <Col md={6}>
            <div
              className="p-4 rounded bg-white shadow"
              style={{ maxWidth: "500px", margin: "0 auto" }}
            >
              <h3 className="mb-4" style={{color:"#872D67",fontWeight:"bold"}}>Broadband Bill Payment</h3>
              <Form>
                <Form.Group className="mb-3" controlId="operator">
                  <div className="d-flex justify-content-between align-items-center">
                    <Form.Label>Operator</Form.Label>
                    <img
                      height={25}
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

                <Form.Group className="mb-3" controlId="telephoneNumber">
                  <Form.Label>Telephone Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Telephone Number"
                    value={formData.telephoneNumber}
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
      </div>
      <FAQBroadbandBillPayment />
    </>
  );
};

export default Broadband;
