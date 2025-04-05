import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { PaymentSuccessModal } from './PaymentSuccessModal'; 

const Services = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Get parameters from URL
  const category = searchParams.get("category");
  const alias = searchParams.get("alias");
  const serviceName = searchParams.get("service");

  const [showBill, setShowBill] = useState(false);
  const [selectedBiller, setSelectedBiller] = useState(null);
  const [billers, setBillers] = useState([]);
  const [billerDetails, setBillerDetails] = useState([]);
  const [fetchedBillData, setFetchedBillData] = useState(null);
  const [billValidationData, setBillValidationData] = useState(null);
  const [inputValues, setInputValues] = useState({});
  const [loading, setLoading] = useState({
    billers: false,
    details: false,
    payment: false,
    fetchingBill: false,
    validatingBill: false,
  });
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    customerId: "",
    amount: "",
    mobile: "",
  });
  const [openSuccessModal, setOpenSuccessModal] = useState(false);

  useEffect(() => {
    const fetchBillers = async () => {
      try {
        setLoading((prev) => ({ ...prev, billers: true }));
        setError(null);

        const response = await axios.get(
          `https://finpay-backend.onrender.com/api/biller${location.pathname}`
        );
        setBillers(response.data);
      } catch (err) {
        setError(
          `Failed to fetch ${serviceName || "service"} list. Please try again.`
        );
        console.error("Error fetching billers:", err);
      } finally {
        setLoading((prev) => ({ ...prev, billers: false }));
      }
    };

    fetchBillers();
  }, [location.pathname, serviceName]);

  const handleBillerSelect = async (billerId) => {
    if (!billerId) {
      setSelectedBiller(null);
      setBillerDetails(null);
      setShowBill(false);
      setBillValidationData(null);
      return;
    }

    try {
      setLoading((prev) => ({ ...prev, details: true }));
      setError(null);
      setShowBill(false);
      setBillValidationData(null);

      const selected = billers.find((b) => b.billerId === billerId);
      setSelectedBiller(selected);

      const response = await axios.get(
        `https://finpay-backend.onrender.com/api/biller/billerdata/${billerId}`
      );
      setBillerDetails(response.data);

      // Initialize input values for the form
      const initialInputValues = {};
      response.data?.billerInputParams?.forEach((group) => {
        group.paramsList.forEach((param) => {
          initialInputValues[param.paramName] = "";
        });
      });
      setInputValues(initialInputValues);

      // If bill validation is not required, show payment form immediately
      if (
        response.data.billerFetchRequiremet === "NOT_SUPPORTED" &&
        response.data.billerSupportBillValidation === "NOT_SUPPORTED"
      ) {
        setShowBill(false);
      }
    } catch (err) {
      setError("Failed to fetch service details. Please try again.");
      console.error("Error fetching biller details:", err);
    } finally {
      setLoading((prev) => ({ ...prev, details: false }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const fetchBill = async () => {
    if (!selectedBiller) return;

    try {
      setLoading((prev) => ({ ...prev, fetchingBill: true }));
      setError(null);

      // Prepare input parameters for the API
      const inputParams = Object.keys(inputValues).map((paramName) => ({
        paramName,
        paramValue: inputValues[paramName],
      }));

      const requestBody = {
        agentId: "CC01CC01513515340681",
        agentDeviceInfo: {
          ip: "192.168.2.73",
          initChannel: "AGT",
          mac: "01-23-45-67-89-ab",
        },
        customerInfo: {
          customerMobile: formData.mobile || 9898990084,
          customerEmail: "",
          customerAdhaar: "",
          customerPan: "",
        },
        billerId: selectedBiller.billerId,
        inputParams: {
          input: inputParams,
        },
      };

      const response = await axios.post(
        "https://finpay-backend.onrender.com/api/biller/billFetch",
        requestBody
      );

      setFetchedBillData(response.data);
      console.log("Fech fafa",response.data)
      console.log("Fetch Bill Data:-",fetchedBillData)
      setShowBill(true);

      // Update the amount with the bill amount from response
      if (response.data.billerResponse?.billAmount) {
        setFormData((prev) => ({
          ...prev,
          amount: response.data.billerResponse.billAmount,
        }));
      }
    } catch (err) {
      setError(
        "Failed to fetch bill. Please check your details and try again."
      );
      console.error("Error fetching bill:", err);
    } finally {
      setLoading((prev) => ({ ...prev, fetchingBill: false }));
    }
  };

  const billValidation = async () => {
    if (!selectedBiller) return;

    try {
      setLoading((prev) => ({ ...prev, validatingBill: true }));
      setError(null);

      // Prepare input parameters for the API
      const inputParams = Object.keys(inputValues).map((paramName) => ({
        paramName,
        paramValue: inputValues[paramName],
      }));

      const requestBody = {
        agentId: "CC01CC01513515340681",
        agentDeviceInfo: {
          ip: "192.168.2.73",
          initChannel: "AGT",
          mac: "01-23-45-67-89-ab",
        },
        billerId: selectedBiller.billerId,
        inputParams: {
          input: inputParams,
        },
      };

      const response = await axios.post(
        "https://finpay-backend.onrender.com/api/biller/billvalidation",
        requestBody
      );

      setBillValidationData(response.data);
      setShowBill(false);

      // If we get amount from validation response, update the form
      if (response.data.billerResponse?.billAmount) {
        setFormData((prev) => ({
          ...prev,
          amount: response.data.billerResponse.billAmount,
        }));
      }
    } catch (err) {
      setError(
        "Failed to validate bill. Please check your details and try again."
      );
      console.error("Error validating bill:", err);
    } finally {
      setLoading((prev) => ({ ...prev, validatingBill: false }));
    }
  };

  const quickPay = async () => {
    if (!selectedBiller || !formData.customerId || !formData.amount) {
      setError("Please fill all required fields");
      return;
    }

    try {
      setLoading((prev) => ({ ...prev, payment: true }));
      setError(null);

      const paymentData = {
        billerId: selectedBiller.billerId,
        billerName: selectedBiller.billerName,
        customerId: formData.customerId,
        amount: parseFloat(formData.amount),
        mobile: formData.mobile,
        serviceType: serviceName || category,
        billDetails: billValidationData,
      };

      const response = await axios.post(
        "https://finpay-backend.onrender.com/api/payment",
        paymentData
      );

      setOpenSuccessModal(true);
    } catch (error) {
      setError("Payment failed. Please try again.");
      console.error("Payment error:", error);
    } finally {
      setLoading((prev) => ({ ...prev, payment: false }));
    }
  };

  const handlePayment = async () => {
    if (
      billerDetails?.billerFetchRequiremet === "NOT_SUPPORTED" &&
      billerDetails?.billerSupportBillValidation === "NOT_SUPPORTED"
    ) {
      await quickPay();
    } else {
      if (billerDetails?.billerFetchRequiremet === "MANDATORY") {
        await fetchBill();
      } else {
        await billValidation();
      }
    }
  };

  const handleBillPayment = async () => {
    try {
      setLoading((prev) => ({ ...prev, payment: true }));
      const paymentData = {
        "agentId": "CC01CC01513515340681",
        "billerAdhoc": true,
        "agentDeviceInfo": {
          "ip": "192.168.2.73",
          "initChannel": "AGT",
          "mac": "01-23-45-67-89-ab"
        },
        "customerInfo": {
          "customerMobile": "9898990084",
          "customerEmail": "",
          "customerAdhaar": "",
          "customerPan": ""
        },
        "billerId": "OTME00005XXZ43",
        "inputParams": {
          "input": [
            {
              "paramName": "a",
              "paramValue": "10"
            },
            {
              "paramName": "a b",
              "paramValue": "20"
            },
            {
              "paramName": "a b c",
              "paramValue": "30"
            },
            {
              "paramName": "a b c d",
              "paramValue": "40"
            },
            {
              "paramName": "a b c d e",
              "paramValue": "50"
            }
          ]
        },
        "billerResponse": {
          "billAmount": 100000,
          "billDate": "2015-06-14",
          "billNumber": "12303",
          "billPeriod": "june",
          "customerName": "BBPS",
          "dueDate": "2015-06-20",
          "amountOptions": {
            "option" : [{
              "amountName": "Late Payment Fee",
              "amountValue": 40
            },
            {
              "amountName": "Fixed Charges",
              "amountValue": 50
            },
            {
              "amountName": "Additional Charges",
              "amountValue": 60
            }]
          }
        },
        "additionalInfo": {
          "info": [
            {
              "infoName": "a",
              "infoValue": "10"
            },
            {
              "infoName": "a b",
              "infoValue": "20"
            },
            {
              "infoName": "a b c",
              "infoValue": "30"
            },
            {
              "infoName": "a b c d",
              "infoValue": "40"
            }
          ]
        },
        "amountInfo": {
          "amount": 100000,
          "currency": 356,
          "custConvFee": 0,
          "amountTags": []
        },
        "paymentMethod": {
          "paymentMode": "Cash",
          "quickPay": "N",
          "splitPay": "N"
        },
        "paymentInfo": {
          "info": [
            {
              "infoName": "Remarks",
              "infoValue": "Received"
            }
          ]
        }
      }
      
      const response = await axios.post(
        "https://finpay-backend.onrender.com/api/biller/billpayment",
        paymentData
      );

      console.log("respose is", response)
      

      if (response.status === 200) {
        // Open success modal only on successful payment
        setOpenSuccessModal(true);
      } else {
        setError("Payment failed. Please try again.");
      }
    } catch (error) {
      console.log("error for payment is", error);
      setError("Payment failed. Please try again.");
    } finally {
      setLoading((prev) => ({ ...prev, payment: false }));
    }
  };

  const renderPaymentButton = () => {
    if (!selectedBiller || loading.details) return null;

    // If bill fetch is required
    if (billerDetails?.billerFetchRequiremet === "MANDATORY") {
      return (
        <button
          className="btn btn-primary mt-3 w-100"
          onClick={fetchBill}
          disabled={loading.fetchingBill}
        >
          {loading.fetchingBill ? (
            <>
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
              ></span>
              Fetching Bill...
            </>
          ) : (
            "Fetch Bill"
          )}
        </button>
      );
    }

    // If bill validation is required
    if (billerDetails?.billerSupportBillValidation === "MANDATORY") {
      return (
        <button
          className="btn btn-primary mt-3 w-100"
          onClick={billValidation}
          disabled={loading.validatingBill}
        >
          {loading.validatingBill ? (
            <>
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
              ></span>
              Validating Bill...
            </>
          ) : (
            "Validate Bill"
          )}
        </button>
      );
    }

    // If neither is required, show quick pay button
    return (
      <button
        className="btn btn-primary mt-3 w-100"
        onClick={quickPay}
        disabled={loading.payment}
      >
        {loading.payment ? (
          <>
            <span
              className="spinner-border spinner-border-sm me-2"
              role="status"
            ></span>
            Processing...
          </>
        ) : (
          "Quick Pay"
        )}
      </button>
    );
  };

  const renderBillDetails = () => {
    if (!fetchedBillData) {
      return (
        <div className="alert alert-info">
          No bill details available yet. Please fetch the bill first.
        </div>
      );
    }

    return (
      <div className="card">
        <div className="card-body">
          <h4 className="card-title text-primary mb-4 fw-bold">Details</h4>

          <div className="row mb-2">
            <div className="col-6 font-weight-bold fw-bold text-primary">Name</div>
            <div className="col-6">
              {fetchedBillData.billerResponse?.customerName || "B-Connect"}
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-6 font-weight-bold fw-bold text-primary">Bill Number</div>
            <div className="col-6">
              {fetchedBillData.billerResponse?.billNumber || "12303"}
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-6 font-weight-bold fw-bold text-primary">Bill Amt. Payable</div>
            <div className="col-6">
              ₹{fetchedBillData.billerResponse?.billAmount || "1000"}
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-6 font-weight-bold fw-bold text-primary">Bill Date</div>
            <div className="col-6">
              {fetchedBillData.billerResponse?.billDate || "2025-02-24"}
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-6 font-weight-bold fw-bold text-primary">Bill Due Date</div>
            <div className="col-6">
              {fetchedBillData.billerResponse?.dueDate || "2025-02-24"}
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-6 font-weight-bold fw-bold text-primary">Bill Period</div>
            <div className="col-6">
              {fetchedBillData.billerResponse?.billPeriod || "May"}
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-6 font-weight-bold fw-bold text-primary">Amount</div>
            <div className="col-6">
              ₹{fetchedBillData.billerResponse?.billAmount || "1000"}
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-6 font-weight-bold fw-bold text-primary">Customer Mobile No</div>
            <div className="col-6">{formData.mobile || "9620619244"}</div>
          </div>

          <div className="row mb-4">
            <div className="col-6 font-weight-bold fw-bold text-primary">
              Customer Convenience Fee
            </div>
            <div className="col-6">
              {fetchedBillData.convenienceFee || "0.00"}
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-6 font-weight-bold fw-bold text-primary">Select Payment Mode</div>
            <div className="col-6">
              <select
                className="form-control form-control-sm"
                defaultValue="Cash"
              >
                <option value="Cash">Cash</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="Net Banking">Net Banking</option>
                <option value="UPI">UPI</option>
              </select>
            </div>
          </div>

          <button
            className="btn btn-primary w-100 py-2"
            onClick={handleBillPayment}
            disabled={loading.payment}
          >
            {loading.payment ? (
              <>
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
                Processing...
              </>
            ) : (
              "Pay Bill"
            )}
          </button>
        </div>
      </div>
    );
  };

  const renderValidationResult = () => {
    if (!billValidationData) return null;

    return (
      <div className="alert alert-success mt-3">
        <h5>Validation Successful</h5>
        <p>Response Code: {billValidationData.responseCode}</p>
        <p>Response Reason: {billValidationData.responseReason}</p>
        {billValidationData.complianceCode && (
          <p>Compliance Code: {billValidationData.complianceCode}</p>
        )}
        {billValidationData.complianceReason && (
          <p>Compliance Reason: {billValidationData.complianceReason}</p>
        )}
      </div>
    );
  };

  const renderBillForm = () => {
    return (
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title">Payment Details</h5>

          <div className="form-group">
            <label>Customer ID *</label>
            <input
              type="text"
              name="customerId"
              className="form-control"
              placeholder="Enter customer ID"
              value={formData.customerId}
              onChange={handleFormInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Amount *</label>
            <input
              type="number"
              name="amount"
              className="form-control"
              placeholder="Enter amount"
              value={formData.amount}
              onChange={handleFormInputChange}
              required
              min="1"
            />
          </div>

          <div className="form-group">
            <label>Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              className="form-control"
              placeholder="Enter mobile number"
              value={formData.mobile}
              onChange={handleFormInputChange}
            />
          </div>

          {error && <div className="alert alert-danger">{error}</div>}

          <button
            className="btn btn-primary w-100 mt-3"
            onClick={handlePayment}
            disabled={
              loading.payment || !formData.amount || !formData.customerId
            }
          >
            {loading.payment ? (
              <>
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
                Processing Payment...
              </>
            ) : (
              "Proceed to Payment"
            )}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mb-4">
          <div className="netBanking_Card w-100">
            <div className="card-header d-flex align-items-center justify-content-between">
              <h5 className="card-title mb-0 font-weight-bold">
                {category || serviceName || "Service"}
              </h5>
              <img
                src="https://static.mobikwik.com/appdata/operator_icons/bbps_v2.png"
                alt="BBPS Logo"
                style={{ height: "30px" }}
              />
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-primary mb-4 fw-bold text-primary">
                Select {alias || "Service Provider"}
              </h5>

              {loading.billers ? (
                <div className="text-center py-4">
                  <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                  <p>Loading service providers...</p>
                </div>
              ) : error ? (
                <div className="alert alert-danger">{error}</div>
              ) : (
                <>
                  <div className="form-group">
                    <label>Available Providers:</label>
                    <select
                      className="form-control"
                      onChange={(e) => handleBillerSelect(e.target.value)}
                      disabled={loading.details}
                      value={selectedBiller?.billerId || ""}
                    >
                      <option value="">Select a provider</option>
                      {billers.map((biller) => (
                        <option key={biller.billerId} value={biller.billerId}>
                          {biller.billerName}
                        </option>
                      ))}
                    </select>
                  </div>

                  {loading.details ? (
                    <div className="text-center py-4">
                      <div
                        className="spinner-border text-primary"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                      <p>Loading provider details...</p>
                    </div>
                  ) : (
                    <>
                      {billerDetails?.billerInputParams?.map(
                        (inputParamGroup, groupIndex) =>
                          inputParamGroup?.paramsList?.map(
                            (param, paramIndex) => (
                              <div
                                key={`${groupIndex}-${paramIndex}`}
                                className="form-group"
                              >
                                <label>
                                  {param.paramName}
                                  {param.isMandatory === "Y" && " *"}
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder={param.paramName}
                                  name={param.paramName}
                                  value={inputValues[param.paramName] || ""}
                                  onChange={handleInputChange}
                                  required={param.isMandatory === "Y"}
                                />
                              </div>
                            )
                          )
                      )}

                      {renderPaymentButton()}
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        <div className="col-md-6">
          {showBill ? (
            // Show bill details when viewing bill information
            renderBillDetails()
          ) : billValidationData ? (
            // Show validation result and payment form when validation is complete
            <>
              {renderValidationResult()}
              {renderBillForm()}
            </>
          ) : (
            // Default view when nothing is selected
            <div className="card">
              <div className="card-body text-center text-muted py-5">
                {selectedBiller
                  ? billerDetails?.billerFetchRequiremet === "NOT_SUPPORTED" &&
                    billerDetails?.billerSupportBillValidation ===
                      "NOT_SUPPORTED"
                    ? "Fill the form and click 'Quick Pay' to proceed"
                    : "Fill the form and click 'Validate Bill' to continue"
                  : "Select a service provider to continue"}
              </div>
            </div>
          )}
        </div>
      </div>

      <PaymentSuccessModal 
        openModal={openSuccessModal} 
        onClose={() => setOpenSuccessModal(false)} 
      />
    </div>
  );
};

export default Services;