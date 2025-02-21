import React from "react";
import { Modal, Button } from "react-bootstrap"; // Corrected Button import
import "bootstrap/dist/css/bootstrap.min.css";

const ViewBillModal = ({ show, handleClose, billdata }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{billdata ? "Bill Details" : "No Bill Found"}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <div className="d-flex justify-content-between w-100 p-2">
            <div>
              <p className="text-muted">{billdata?.cellNumber || "N/A"}</p>
              <p className="text-muted">Operator: Airtel</p>
            </div>
            <div>
              <img
                height={25}
                src="https://static.mobikwik.com/appdata/operator_icons/bbps_v2.png"
                alt="BBPS"
                className="mt-1"
              />
            </div>
          </div>

          {billdata ? (
            <div className="text-start">
              <p><strong>Bill Amount:</strong> ₹{billdata?.billAmount || "N/A"}</p>
              <p><strong>Net Amount:</strong> ₹{billdata?.billnetamount || "N/A"}</p>
              <p><strong>Bill Date:</strong> {billdata?.billdate || "N/A"}</p>
              <p><strong>Due Date:</strong> {billdata?.dueDate || "N/A"}</p>
              <p><strong>Accept Payment:</strong> {billdata?.acceptPayment ? "Yes" : "No"}</p>
              <p><strong>Partial Payment Allowed:</strong> {billdata?.acceptPartPay ? "Yes" : "No"}</p>
              <p><strong>User Name:</strong> {billdata?.userName !== "NA" ? billdata?.userName : "Not Available"}</p>

              <Button 
                style={{ backgroundColor: "#872D67", color: "white" }} 
                className="w-100 mt-3"
              >
                Make Payment
              </Button>
            </div>
          ) : (
            <>
              <ul className="text-start">
                <li>Minimum amount allowed is Rs 50.</li>
                <li>To remove bill reminders, go to Help → My Account</li>
              </ul>
              <div className="my-3">
                <img
                  src="./assets/Home/nobills.svg"
                  alt="No Bill"
                  className="img-fluid"
                />
              </div>
              <p className="text-muted">Unable to get bill details from biller</p>
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ViewBillModal;
