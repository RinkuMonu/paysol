import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import {
  FaMobileAlt,
  FaSatelliteDish,
  FaGasPump,
  FaUmbrella,
  FaGooglePlay,
  FaTrafficLight,
} from "react-icons/fa";
import { MdElectricBolt, MdCreditCard } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import {
  GiGasStove,
  GiTap,
  GiTv,
  GiUsbKey,
  GiVikingLonghouse,
  GiWifiRouter,
} from "react-icons/gi";
import MobileRechargeUI from "./Mobile_Recharge/MobileRechargeUI";
import DTHRecharge from "./DTH_Recharge/DTHRecharge";
import ElectricityBillPayment from "./ElectricityBillPayment/ElectricityBillPayment";
import CreditCardPayment from "./CreditCardPayment/CreditCardPayment";
import DataCardRecharge from "./DataCard/DataCardRecharge";
import Landline from "./Landline/Landline";
import Broadband from "./Broadband/Broadband";
import PipedGas from "./PipedGas/PipedGas";
import Insurance from "./Insurance/Insurance";
import { HiCurrencyRupee } from "react-icons/hi";
import { FaHouseChimney } from "react-icons/fa6";
import { Link } from 'react-router-dom'


const BillPayUI = () => {
  const [activeMenu, setActiveMenu] = useState("Mobile");
  const [showModal, setShowModal] = useState(false);
  const [menuItems, setMenuItems] = useState([
    { name: "Mobile", icon: <FaMobileAlt size={24} /> },
    { name: "DTH", icon: <FaSatelliteDish size={24} /> },
    { name: "Electricity", icon: <MdElectricBolt size={24} /> },
    { name: "Credit Card", icon: <MdCreditCard size={24} /> },
    { name: "Datacard", icon: <GiUsbKey size={24} /> },
    { name: "Landline", icon: <BiPhoneCall size={24} /> },
    { name: "Broadband", icon: <GiWifiRouter size={24} /> },
    { name: "Piped Gas", icon: <FaGasPump size={24} /> },
    { name: "Insurance", icon: <FaUmbrella size={24} /> },
    { name: "More", icon: "+8" },
  ]);

  const moreItems = [
    { name: "Water", icon: <GiTap /> },
    { name: "Google Play", icon: <FaGooglePlay /> },
    { name: "Cable", icon: <GiTv /> },
    { name: "Municipality", icon: <GiVikingLonghouse /> },
    { name: "EMI", icon: <HiCurrencyRupee /> },
    { name: "Challan", icon: <FaTrafficLight /> },
    { name: "Housing", icon: <FaHouseChimney /> },
    { name: "LPG Booking", icon: <GiGasStove /> },
  ];

  const handleMenuClick = (menu) => {
    if (menu === "More") {
      setShowModal(true);
    } else {
      setActiveMenu(menu);
    }
  };

  const handleMoreItemClick = (menu) => {
    if (!menuItems.find((item) => item.name === menu)) {
      const newItem = moreItems.find((item) => item.name === menu);
      setMenuItems((prev) => [
        ...prev.slice(0, -1),
        { name: newItem.name, icon: newItem.icon },
        { name: "More", icon: "+8" },
      ]);
    }
    setActiveMenu(menu);
    setShowModal(false);
  };

  return (
    <>
      <nav className="py-3 bg-light border-bottom marginTop">
        <Container>
          <Row className="text-center">
            {menuItems.map((item) => (
              <Col
                key={item.name}
                onClick={() => handleMenuClick(item.name)}
                className="menu-item"
                style={{ cursor: "pointer" }}
              >
                <Link  to={`/${item.name.replace(" ", "").toLowerCase()}`}
                  className={`d-flex flex-column align-items-center ${
                    activeMenu === item.name ? "active" : ""
                  }`}
                >
                  <div
                    style={{
                      color: activeMenu === item.name ? "#0042A6" : "#6c757d",
                    }}
                  >
                    {item.icon}
                  </div>
                  <p
                    className="mb-0"
                    style={{
                      color: activeMenu === item.name ? "#0042A6" : "#6c757d",
                      fontWeight: activeMenu === item.name ? "bold" : "normal",
                      position: "relative",
                      display: "inline-block",
                    }}
                  >
                    {item.name}
                    {activeMenu === item.name && (
                      <span
                        style={{
                          position: "absolute",
                          bottom: "-5px",
                          left: "0",
                          right: "0",
                          height: "4px",
                          backgroundColor: "#0042A6",
                          borderRadius: "20px",
                        }}
                      ></span>
                    )}
                  </p>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </nav>

      <Container>
        {activeMenu === "Mobile" && <MobileRechargeUI />}
        {activeMenu === "DTH" && <DTHRecharge />}
        {activeMenu === "Electricity" && <ElectricityBillPayment />}
        {activeMenu === "Credit Card" && <CreditCardPayment />}
        {activeMenu === "Datacard" && <DataCardRecharge />}
        {activeMenu === "Landline" && <Landline />}
        {activeMenu === "Broadband" && <Broadband />}
        {activeMenu === "Piped Gas" && <PipedGas />}
        {activeMenu === "Insurance" && <Insurance />}
      </Container>

      {/* Modal for "More" */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Body>
          <Container>
            <Row className="text-center">
              {moreItems.map((item, index) => (
                <Col
                  xs={6}
                  md={4}
                  key={index}
                  className="d-flex flex-column align-items-center my-2"
                  onClick={() => handleMoreItemClick(item.name)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="icon" style={{ fontSize: "24px" }}>
                    {item.icon}
                  </div>
                  <p className="mb-0">{item.name}</p>
                </Col>
              ))}
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BillPayUI;
