import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import {FaMobileAlt,FaSatelliteDish,FaGasPump,FaUmbrella,FaGooglePlay,FaTrafficLight,} from "react-icons/fa";
import { MdElectricBolt, MdCreditCard } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { GiGasStove,GiTap,GiTv,GiUsbKey,GiVikingLonghouse,GiWifiRouter,} from "react-icons/gi";
import MobileRechargeUI from "./Mobile_Recharge/MobileRechargeUI";
import DTHRecharge from "./DTH_Recharge/DTHRecharge";
import ElectricityBillPayment from "./ElectricityBillPayment/ElectricityBillPayment";
import CreditCardPayment from "./CreditCardPayment/CreditCardPayment";
import DataCardRecharge from "./DataCard/DataCardRecharge";
import Landline from "./Landline/Landline";
import Broadband from "./Broadband/Broadband";
import PipedGas from "./PipedGas/PipedGas";
import Insurance from "./Insurance/Insurance";
import Water from "./Water/Water"
import { HiCurrencyRupee } from "react-icons/hi";
import { FaHouseChimney } from "react-icons/fa6";
import GooglePlay from "./GooglePlay/GooglePlay";
import Cable from "./Cable/Cable";
import Municipality from "./Municipality/Municipality";
import Emi from "./EMI/Emi";
import TrafficChallan from "./TrafficChallan/TrafficChallan";
import HousingBillPayment from "./HousingBillPayment/HousingBillPayment";
import LpgBooking from "./LpgBooking/LpgBooking";

// import { Link } from 'react-router-dom'



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
    // { name: "More", icon: "+8" },
  ]);

  const [moreItems, setMoreItems] = useState([
    { name: "Water", icon: <GiTap size={24}/> },
    { name: "Google Play", icon: <FaGooglePlay size={24}/> },
    { name: "Cable", icon: <GiTv size={24}/> },
    { name: "Municipality", icon: <GiVikingLonghouse size={24}/> },
    { name: "EMI", icon: <HiCurrencyRupee size={24}/> },
    { name: "Challan", icon: <FaTrafficLight size={24}/> },
    { name: "Housing", icon: <FaHouseChimney size={24}/> },
    { name: "LPG Booking", icon: <GiGasStove size={24}/> },
  ]);

  const updateMenuItems = () => {
    const moreCount = moreItems.length; 
    const updatedMenuItems = [
      ...menuItems.slice(0, -1),
      { name: "More", icon: `+${moreCount}` },
    ];
    setMenuItems(updatedMenuItems);
  };

  const handleMenuClick = (menu) => {
    if (menu === "More") {
      setShowModal(true);
    } else {
      setActiveMenu(menu);
    }
  };

  const handleMoreItemClick = (menu) => {
    if (!menuItems.find((item) => item.name === menu)) {
      const selectedModalItem = moreItems.find((item) => item.name === menu);
      const lastNavbarItem = menuItems[menuItems.length - 2]; // Last item before "More"

      // Update navbar: replace last item with selected modal item
      setMenuItems((prev) => [
        ...prev.slice(0, -2), // Remove last item and "More"
        { name: selectedModalItem.name, icon: selectedModalItem.icon }, // Add selected item
        { name: "More", icon: `+${moreItems.length - 1}` }, // Update "More" with new count
      ]);

      // Update modal: remove selected item and add last navbar item
      setMoreItems((prev) => [
        ...prev.filter((item) => item.name !== menu), // Remove selected modal item
        { name: lastNavbarItem.name, icon: lastNavbarItem.icon }, // Add last navbar item
      ]);
    }

    setActiveMenu(menu); // Set the active menu to the selected item
    setShowModal(false); // Close the modal
  };

  React.useEffect(() => {
    updateMenuItems();
  }, [moreItems]); // Update "More" count whenever modal items change

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
                <div
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
                </div>
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
        {activeMenu === "Water" && <Water/>}
        {activeMenu === "Google Play" && <GooglePlay/>}
        {activeMenu === "Cable" && <Cable/>}
        {activeMenu === "Municipality" && <Municipality/>}
        {activeMenu === "EMI" && <Emi/>}
        {activeMenu === "Challan" && <TrafficChallan/>}
        {activeMenu === "Housing" && <HousingBillPayment/>}
        {activeMenu === "LPG Booking" && <LpgBooking/>}
        
      </Container>

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
