import React from 'react'
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const viewBillFoundModal = ({show,handleClose}) => {
  return (
    <>
        <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>No Bill Found</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <p className="text-muted">9351760762</p>
        <p className="text-muted">Airtel</p>
        <ul className="text-start">
          <li>Minimum amount allowed is Rs 50.</li>
          <li>To remove bill reminders, go to Help -&gt; My Account</li>
        </ul>
        <div className="my-3">
          <img
            src="https://via.placeholder.com/150" // Replace with actual image URL
            alt="No Bill"
            className="img-fluid"
          />
        </div>
        <p className="text-muted">Unable to get bill details from biller</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}

export default viewBillFoundModal;