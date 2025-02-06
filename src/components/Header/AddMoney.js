import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AddMoney({ setIsOpen }) {
    const closeModal = () => setIsOpen(false);
    return (
        <>
        
            <div className="cdk-overlay-container fade show">
                <div
                    className="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"
                    onClick={closeModal}
                ></div>
                <div
                    className="d-flex cdk-global-overlay-wrapper mbk-cdk-global-overlay-wrapper"
                    style={{ justifyContent: "center", alignItems: "center", height: "inherit" }}
                >
                    <div
                        id="cdk-overlay-0"
                        className="cdk-overlay-pane"
                        style={{ maxWidth: "80vw", position: "static" }}
                    >
                        <div className="mat-dialog-container">
                            <section
                                className="modalBody add-mon-container"
                                style={{ width: "400px", borderRadius: "20px", padding: "0px" }}
                            >
                                {/* Modal Header */}
                                <div className="form-header">
                                    <div className="form-head">
                                        <button className="cls" onClick={closeModal}>
                                            ✕
                                        </button>
                                        <p className="add-mon-header">Add Money to Wallet</p>
                                    </div>
                                </div>


                                {/* Modal Form */}
                                <div className="form-body">
                                    <form>
                                        <div class="mb-3">
                                            <label for="amount" class="form-label">Amount</label>
                                            <input type="tel" class="form-control" id="amount" placeholder="₹ Enter Amount" />
                                        </div>
                                        <div className="money_btns">
                                            <button type="button" class="btn directaddmoney me-3">100+</button>
                                            <button type="button" class="btn directaddmoney me-3">500+</button>
                                            <button type="button" class="btn directaddmoney">1000+</button>
                                        </div>
                                        <Link to={'/paymentcheck'} className="btn btn-primary d-block mt-4 w-100">Continue</Link>
                                    </form>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
