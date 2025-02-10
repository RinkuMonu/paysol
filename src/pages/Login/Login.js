import React, { useState } from 'react';
import "./login.css";
import ReactCardFlip from "react-card-flip";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import { login, verifyOtp } from '../../Features/Auth/authSlice';
const Login = ({closePopup}) => {
  const [flipState, setFlipState] = useState("signup");
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckboxValid, setIsCheckboxValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();
 const dispatch = useDispatch()
  const handleMobileChange = (e) => {
    const value = e.target.value;
    setMobileNumber(value);

    if (value.length === 0 || value.length === 10) {
      setIsValid(true);
      setErrorMessage("");
    } else {
      setIsValid(false);
      setErrorMessage("Please enter a valid 10-digit mobile number");
    }
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };


  const handleSubmitSignUp = async (e) => {
    e.preventDefault();

    if (mobileNumber.length !== 10) {
      setIsValid(false);
      setErrorMessage("Please enter a valid 10-digit mobile number");
      return;
    }

    if (!isChecked) {
      setIsCheckboxValid(false);
      return;
    }

    setIsCheckboxValid(true);

    try {
      const response = await dispatch(login(mobileNumber)).unwrap();
      console.log("Login Success:", response);

      if (response.message === "OTP sent successfully") {
        setFlipState("otp");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage(error || "Something went wrong!");
    }
  };

  const handleSubmitOTP = async (e) => {
    e.preventDefault();

    if (otp.length !== 6) {
      setErrorMessage("Please enter a valid 6-digit OTP");
      return;
    }

    try {
      const response = await dispatch(verifyOtp({ mobileNumber, otp })).unwrap();
      console.log("OTP Verified:", response);

      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        closePopup()
        navigate("/"); 
      }, 3000);
    } catch (error) {
      console.error("OTP Verification failed:", error);
      setErrorMessage(error || "Invalid OTP, please try again!");
    }
  };

  const handleBackToSignUp = () => {
    setFlipState("signup");
  };
  return (
    <>
      <div className="login-form-wrapper"
        style={{
          backgroundColor: "#EFF8FF",
          borderRadius: "0px",
        }}>
        <div className="container">
          <div className="row main-section">
            <div className='position-absolute bgImage  d-none d-md-block'>
              <img src='/assets/Home/login-pattern.png' />
            </div>
            <div className="col-md-6 bg-img d-none d-md-block my-3" style={{ borderRadius: "30px 0px 0px 30px", zIndex: "2" }}>

              {/* <div className="logo-img">
                <img
                  src="/assets/Home/logo.jpg"
                  alt=""
                  className="m-auto mt-4"
                  style={{
                    width: "100px",
                  }}
                />

              </div>
              <div className="center-div">
                <div className="login-content">
                  <h1>The new age way to pay!</h1>
                  <p>Make payments, send & receive money
                    instantly & all with a tap!</p>
                  <div className="list-section">
                    <ul>
                      <li><i class="bi bi-check-circle-fill me-3"></i>Scan any QR</li>
                      <li><i class="bi bi-check-circle-fill me-3"></i>Send/Receive from any app</li>
                      <li><i class="bi bi-check-circle-fill me-3"></i>Pay any phone number</li>
                    </ul>

                  </div>
                  <div className="QrCode_section">
                    <div className="QrCode">
                      <div className="content">
                        <p className="mb-2">Scan to download our app</p>
                        <p>For smooth & fast experience</p>
                      </div>
                      <div className="qr-code_img">
                        <img className="img-fluid" src="/assets/Home/qr.jpg"  width={158}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="col-md-6 my-3 padding-md">
              <div className="form-container">
                <ReactCardFlip isFlipped={flipState !== "signup"} flipDirection="horizontal">
                  {/* Front Side - Sign Up */}
                  <div className="form-box login-Heading d-flex flex-column h-100">
                    <h2>Login</h2>
                    <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmitSignUp}>
                      <div className="mb-3">
                        <label htmlFor="mobileNumber" className="form-label">
                          Enter Mobile Number
                        </label>
                        <input
                          type="number"
                          className={`form-control ${isValid ? "" : "is-invalid"}`}
                          id="mobileNumber"
                          value={mobileNumber}
                          onChange={handleMobileChange}
                          placeholder="Enter Mobile Number"
                          required
                        />
                        {!isValid && <div className="invalid-feedback">{errorMessage}</div>}
                      </div>

                      <div className="form-check">
                        <input
                          className={`form-check-input ${isCheckboxValid ? "" : "is-invalid"}`}
                          type="checkbox"
                          id="flexCheckChecked"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        <label className="form-check-label ms-1" htmlFor="flexCheckChecked">
                          I agree to the <Link to={"/term"}>Terms & Conditions</Link>
                        </label>
                      </div>

                      <button className="btn btn-primary OtpBtn px-0" type="submit" >
                        Get OTP
                      </button>
                    </form>
                    <hr style={{ margin: "100px 0 10px" }} />
                    <div className="already-account mt-auto">
                      <h3>Already have a Finunique small pvt ltd . Wallet?</h3>
                      <button className="btn border-0 bg-white px-0" onClick={() => setFlipState("login")}>
                        Login
                      </button>
                    </div>
                  </div>

                  {/* Back Side - OTP or Login */}
                  <div className="form-box">
                    {flipState === "otp" && (
                      <>
                        <h2>Enter OTP</h2>
                        <p>OTP has been sent successfully to your registered mobile number.</p>
                        <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmitOTP}>
                          <div className="mb-3">
                            <label htmlFor="otpField" className="form-label">
                              Enter OTP
                            </label>
                            <input
                             type="number"
                              className="form-control"
                              id="otpField"
                              value={otp}
                              onChange={handleOtpChange}
                              placeholder="Enter OTP"
                              required
                            />
                          </div>
                          <button className="btn btn-primary OtpBtn" type="submit">
                            Submit OTP
                          </button>
                        </form>
                      </>
                    )}

                    {flipState === "login" && (
                      <>
                        <h2>Login</h2>
                        <form className="row g-3 needs-validation">
                          <div className="mb-3">
                            <label htmlFor="loginMobileNumber" className="form-label">
                              Enter Mobile Number
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="loginMobileNumber"
                              placeholder="Enter Mobile Number"
                              required
                            />
                          </div>
                          <button
                            className="btn btn-primary OtpBtn"
                            type="button"

                          >
                            Submit
                          </button>
                          <hr style={{ margin: "100px 0 10px" }} />
                          <div className="already-account mt-auto">
                            <h3>
                              New to Finunique small pvt ltd .?</h3>
                            <button className="btn border-0 bg-white px-0 d-block" onClick={() => setFlipState("signup")}>
                              Create Wallet
                            </button>
                          </div>
                        </form>
                      </>
                    )}
                  </div>
                </ReactCardFlip>

                {/* Popup */}
                {showPopup && (
                  <div className="popup-overlays">
                    <div className="popup-contents">
                      <h3>OTP Submitted Successfully!</h3>
                      <iframe src="https://lottie.host/embed/03f271aa-e217-438b-9e50-9d37ddfbc9d5/OKoDas2PKt.lottie"></iframe>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
};

export default Login;
