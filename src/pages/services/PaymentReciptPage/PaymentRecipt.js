import React, { useEffect, useState } from "react";
import { BiReceipt } from "react-icons/bi";
import html2pdf from "html2pdf.js";
import "./PaymentReceipt.css";

const PaymentReceipt = () => {
    const [currentDateTime, setCurrentDateTime] = useState("");
//   // Function to handle printing the receipt
//   const handlePrint = () => {
//     window.print();
//   };

 // Function to format the current date and time
 const getCurrentDateTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    const time = now.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    return `${date} ${time}`;
  };

  // Set the current date and time when the component mounts
  useEffect(() => {
    setCurrentDateTime(getCurrentDateTime());
  }, []);

const handlePrint = () => {
    const element = document.getElementById("receipt-content");
    const options = {
      margin: 10,
      filename: "receipt.pdf", 
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().from(element).set(options).save();
  };

  return (
    <div className="receipt-container receipt-main">
      <div id="receipt-content" className="receipt-card">
       
        <div className="receipt-header">
          <div className="receipt-header-content">
            <h2 className="receipt-title">
              <BiReceipt size={24} />
              Payment Receipt
            </h2>
            <div className="receipt-header-right">
              <div className="receipt-date-info">
                <img
                  src="/assets/Home/bbps_assured.png"
                  height={140}
                  alt="PG Assured Logo"
                  className="receipt-pg-assured-logo"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="receipt-company-info">
          <div>
            <div>Gurgaon, 400063</div>
            <div>India</div>
            <div>Phone: 1800 266 3090</div>
            <div>Email: info@newsolutions.co.in</div>
            <div>CIN: U74999MH2000PTC196037</div>
          </div>
          <div>
            <div>Date: 2025-02-24</div>
            <div>Receipt #: 1286</div>
          </div>
        </div>

 
        <div className="receipt-details">
          <div className="receipt-payment-info">
            <div>
              <h6>Payment Mode:</h6>
              <p>Cash</p>
            </div>
            <div>
              <h6>Subscriber/Received From:</h6>
              <p>Subscriber Name</p>
            </div>
          </div>
        </div>


        <div className="receipt-table-responsive">
          <table className="receipt-table">
            <thead>
              <tr>
                <th>Service</th>
                <th className="receipt-text-end">Amount (INR)</th>
                <th className="receipt-text-end">GST @18% (INR)</th>
                <th className="receipt-text-end">Total (INR)</th>
              </tr>
            </thead>
            <tbody>
              <tr key="internet-broadband">
                <td>Internet/Broadband</td>
                <td className="receipt-text-end">610.17</td>
                <td className="receipt-text-end">109.83</td>
                <td className="receipt-text-end">720.00</td>
              </tr>
              <tr className="receipt-total-row" key="total">
                <td colSpan={3} className="receipt-text-end">
                  Total Amount:
                </td>
                <td className="receipt-text-end">₹720.00</td>
              </tr>
            </tbody>
          </table>
        </div>


        <div className="receipt-footer">
          <small className="receipt-text-muted">
            This is a computer-generated receipt and does not require a physical
            signature.
          </small>
          <small className="receipt-text-muted">
            Thank you for your business!
          </small>
        </div>
        {currentDateTime}
      </div>

 
      <div className="receipt-print-button-container">
        <button
          onClick={handlePrint}
          className="receipt-print-button"
          aria-label="Print Receipt"
        >
          🖨️ Print Receipt
        </button>
      </div>
    </div>
  );
};

export default PaymentReceipt;