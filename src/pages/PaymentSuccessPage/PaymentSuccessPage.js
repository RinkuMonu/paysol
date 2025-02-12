import React from 'react';

const PaymentSuccessPage = () => {
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                <div className="card shadow-lg p-5 text-center" style={{ width: '25rem' }}>
                    <div className="card-body">
                        <h3 className="card-title text-success">
                            <i className="bi bi-check-circle-fill"></i> Payment Successful
                        </h3>
                        <p className="card-text">
                            Your payment has been successfully processed. Thank you for your purchase!
                        </p>
                       
                    </div>
                </div>
            </div>
        </>
    );
};

export default PaymentSuccessPage;
