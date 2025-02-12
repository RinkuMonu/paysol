import React from 'react';

const PaymentErrorPage = () => {
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                <div className="card shadow-lg p-5 text-center" style={{ width: '25rem' }}>
                    <div className="card-body">
                        <h3 className="card-title text-danger">
                            <i className="bi bi-x-circle-fill"></i> Payment Failed
                        </h3>
                        <p className="card-text">
                            Unfortunately, there was an error processing your payment. Please try again later or contact support.
                        </p>
                        {/* <a href="/" className="btn btn-danger">Try Again</a> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PaymentErrorPage;
