/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import FAQCableBillPayments from "./FAQCableBillPayments";

const Cable = () => {
  const [formData, setFormData] = useState({
    subscriberCode: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const isFormValid = formData.subscriberCode.trim() !== "";

  return (
    <>
      <div className="p-5" style={{backgroundColor:"#EFF8FF"}}>
        <Row>
          {/* Left Side Content */}
          <Col md={6} className="text-center text-md-start">
            <h2 className="fw-bold" style={{color:"#872D67"}}>
              Cable Bill Ease: Simplify Your Viewing Experience.
            </h2>
            <h3>
              Streamline your entertainment with easy cable bill payments,
              ensuring endless viewing pleasure.
            </h3>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="/images/cable.png"
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
              <h3 className="mb-4" style={{color:"#872D67",fontWeight:"bold"}}>Online Cable Bill Payment</h3>
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
                  <Form.Select>
                    <option>Asianet Digital</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="subscriberCode">
                  <Form.Label>Subscriber Code</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Subscriber Code"
                    value={formData.subscriberCode}
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
      <FAQCableBillPayments />
    </>
  );
};

export default Cable;
