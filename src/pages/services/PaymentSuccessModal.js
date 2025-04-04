import { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

export function PaymentSuccessModal({ openModal, onClose }) {
  
  useEffect(() => {
    if (openModal) {
      const audio = new Audio('/audio/BharatConnect.mp3'); // Ensure correct path
      audio.play().catch(error => {
        console.error('Error playing audio:', error);
      });
    }
  }, [openModal]);

  return (
    <Modal show={openModal} onHide={onClose} centered>
      <Modal.Header closeButton />
      <Modal.Body className="text-center">
        <div className="mb-4">
          <img src="/image/bbps_assured.png" alt="assured" className="w-44 mx-auto" />
        </div>
        <h3 className="text-2xl font-bold text-success mb-2 d-flex align-items-center justify-content-center">
          ✅ Payment Successful
        </h3>
        <p className="text-muted">
          Your payment has been successfully processed. Thank you for your purchase!
        </p>
      </Modal.Body>
      <Modal.Footer className="justify-content-center border-0">
        <Button variant="primary" onClick={onClose}>Receipt</Button>
        <Button variant="secondary" onClick={onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
