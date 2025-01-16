import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQMobileRecharge = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Handle screen size change
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as per your design
    };

    handleResize(); // Check initial screen size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const content = [
    {
      title: 'Prepaid Mobile Recharge',
      body: (
        <>
          <p>
            Nowadays, everyone has a smartphone, and the number of smartphone users continues to rise.
            When it comes to mobile payment plans, users have two options: postpaid or prepaid.
            Prepaid mobile plans are those you must pay in advance to use them. Customers can choose from
            a variety of prepaid plans offered by various operators. People looking for budget-friendly
            options might consider prepaid subscriptions.
          </p>
          <ul>
            <li>Budget-friendly plans</li>
            <li>Pay in advance</li>
            <li>Wide variety of options</li>
          </ul>
          <p>
            There are so many options available online to do your prepaid mobile recharge, but MobiKwik
            is one of the most trustworthy digital payments apps to make your life easier.
          </p>
        </>
      ),
    },
    {
      title: 'How to Make Prepaid Mobile Recharge Online?',
      body: (
        <>
          <p>
            Online recharge gives you the liberty to recharge your mobile phone number anytime and from
            anywhere. All you need is an internet connection. Here’s how you can recharge online:
          </p>
          <ol>
            <li>Open the MobiKwik app & navigate to ‘Recharges & Bill Pay’.</li>
            <li>Enter the phone number and select Prepaid or Postpaid.</li>
            <li>Select your mobile operator and circle.</li>
            <li>Choose a plan or enter the recharge amount.</li>
            <li>Enter your mobile number again and verify with OTP.</li>
            <li>Complete the payment using your preferred method.</li>
          </ol>
        </>
      ),
    },
    {
      title: 'Prepaid vs Postpaid Mobile Recharge',
      body: (
        <>
          <p>
            Prepaid mobile plans require customers to pay in advance for mobile services, while postpaid
            mobile services require customers to pay monthly bills after utilizing the services.
          </p>
          <ul>
            <li>Prepaid plans are less expensive when compared to postpaid plans.</li>
            <li>Prepaid plans are more flexible.</li>
            <li>Prepaid plans ensure no bill shock for users.</li>
            <li>Generally, prepaid recharge offers are more attractive and cost-effective.</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Why Choose MobiKwik for Online Mobile Recharge?',
      body: (
        <>
          <p>Here are some benefits of using MobiKwik for your mobile recharge:</p>
          <ul>
            <li>
              <strong>Instant Transactions:</strong> Recharge in just a few clicks, and it doesn't even take a minute.
            </li>
            <li>
              <strong>Secure Payments:</strong> MobiKwik offers end-to-end data protection for each prepaid recharge.
            </li>
            <li>
              <strong>No Transaction Cost:</strong> You won't be charged additional fees for making a recharge through MobiKwik.
            </li>
            <li>
              <strong>More Savings:</strong> Enjoy discounts and cashback rewards on prepaid plans.
            </li>
            <li>
              <strong>Various Payment Options:</strong> Pay using Credit Card, Debit Card, UPI, ZIP pay later, or other methods.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: 'Free Mobile Recharge',
      body: (
        <p>
          MobiKwik does not charge you over any online recharges, i.e., on MobiKwik, it enables free mobile
          recharge. Moreover, it offers many discounts and phone recharge offers to its users.
        </p>
      ),
    },
    {
      title: 'Frequently Asked Questions on Online Prepaid Recharge',
      body: (
        <ul>
          <li>
            <strong>Why Choose MobiKwik for Prepaid Recharge?</strong><br />
            Mobikwik is India's no. 1 site for online easy Mobile recharge. Mobikwik does not charge you
            over any online recharges, enabling free mobile recharge and helping you save your time,
            effort, and money.
          </li>
          <li>
            <strong>Is Online Recharge Safe?</strong><br />
            Prepaid online recharges via MobiKwik are safe and seamless. There is no fear of fraudulent or
            unsafe payments when using MobiKwik.
          </li>
          <li>
            <strong>By when can Recharge be done?</strong><br />
            Mobile recharges via MobiKwik can be done quickly and instantly in a few simple steps. There
            is no hassle or shuffling to pages. Just a simple procedure, and your online recharge is done.
          </li>
          <li>
            <strong>Which recharge app gives the best cashback?</strong><br />
            MobiKwik recharge app gives you the best benefits with cashback offers, exclusive recharge
            discounts, and deals.
          </li>
          <li>
            <strong>Is there any extra charge on Mobile Recharge?</strong><br />
            MobiKwik enables free online recharge. There are no charges for any operator online recharge.
            MobiKwik has never charged its customers any extra fee for using the platform to recharge their
            mobile numbers.
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

export default FAQMobileRecharge;
