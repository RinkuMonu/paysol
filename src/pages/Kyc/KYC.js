import React, { useState } from "react";
import './kyc.css'
import AadharCard from "./AadharCard";
import BankDetails from "./BankDetails";
import PanDetails from "./PanDetails";

export default function KYC() {
    const [currentStep, setCurrentStep] = useState(1);
    const [showAadharDetails, setShowAadharDetails] = useState(false);
    const [showBankDetails, setShowBankDetails] = useState(false);
    const [showPanDetails, setShowPanDetails] = useState(false);
    const [formData, setFormData] = useState({
        aadharNumber: "",
        otp: "",
        bankAccount: "",
        panCard: "",
    });
    const [otpSent, setOtpSent] = useState(false);

    const steps = [
        { id: 1, label: "Aadhar Details" },
        { id: 2, label: "Bank Details" },
        { id: 3, label: "Pan Card Details" },
        { id: 4, label: "Submit" },
    ];

    // Validation for Next Button
    const isStepValid = () => {
        if (currentStep === 1) return formData.aadharNumber.length === 12 && formData.otp.length === 6;
        if (currentStep === 2) return formData.bankAccount.length >= 9;
        if (currentStep === 3) return formData.panCard.length === 10;
        return true;
    };

    const handleNext = () => {
        if (isStepValid() && currentStep < steps.length) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSendOTP = () => {
        if (formData.aadharNumber.length === 12) {
            setOtpSent(true);
        }
    };

    const handleVerifyOTP = () => {
        if (formData.otp.length === 6) {
            setShowAadharDetails(true); // Show Aadhar details after verification
        }
    };

    const handleSubmitBankDetails = () => {
        if (formData.bankAccount.length >= 9) {
            setShowBankDetails(true);
        }
    };

    const handleSubmitPANCardDetails = () => {
        if (formData.panCard.length === 10) {
            setShowPanDetails(true);
        }
    }
    return (
        <>
            <section className="hero-section-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="kyc_section">
                                {/* <h1>KYC</h1> */}
                                {/* Stepper UI */}
                                <div className="container my-4 text-center">
                                    <div className="d-flex justify-content-center align-items-center mb-4">
                                        {steps.map((step, index) => (
                                            <React.Fragment key={step.id}>
                                                <div className="d-flex flex-row align-items-center w-100 gap-3">
                                                    <div
                                                        className={`step-circle d-flex align-items-center justify-content-center ${step.id < currentStep
                                                            ? "bg-success text-white"
                                                            : step.id === currentStep
                                                                ? "border border-primary text-primary"
                                                                : "bg-light text-secondary"
                                                            }`}
                                                    >
                                                        {step.id < currentStep ? "✔" : step.id}
                                                    </div>
                                                    <div
                                                        className={`${step.id <= currentStep
                                                            ? "text-primary"
                                                            : "text-secondary"
                                                            }`}
                                                    >
                                                        {step.label}
                                                    </div>
                                                </div>
                                                {index !== steps.length - 1 && (
                                                    <div
                                                        className={`step-line ${step.id < currentStep ? "bg-success" : "bg-light"
                                                            }`}
                                                    ></div>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </div>

                                    {/* Dynamic Forms Based on Steps */}
                                    <div className="form-section">
                                        {currentStep === 1 && (
                                            <div className="container" style={{ textAlign: "left" }}>
                                                <div className=" aadhar_card">
                                                <h3 className="mb-3">Aadhar Details</h3>

                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Enter 12-digit Aadhar Number"
                                                                maxLength={12}
                                                                value={formData.aadharNumber}
                                                                onChange={(e) =>
                                                                    setFormData({
                                                                        ...formData,
                                                                        aadharNumber: e.target.value.replace(/\D/g, ""),
                                                                    })
                                                                }
                                                            />
                                                        </div>
                                                        {otpSent && (
                                                            <>
                                                                <div className="col-md-4">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="Enter OTP"
                                                                        maxLength={6}
                                                                        value={formData.otp}
                                                                        onChange={(e) =>
                                                                            setFormData({
                                                                                ...formData,
                                                                                otp: e.target.value.replace(/\D/g, ""),
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                                <div className="col-md-1" style={{ "text-align-last": "start", alignSelf: "anchor-center" }}>
                                                                    <button className="otpBtn" onClick={handleVerifyOTP}>Verify</button>
                                                                </div>

                                                            </>
                                                        )}

                                                        <div className="col-md-3" style={{ "text-align-last": "start", alignSelf: "anchor-center" }}>
                                                            <button className="otpBtn" onClick={handleSendOTP}>
                                                                Send Otp
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                {showAadharDetails && (
                                                    <AadharCard />
                                                )}
                                            </div>
                                        )}

                                        {currentStep === 2 && (
                                            <div className="container" style={{ textAlign: "left" }}>
                                                <div className="bank_card">
                                                <h3>Bank Details</h3>

                                                    <div className="row">
                                                        <div className="col-md-8">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Enter Bank Account Number"
                                                                value={formData.bankAccount}
                                                                onChange={(e) =>
                                                                    setFormData({
                                                                        ...formData,
                                                                        bankAccount: e.target.value.replace(/\D/g, ""),
                                                                    })
                                                                }
                                                            />
                                                        </div>
                                                        <div className="col-md-4 mt-1">
                                                            <button className="submitBtn" onClick={handleSubmitBankDetails}>Submit</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                {showBankDetails && (
                                                    <BankDetails />
                                                )}
                                            </div>
                                        )}

                                        {currentStep === 3 && (
                                            <div className="container" style={{ textAlign: "left" }}>
                                              
                                                <div className="pan_card">
                                                <h3>PAN Card Details</h3>
                                                    <div className="row">
                                                        <div className="col-md-8">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Enter PAN Card Number"
                                                                maxLength={10}
                                                                value={formData.panCard}
                                                                onChange={(e) =>
                                                                    setFormData({
                                                                        ...formData,
                                                                        panCard: e.target.value.toUpperCase(),
                                                                    })
                                                                }
                                                            />
                                                        </div>
                                                        <div className="col-md-4 mt-1">
                                                            <button className="submitBtn" onClick={handleSubmitPANCardDetails}>Submit</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                {showPanDetails && (
                                                    <PanDetails />
                                                )}
                                            </div>
                                        )}
                                        {currentStep === 4 && (
                                            <div>
                                                <img src="/assets/Home/submit.jpeg" className="mb-3" />
                                                <p>All details have been entered correctly.</p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Buttons */}
                                    <div className="d-flex justify-content-between mt-4">
                                        <button
                                            className="btn btn-secondary BackBtn me-2"
                                            onClick={handleBack}
                                            disabled={currentStep === 1}
                                        >
                                            Back
                                        </button>
                                        <button
                                            className="btn NextBtn"
                                            onClick={handleNext}
                                            disabled={!isStepValid() || currentStep === steps.length}
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
