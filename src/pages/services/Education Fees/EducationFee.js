import React, { useState } from 'react';
import { Row, Col, Form, Button } from "react-bootstrap";
import FAQEducationFees from './FAQEducationFees';
import Services from '../Services';

const EducationFee = () => {
  const [formData, setFormData] = useState({
    institution: "",
    studentId: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const isFormValid = formData.institution && formData.studentId && formData.amount;

  return (
    <>
      <div className="p-5" style={{backgroundColor:"#EFF8FF"}}>
        <Row>
          {/* Left Side Content */}
          <Col md={6} className="text-center text-md-start">
            <h2 className="fw-bold" style={{color:"#872D67"}}>Seamless Education Fee Payments</h2>
            <h3>
              Simplify your academic journey by paying tuition fees securely and conveniently, 
              ensuring uninterrupted education.
            </h3>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="/images/education.png"
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
              <h3 className="mb-4" style={{color:"#872D67",fontWeight:"bold"}}>Education Fee Payment</h3>
              <Services/>
            </div>
          </Col>
        </Row>
      </div>
      <FAQEducationFees />
    </>
  );
};

export default EducationFee;