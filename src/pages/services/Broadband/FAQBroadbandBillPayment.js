import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQBroadbandBillPayment = () => {
  const [isMobile, setIsMobile] = useState(false);

  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const content = [
    {
      title: 'About Broadband Bill Payment',
      body: (
        <>
          <p>
            MobiKwik introduces a new service to their consumers to pay their broadband bills online. Now there is no need to stand in long queues to pay broadband bills for hours. MobiKwik allows their consumers to pay BSNL Broadband, Tikona, Airtel Broadband, Act Broadband, Hathway Broadband, MTNL Delhi Broadband, MTNL Mumbai Broadband, Tata TeleServices (CDMA), Reliance Communications, Connect Broadband bills online. Pay broadband bills online using multiple payment options such as debit cards, credit cards, and net banking.
          </p>
        </>
      ),
    },
    {
      title: 'How to Recharge Broadband Bill, Instant & Safe!',
      body: (
        <>
          <p>
            A user can easily make his/her broadband bill payment online within a few minutes using the MobiKwik app or website and avail exciting broadband bill payment offers. In order to make the broadband payment, a user must follow the following simple steps.
          </p>
          <ol>
            <li>Click on ‘Broadband’ in the ‘Recharges & Bill Payments’ section on the MobiKwik app</li>
            <li>Select your broadband provider from the ‘Operator’ dropdown menu</li>
            <li>Enter your account number/ user name/ landline number (as the case may be)</li>
            <li>Click on ‘Continue’, select a payment mode and confirm your online broadband bill payment</li>
          </ol>
        </>
      ),
    },
    {
      title: 'Why Choose MobiKwik for Broadband Bill Payment',
      body: (
        <>
          <p>MobiKwik, the pioneer of online recharges and bill payments, aims to offer a seamless and easy payment process that ensures instant broadband bill payment and also allows users to save on their payments by availing broadband bill payment offers of SuperCash or Cashback. Following are the key benefits of using MobiKwik for broadband online payment.</p>
          <ul>
            <li><strong>Instant Payment:</strong> User is required to only follow a few simple steps to pay broadband bill online, using the MobiKwik app</li>
            <li><strong>Exciting Offers:</strong> A user can avail huge broadband bill payment offers which include SuperCash and cashback offers. This way, MobiKwik ensures that users save consistently on their broadband payment</li>
            <li><strong>Secure Transactions:</strong> Transactions on MobiKwik are completely safe and any data provided by the user to pay broadband bill online is not available to any third party</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Frequently Asked Question on Broadband Bill Payment',
      body: (
        <ul>
          <li>
            <strong>How do I pay my broadband bill online?</strong><br />
            Users need to follow a few simple steps on the MobiKwik app to complete their broadband bill payment. By clicking on ‘Broadband’ in the ‘Recharges and Bill Payments’ section and populating the necessary details. Different modes of payment are also available to the users for their broadband bill.
          </li>
          <li>
            <strong>How long does it take to process the Broadband Bill Payment?</strong><br />
            On the MobiKwik app, payments are instant and easy. Once a user confirms the broadband bill payment, it is instantly reflected in their account. Processing by different broadband operators may vary.
          </li>
          <li>
            <strong>Does MobiKwik support all operators for Broadband Bill Payment?</strong><br />
            MobiKwik allows users to make the online broadband bill payment across a wide range of operators including ACT Fibernet, Airtel, ASIANET, BSNL, Comway, Connect, DEN, ION and many more.
          </li>
          <li>
            <strong>What offers and cashback MobiKwik is providing for Broadband Bill Payment?</strong><br />
            A user can browse through the available broadband bill payment offers while making the broadband payment or can check out the offer section to know the ongoing broadband bill offers.
          </li>
          <li>
            <strong>How can I check my broadband bill?</strong><br />
            On selecting the ‘Broadband bill payment’ on MobiKwik and providing the necessary details, the user will be able to check their broadband bill.
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
        <div>
          {content.map((item, index) => (
            <div key={index} style={{ marginBottom: '1rem' }}>
              <h3>{item.title}</h3>
              {item.body}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default FAQBroadbandBillPayment;
