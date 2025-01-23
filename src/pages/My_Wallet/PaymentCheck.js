import React from 'react'

export default function PaymentCheck() {
    return (
        <>
            <div className='payment_checkout '>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 mb-3'>
                            <div className='payment_method'>
                                <h3>Select a Payment Mode</h3>
                                <div className='Payment_card'>
                                    <nav>
                                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                            <button className="nav-link active" id="nav-DebitCards-tab" data-bs-toggle="tab" data-bs-target="#nav-DebitCards" type="button" role="tab" aria-controls="nav-DebitCards" aria-selected="true">Debit Cards</button>
                                            <button className="nav-link" id="nav-CreditCards-tab" data-bs-toggle="tab" data-bs-target="#nav-CreditCards" type="button" role="tab" aria-controls="nav-CreditCards" aria-selected="false">Credit Cards</button>
                                        </div>
                                    </nav>
                                    <div className="tab-content" id="nav-tabContent">
                                        <div className="tab-pane fade show active" id="nav-DebitCards" role="tabpanel" aria-labelledby="nav-DebitCards-tab" tabindex="0">
                                            <div className='debit_card'>
                                                <h4>Enter Card Details</h4>
                                                <div className="mb-3">
                                                    <label for="card-details" className="form-label">Enter Credit / Debit Card Number</label>
                                                    <input type="text" className="form-control" id="card-details" placeholder="Enter Credit / Debit Card Number" />
                                                </div>
                                                <div className='row'>
                                                    <div className='col-md-3'>
                                                        <label for="exampleFormControlInput1" className="form-label mb-3">Expiry Month</label>
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected>MM</option>
                                                            <option value="1">01</option>
                                                            <option value="2">01</option>
                                                            <option value="3">01</option>
                                                        </select>

                                                    </div>
                                                    <div className='col-md-3'>
                                                        <label for="exampleFormControlInput1" className="form-label mb-3">Expiry Year</label>
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected>YY</option>
                                                            <option value="1">01</option>
                                                            <option value="2">01</option>
                                                            <option value="3">01</option>
                                                        </select>

                                                    </div>
                                                    <div className="col-md-4 position-relative">
                                                        <label for="Cvv" className="form-label mb-3">CVV</label>
                                                        <div className="input-group mb-3 cvv-img">
                                                            <input type="text" class="form-control" id="cvv" placeholder="cvv" />
                                                            <span className="input-group-text">
                                                                <img src="/assets/Home/cvv.svg" alt="CVV Icon" style={{ width: '20px', height: '20px' }} />
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-12 my-4'>
                                                        <button className='btn btn-secondary' disabled>Proceed to pay ₹219</button>

                                                    </div>
                                                    <p style={{ color: "var(--themeht-primary-color)", fontSize: "12px", fontWeight: "400" }}>Apply a Coupon Code</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="nav-CreditCards" role="tabpanel" aria-labelledby="nav-CreditCards-tab" tabindex="0">Credit Cards</div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className='col-md-6 mb-3'>
                            <div className='payment_summary'>
                                <h3 className='mb-4'>Mobile Recharge - 9521878217</h3>
                                <div className='d-flex justify-content-between'>
                                    <p>Total amount to be paid</p>
                                    <p style={{ fontWeight: "600" }}>₹ 219</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p>To be paid from wallet</p>
                                    <p style={{ fontWeight: "600" }}>- ₹ 0</p>
                                </div>
                                <div className='final-Payment'>
                                    <div className='d-flex justify-content-between'>
                                        <p className='mb-0'>Pay Balance Amount</p>
                                        <p className='mb-0'>₹ 219</p>
                                    </div>
                                </div>
                            </div>
                            <div className='we_accept my-3'>
                                <img src='/assets/Home/weaccept.jpg' className='img-fluid' style={{width:"500px"}} />
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
