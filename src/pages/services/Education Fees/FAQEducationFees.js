import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";


const FAQEducationFees = () => {
    const [isMobile, setIsMobile] = useState(false);
  
    // Handle screen size change
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      handleResize();
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    const content = [
      {
        title: "Education Fee Payment",
        body: (
          <>
            <p>
              Paying education fees on time is crucial for uninterrupted learning. 
              With Finunique Small Pvt. Ltd., you can securely pay tuition fees, exam fees, 
              hostel charges, and other educational expenses for schools, colleges, 
              and universities across India.
            </p>
            <ul>
              <li>Instant fee payment confirmation</li>
              <li>Wide network of supported institutions</li>
              <li>Secure transactions with end-to-end encryption</li>
            </ul>
          </>
        ),
      },
      {
        title: "How to Pay Education Fees Online?",
        body: (
          <>
            <p>
              Paying education fees through Finunique Small Pvt. Ltd. is simple and hassle-free:
            </p>
            <ol>
              <li>Log in to your Finunique Small Pvt. Ltd. account or mobile app</li>
              <li>Navigate to 'Education Fees' under 'Payments' section</li>
              <li>Select your institution from the list or search manually</li>
              <li>Enter student details (Roll No./Registration No.)</li>
              <li>Verify the fee amount and due date</li>
              <li>Choose payment method (UPI, Card, Net Banking, etc.)</li>
              <li>Complete payment and download receipt</li>
            </ol>
          </>
        ),
      },
      {
        title: "Benefits of Paying Education Fees Through Finunique Small Pvt. Ltd.",
        body: (
          <>
            <ul>
              <li>
                <strong>Instant Confirmation:</strong> Receive payment confirmation 
                immediately via SMS and email
              </li>
              <li>
                <strong>Payment Tracking:</strong> Maintain records of all fee payments 
                in one place
              </li>
              <li>
                <strong>Reminder Alerts:</strong> Get timely reminders for upcoming 
                fee due dates
              </li>
              <li>
                <strong>Secure Transactions:</strong> Bank-grade security for all 
                payments
              </li>
              <li>
                <strong>24/7 Availability:</strong> Pay fees anytime, anywhere
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "Education Fee Payment FAQs",
        body: (
          <ul>
            <li>
              <strong>Is there any extra charge for paying education fees?</strong>
              <br />
              Finunique Small Pvt. Ltd. doesn't charge any additional fees for education 
              fee payments. However, some banks may apply standard transaction charges.
            </li>
            <li>
              <strong>How long does it take for the payment to reflect?</strong>
              <br />
              Payments are typically processed instantly. In rare cases, it may take 
              up to 24 hours to reflect in the institution's records.
            </li>
            <li>
              <strong>Can I get a payment receipt?</strong>
              <br />
              Yes, you'll receive a digital receipt immediately after payment, 
              which you can download or print.
            </li>
            <li>
              <strong>What if I enter wrong student details?</strong>
              <br />
              Please double-check all details before payment. For any discrepancies, 
              contact our customer support immediately.
            </li>
            <li>
              <strong>Which educational institutions are supported?</strong>
              <br />
              Finunique Small Pvt. Ltd. supports fee payments for thousands of schools, 
              colleges, and universities across India. You can search for your 
              institution in our database.
            </li>
          </ul>
        ),
      },
    ];
  
    return (
      <>
        {isMobile ? (
          <Accordion>
            {content.map((item, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>{item.title}</Accordion.Header>
                <Accordion.Body>{item.body}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        ) : (
          <div className="px-5 py-5">
            {content.map((item, index) => (
              <div key={index} style={{ marginBottom: "1rem" }}>
                <h3>{item.title}</h3>
                {item.body}
              </div>
            ))}
          </div>
        )}
      </>
    );
  };

  export default FAQEducationFees;