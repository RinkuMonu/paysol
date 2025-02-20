import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./ModalScrollbar.css"
import { Link, useNavigate } from "react-router-dom";

const ConfirmRechargeModal = ({ show, handleClose, formData ,modalTitle}) => {


  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle the "Make Payment" button click
  const handleMakePayment = () => {
    // Navigate to the payment page and pass the amount and mobile number as state
    navigate("/paymentmode", {
      state: {
        amount: formData.amount,
        mobileNumber: formData.mobileNumber,
      },
    });
  };
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="w-100">{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxHeight: "400px", overflowY: "auto" }} className="custom-scrollbar">
        <div>
        <div className="d-flex justify-content-between">
            <strong>Mobile Number:</strong> {formData.mobileNumber}
          </div>
          <div className="d-flex justify-content-between">
            <strong>Operator/Circle:</strong> {formData.operator} | {formData.circle}
          </div>
          <div className="d-flex justify-content-between">
            <strong>Plan:</strong> <p>Smart Phone </p>
          </div>
          <div className="d-flex justify-content-between">
            <strong>Validity:</strong><p> {formData.validity} </p>
          </div>
          <div className="d-flex justify-content-between"> 
            <strong>Talktime:</strong><p>{formData.talktime}</p> 
          </div>
          <div className="">
            <strong>Plan Description:</strong>
              <p>{formData.planDescription}</p>
            {/* <p>True 5G Unlimited Plan Data: 2 GB/day  Voice: Unlimited Calls SMS: 100 SMS/day Validity: 14 Days 2 GB/day high speed 4G data 
            Complimentary subscription to Jio Apps  Validity: 14 Days 2 GB/day high speed 4G data 
            Complimentary subscription to Jio Apps</p>  */}
          
        
           
          </div>
          <div className="d-flex justify-content-between">
            <div>Amount:</div><p> ₹ {formData.amount}</p>
          </div>
          <div className="d-flex justify-content-between py-3 fw-bold text-center px-3 rounded" style={{backgroundColor:"#f0f0f0"}}>
          
              <div>Total Amount:</div>
          
            <div>₹ {formData.amount}</div>
          </div>
          <div className="mt-3">
            <a href="#" style={{ textDecoration: "none", color: "#007bff" }}>
              Apply a Coupon Code
            </a>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
      
      <Button
          variant="primary"
          className="w-100"
          style={{ backgroundColor: "#664A86", color: "white" }}
          onClick={handleMakePayment} 
        >
          Make Payment
        </Button>
    
        
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmRechargeModal;
