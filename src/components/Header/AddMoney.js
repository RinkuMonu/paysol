import { useEffect, useState, useContext } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../services/AxiosInstance";
import { DataContext } from "../UserData/UserData";
export default function AddMoney({ setIsOpen }) {
    const { data } = useContext(DataContext) || {};
    const [loading, setLoading] = useState(false);
    const [amount, setAmount] = useState("");
    const user = useSelector((state) => state.auth.user);
    const userId = localStorage.getItem("id");
    const closeModal = () => setIsOpen(false);
    const handleAmountClick = (value) => {
        setAmount(value);
    };
    const makePayment = async (e) => {
        setLoading(true);
        e.preventDefault();
        const referenceNumber = `FIN-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`;
        // const successUrl = `https://http://localhost:3000//payment-success?ref=${referenceNumber}`;
        // const callbackUrl = `https://api.worldpayme.com/api/payinsuccess`;
        const paymentData = {
            amount: amount,
            reference: referenceNumber,
            name: data?.name,
            mobile: data?.mobileNumber,
            email: data?.email,
            userId: userId,
            // success_url: successUrl,
            // callback_url: callbackUrl,
        };
        try {
            const response = await axiosInstance.post("payment/payIn", paymentData);
            console.log("Payment successful:", response.data);
            if (response.status === 200) {
                window.location.href = response?.data?.data?.payment_url;
            }
        } catch (error) {
            if (error.response) {
                console.error("Error Response:", error.response.data);
            } else if (error.request) {
                console.error("No response received:", error.request);
            } else {
                console.error("Request error:", error.message);
            }
        } finally {
            setLoading(false);
        }
    };
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
                                        <div className="mb-3">
                                            <label htmlFor="amount" className="form-label">Amount</label>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                id="amount"
                                                placeholder="₹ Enter Amount"
                                                value={amount}
                                                onChange={(e) => setAmount(e.target.value)}
                                            />
                                        </div>
                                        <div className="money_btns">
                                            <button type="button" className="btn directaddmoney me-3" onClick={() => handleAmountClick(100)}>100+</button>
                                            <button type="button" className="btn directaddmoney me-3" onClick={() => handleAmountClick(500)}>500+</button>
                                            <button type="button" className="btn directaddmoney" onClick={() => handleAmountClick(1000)}>1000+</button>
                                        </div>
                                        <button
                                            onClick={makePayment}
                                            className="btn btn-primary d-block mt-4 w-100"
                                        >
                                            {loading ? "Payment Creating..." : "Continue"}
                                        </button>
                                    </form>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
