import React from 'react';

const PaymentSuccessPage = () => {
    return (
        <> 
            <div className="payment-success-container d-flex justify-content-center align-items-center min-vh-100 ">
                <div className="payment-success-card shadow-lg p-5 text-center border rounded" style={{ width: '25rem' }}>
                    <div className="payment-success-card-body">
                        <div>
                            <img src='./assets/Home/bbps_assured.png' alt='assured' height={200} />
                        </div>
                        <h3 className="payment-success-card-title text-success">
                            <i className="bi bi-check-circle-fill"></i> Payment Successful
                        </h3>
                        <p className="payment-success-card-text">
                            Your payment has been successfully processed. Thank you for your purchase!
                        </p>
                        {/* <a href="/" className="btn btn-success">Go to Dashboard</a> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PaymentSuccessPage;