import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
export default function Header({ onLoginClick }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleMouseEnter = () => setIsDropdownOpen(true);
    const handleMouseLeave = () => setIsDropdownOpen(false);

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);

    return (
        <>
    
            <header id="site-header" className="header">
                <div id="header-wrap">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                                <nav className="navbar navbar-expand-lg justify-content-lg-between px-4">
                                    <Link className="navbar-brand logo" to={"/"}>
                                        <img
                                            className="img-fluid"
                                            src="/assets/Home/logo.jpg"
                                            alt=""
                                        />
                                    </Link>
                                    <button
                                        className="navbar-toggler ht-toggler"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#navbarNav"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation"
                                    >
                                        <svg
                                            width="40px"
                                            height="40px"
                                            viewBox="-2.4 -2.4 28.80 28.80"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                            <g
                                                id="SVGRepo_tracerCarrier"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke="#CCCCCC"
                                                stroke-width="0.528"
                                            ></g>
                                            <g id="SVGRepo_iconCarrier">
                                                {" "}
                                                <path
                                                    d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
                                                    fill="#000000"
                                                ></path>{" "}
                                                <path
                                                    d="M2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12Z"
                                                    fill="#000000"
                                                ></path>{" "}
                                                <path
                                                    d="M3 17C2.44772 17 2 17.4477 2 18C2 18.5523 2.44772 19 3 19H21C21.5523 19 22 18.5523 22 18C22 17.4477 21.5523 17 21 17H3Z"
                                                    fill="#000000"
                                                ></path>{" "}
                                            </g>
                                        </svg>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNav">
                                        <ul className="nav navbar-nav ms-auto">
                                            <li className="nav-item">
                                                <Link className="nav-link active" to={"/"}>
                                                    Home
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={"/AboutUs"}>
                                                    About Us
                                                </Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                {/* Hoverable Services Menu */}
                                                <Link
                                                    className="nav-link"
                                                    to="/Services"

                                                >
                                                    Our Services
                                                    <button
                                                        className=" dropdown-toggle bg-white border-0"
                                                        id="servicesDropdown"
                                                        role="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"

                                                    ><i className="bi bi-chevron-down"></i></button>
                                                </Link>
                                                <ul
                                                    className="dropdown-menu"
                                                    aria-labelledby="servicesDropdown"
                                                >
                                                    <li>
                                                        <Link className="dropdown-item" to="/recharge">
                                                            <i class="bi bi-lightning-charge"></i>
                                                            Recharge & Bill Pay
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" to={"/transfer-to-bank"}>
                                                            <i class="bi bi-currency-rupee"></i>
                                                            Transfer to Bank
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" to={"/Service3"}>
                                                            <svg
                                                                className="custom-svg"
                                                                fill="#000000"
                                                                height="64px"
                                                                width="64px"
                                                                version="1.1"
                                                                id="Layer_1"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                viewBox="-153.6 -153.6 819.20 819.20"
                                                                xmlSpace="preserve"
                                                            >
                                                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                                                <g
                                                                    id="SVGRepo_tracerCarrier"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                ></g>
                                                                <g id="SVGRepo_iconCarrier">
                                                                    <g>
                                                                        <g>
                                                                            <g>
                                                                                <path d="M361.079,110.717c3.076-4.802,1.674-11.19-3.128-14.264c-30.42-19.474-65.673-29.769-101.95-29.769 c-104.388,0-189.317,84.927-189.317,189.317s84.928,189.317,189.317,189.317s189.317-84.927,189.315-189.316 c0-42.677-13.861-82.965-40.087-116.509c-3.51-4.491-10-5.286-14.494-1.775c-4.494,3.512-5.288,10.001-1.775,14.495 c23.358,29.876,35.704,65.765,35.704,103.787c0,93.002-75.662,168.664-168.664,168.664S87.337,349.001,87.337,255.999 S162.999,87.336,256.001,87.336c32.323,0,63.725,9.167,90.814,26.51C351.613,116.92,358.003,115.52,361.079,110.717z"></path>
                                                                                <path d="M500.389,255.999c0-11.871,2.872-25.02,5.649-37.735c4.878-22.338,9.922-45.437,1.246-66.359 c-9.045-21.812-29.357-34.694-49.002-47.151c-11.117-7.051-21.618-13.709-29.474-21.566 c-7.855-7.856-14.515-18.356-21.564-29.474c-12.458-19.643-25.34-39.956-47.15-49.001c-20.924-8.674-44.021-3.631-66.36,1.247 c-12.715,2.777-25.863,5.648-37.734,5.648c-11.871,0-25.019-2.871-37.734-5.648c-22.337-4.878-45.437-9.922-66.36-1.247 c-21.812,9.044-34.692,29.357-47.15,49.001c-7.049,11.117-13.709,21.618-21.564,29.474c-7.856,7.855-18.358,14.515-29.474,21.564 C34.073,117.21,13.76,130.093,4.715,151.905c-8.675,20.921-3.632,44.019,1.246,66.357c2.777,12.715,5.649,25.864,5.649,37.735 c0,11.871-2.872,25.02-5.649,37.735c-4.878,22.338-9.922,45.437-1.246,66.359c9.046,21.813,29.359,34.695,49.003,47.153 l3.971,2.524c4.808,3.066,11.192,1.656,14.259-3.152c3.069-4.808,1.658-11.192-3.15-14.26l-4.019-2.554 c-17.713-11.232-34.443-21.842-40.987-37.621c-6.192-14.936-2.043-33.931,2.348-54.041c3.01-13.786,6.123-28.042,6.123-42.143 c0-14.1-3.112-28.356-6.123-42.143c-4.391-20.11-8.539-39.105-2.348-54.04c6.544-15.78,23.274-26.39,40.986-37.622 c11.577-7.34,23.545-14.932,33.017-24.402c9.47-9.47,17.062-21.44,24.403-33.017c11.231-17.712,21.841-34.44,37.62-40.983 c14.935-6.194,33.931-2.046,54.043,2.346c13.785,3.01,28.041,6.123,42.14,6.123c14.099,0,28.353-3.112,42.14-6.123 c20.112-4.392,39.109-8.541,54.043-2.346c15.779,6.543,26.387,23.271,37.62,40.983c7.341,11.577,14.933,23.547,24.403,33.017 c9.47,9.47,21.442,17.062,33.017,24.403c17.713,11.232,34.442,21.842,40.986,37.621c6.192,14.936,2.043,33.931-2.347,54.041 c-3.01,13.786-6.123,28.042-6.123,42.143s3.112,28.356,6.123,42.143c4.391,20.11,8.539,39.105,2.347,54.04 c-6.544,15.78-23.274,26.39-40.986,37.622c-11.577,7.34-23.545,14.932-33.017,24.402c-9.47,9.47-17.062,21.44-24.403,33.017 c-11.231,17.712-21.841,34.44-37.62,40.983c-14.935,6.193-33.931,2.046-54.043-2.346c-13.785-3.01-28.041-6.123-42.14-6.123 c-14.099,0-28.353,3.112-42.14,6.123c-20.112,4.392-39.105,8.541-54.043,2.348c-15.779-6.543-26.387-23.273-37.62-40.983 c-2.942-4.639-5.984-9.434-9.124-14.031c-3.219-4.709-9.646-5.916-14.352-2.699c-4.709,3.218-5.918,9.643-2.7,14.352 c2.942,4.304,5.757,8.74,8.735,13.438c12.458,19.643,25.339,39.956,47.15,49.001c8.271,3.428,16.877,4.714,25.645,4.714 c13.416,0,27.206-3.011,40.715-5.963c12.715-2.777,25.863-5.648,37.734-5.648c11.871,0,25.019,2.871,37.734,5.648 c22.338,4.878,45.436,9.922,66.36,1.247c21.812-9.045,34.692-29.357,47.15-49.001c7.049-11.117,13.709-21.618,21.564-29.474 c7.856-7.855,18.357-14.515,29.474-21.564c19.645-12.458,39.957-25.341,49.002-47.153c8.675-20.921,3.632-44.019-1.246-66.357 C503.261,281.019,500.389,267.87,500.389,255.999z"></path>
                                                                                <path d="M166.087,345.913c2.017,2.017,4.661,3.025,7.303,3.025c2.642,0,5.286-1.009,7.301-3.025l165.222-165.222 c4.033-4.031,4.033-10.57,0-14.603s-10.57-4.033-14.604,0L166.087,331.31C162.055,335.341,162.055,341.88,166.087,345.913z"></path>
                                                                                <path d="M200.927,238.79c20.877,0,37.863-16.985,37.863-37.863c0-20.878-16.986-37.863-37.863-37.863 s-37.863,16.985-37.863,37.863C163.064,221.805,180.05,238.79,200.927,238.79z M200.927,183.716 c9.489,0,17.211,7.72,17.211,17.211c0,9.491-7.72,17.211-17.211,17.211c-9.491,0-17.211-7.72-17.211-17.211 C183.717,191.436,191.437,183.716,200.927,183.716z"></path>
                                                                                <path d="M311.075,348.938c20.877,0,37.863-16.985,37.863-37.863c0-20.879-16.986-37.863-37.863-37.863 s-37.863,16.985-37.863,37.863C273.212,331.953,290.198,348.938,311.075,348.938z M311.075,293.864 c9.489,0,17.211,7.72,17.211,17.211c0,9.491-7.72,17.211-17.211,17.211c-9.491,0-17.211-7.72-17.211-17.211 C293.864,301.584,301.584,293.864,311.075,293.864z"></path>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                            Offers & Deals
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" to={"/LocalStores"}>
                                                            <i class="bi bi-geo"></i>
                                                            Local Stores
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            className="dropdown-item"
                                                            to={"/redeem-payback-points"}
                                                        >
                                                            <i class="bi bi-ui-radios-grid"></i>
                                                            Redeem Payback Points
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            className="dropdown-item"
                                                            to={"/wallet-transfer"}
                                                        >
                                                            <svg
                                                                className="custom-svg"
                                                                height="64px"
                                                                width="64px"
                                                                version="1.1"
                                                                id="Layer_1"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                viewBox="-83.28 -83.28 656.46 656.46"
                                                                xmlSpace="preserve"
                                                                fill="#000000"
                                                            >
                                                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                                                <g
                                                                    id="SVGRepo_tracerCarrier"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                ></g>
                                                                <g id="SVGRepo_iconCarrier">
                                                                    <g>
                                                                        <g>
                                                                            <path d="M90.3,96.956c-3.8,3.9-3.8,10.2,0.2,14c3.9,3.8,10.2,3.8,14-0.2c35.8-36.7,83.8-57.2,135-57.8 c50-0.6,97.4,18,133.7,52.2l-18.2,0.2c-5.5,0.1-9.8,4.5-9.8,10c0.1,5.4,4.5,9.8,9.9,9.8h0.1l42.2-0.5c5.5-0.1,9.8-4.5,9.8-10 l-0.4-42.1c-0.1-5.4-4.5-9.8-9.9-9.8h-0.1c-5.5,0.1-9.8,4.5-9.8,10l0.2,18.4c-40.1-38-92.6-58.6-147.9-58 C182.7,33.956,129.8,56.556,90.3,96.956z"></path>
                                                                            <path d="M378.9,379.056c-35.8,36.7-83.8,57.2-135,57.8c-50,0.6-97.4-18-133.7-52.2l18.2-0.2 c5.5-0.1,9.8-4.5,9.8-10c-0.1-5.4-4.5-9.8-9.9-9.8h-0.1l-42.2,0.5c-5.5,0.1-9.8,4.5-9.8,10l0.5,42.2c0.1,5.4,4.5,9.8,9.9,9.8h0.1 c5.5-0.1,9.8-4.5,9.8-10l-0.2-18.4c39.5,37.4,90.9,58,145.4,58c0.8,0,1.7,0,2.5,0c56.5-0.7,109.5-23.3,149-63.7 c3.8-3.9,3.8-10.2-0.2-14C389,375.056,382.8,375.156,378.9,379.056z"></path>
                                                                            <path d="M78.2,240.256c0-3.3-1.7-6.4-4.4-8.2c-1.8-1.2-2.8-3.2-2.8-5.3v-36.1c0-12.5,10.1-22.6,22.6-22.6 h7.8c12.5,0,22.6,10.1,22.6,22.6v36.1c0,2.1-1.1,4.1-2.8,5.3c-2.8,1.8-4.4,4.9-4.4,8.2v34.8c0,4.4,2.5,8.4,6.5,10.3 c4.5,2.2,27.8,14,49.4,31.7c1.7,1.4,2.7,3.6,2.7,5.9v24.7c0,5.5,4.4,9.9,9.9,9.9s9.9-4.4,9.9-9.9v-24.7c0-8.2-3.6-15.9-10-21.2 c-18.9-15.6-39.2-26.9-48.6-31.8v-25.1c4.6-4.8,7.3-11.3,7.3-18.1v-36.1c0-23.4-19-42.4-42.4-42.4h-7.8c-23.4,0-42.4,19-42.4,42.4 v36.1c0,6.8,2.6,13.3,7.3,18.1v25.1c-9.5,4.9-29.7,16.3-48.6,31.8c-6.3,5.2-10,12.9-10,21.2v24.7c0,5.5,4.4,9.9,9.9,9.9 s9.9-4.4,9.9-9.9v-24.7c0-2.3,1-4.4,2.7-5.9c21.5-17.7,44.9-29.5,49.4-31.7c3.9-1.9,6.5-6,6.5-10.3v-34.8H78.2z"></path>
                                                                            <path d="M479.9,301.856c-18.9-15.6-39.2-26.9-48.6-31.8v-25.1c4.6-4.8,7.3-11.3,7.3-18.1v-36.1 c0-23.4-19-42.4-42.4-42.4h-7.8c-23.4,0-42.4,19-42.4,42.4v36.1c0,6.8,2.6,13.3,7.3,18.1v25c-9.5,4.9-29.7,16.3-48.6,31.8 c-6.3,5.2-10,12.9-10,21.2v24.7c0,5.5,4.4,9.9,9.9,9.9s9.9-4.4,9.9-9.9v-24.7c0-2.3,1-4.4,2.7-5.9c21.5-17.7,44.9-29.5,49.4-31.7 c3.9-1.9,6.4-6,6.4-10.3v-34.8c0-3.3-1.7-6.4-4.4-8.2c-1.8-1.2-2.8-3.2-2.8-5.3v-36.1c0-12.5,10.1-22.6,22.6-22.6h7.8 c12.5,0,22.6,10.1,22.6,22.6v36.1c0,2.1-1.1,4.1-2.8,5.3c-2.8,1.8-4.4,4.9-4.4,8.2v34.8c0,4.4,2.5,8.4,6.4,10.3 c4.5,2.2,27.9,14,49.4,31.7c1.7,1.4,2.7,3.6,2.7,5.9v24.7c0,5.5,4.4,9.9,9.9,9.9s9.9-4.4,9.9-9.9v-24.7 C489.8,314.756,486.2,307.056,479.9,301.856z"></path>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                            Wallet Transfer
                                                        </Link>
                                                    </li>
                                                    <div class="arrow"></div>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={"/BBPS"}>
                                                    BBPS
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={"/OurPartner"}>
                                                    Our Partners
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={"/WhyUs"}>
                                                    Why Us?
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={"/ContactUs"}>
                                                    Contact Us
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <div className="nav-link header-right d-lg-flex align-items-center">
                                                    <Link className="header-btn" onClick={onLoginClick}>
                                                        Login <i className="bi bi-arrow-right"></i>
                                                    </Link>
                                                </div>
                                            </li>
                                            <li className="nav-item">
                                                {/* Trigger Button */}
                                                <Link to={'#'} className="nav-link balance_link" onClick={openModal}>
                                                    <p className="mb-0" style={{ fontSize: "12px" }}>Balance:</p>
                                                    <p className="mb-0" style={{ fontWeight: "700", lineHeight: "6px", fontSize: "12px" }}>₹0 <i class="bi bi-plus" style={{ color: "#404040", fontSize: "14px" }}></i></p>
                                                </Link>

                                            </li>
                                            <li
                                                className={`nav-item dropdown ${isDropdownOpen ? "show" : ""}`}
                                                onMouseEnter={handleMouseEnter}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                <Link
                                                    className="nav-link dropdown-toggle"
                                                    to="#"
                                                    id="profileDropdown"
                                                    role="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded={isDropdownOpen ? "true" : "false"}
                                                >
                                                    <img src="/assets/Home/user-logo-new.svg" width={27} />
                                                    <img className="downimage" src="/assets/Home/menu-ham-icon.png" width={15} />
                                                </Link>
                                                <ul
                                                    className={`dropdown-menu profile-menu ${isDropdownOpen ? "show" : ""}`}
                                                    aria-labelledby="profileDropdown"
                                                >
                                                    <div className="">
                                                        {/* Header Section */}
                                                        <div className="dropdown-header">
                                                            <div className="float-end">
                                                                <Link to={''} className="help_link p-0">Help?</Link>
                                                            </div>
                                                            <h2 className="mb-1">Vijay Gupta</h2>
                                                            <p className="mb-0">vg670616@gmail.com</p>
                                                            <p>9358448803</p>


                                                            <div className="d-flex align-items-baseline justify-content-between">
                                                                <span>Available Balance: ₹0</span>
                                                                <button className="btn btn-primary btn-sm mt-2">Add</button>
                                                            </div>

                                                            <button className="border-0 kycBtn btn-sm mt-2">Complete Your KYC</button>
                                                        </div>

                                                        {/* List Items */}
                                                        <ul className="dropdown-list">
                                                            <li className="dropdown-item">
                                                                <Link to={'/mywallet'}>
                                                                    <i className="bi bi-wallet2"></i> My Wallet
                                                                </Link>
                                                            </li>
                                                            <li className="dropdown-item">
                                                                <Link to={'/history'}>
                                                                    <i className="bi bi-clock-history"></i> History
                                                                </Link>
                                                            </li>
                                                            <li className="dropdown-item">
                                                                <Link to={'/profilesetting'}><i className="bi bi-gear"></i> Profile Settings</Link>
                                                            </li>
                                                            <li className="dropdown-item">
                                                                <Link><i className="bi bi-box-arrow-right"></i> LogOut</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
           {isOpen && <AddMoney setIsOpen={setIsOpen} />}

        </>
    );
}
