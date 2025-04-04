import React, { useState, useEffect } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import axios from "axios";
import {
  FaMobileAlt,
  FaSatelliteDish,
  FaGasPump,
  FaUmbrella,
  FaGooglePlay,
  FaTrafficLight,
} from "react-icons/fa";
import { MdElectricBolt, MdCreditCard, MdCastForEducation, MdOutlineSubscriptions, MdOutlineElectricMeter } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import {
  GiGasStove,
  GiTap,
  GiTv,
  GiUsbKey,
  GiVikingLonghouse,
  GiWifiRouter,
  GiPayMoney,
} from "react-icons/gi";
import { HiCurrencyRupee, HiOutlineBuildingLibrary } from "react-icons/hi2";
import { CiCreditCard2 } from "react-icons/ci";
import { PiHospitalLight, PiHandDepositLight } from "react-icons/pi";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { LuBuilding2 } from "react-icons/lu";
import { BsHouses } from "react-icons/bs";
import { FaRegBuilding } from "react-icons/fa";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

const BillPayUI = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // All available menu items with unique icons
  const allItems = [
    { name: "Prepaid", icon: <FaMobileAlt size={24} />, path: "mobile", link: "/Mobile" },
    { name: "Prepaid", icon: <FaMobileAlt size={24} />, path: "mobile", link: "/mobile" },
    { name: "DTH", icon: <FaSatelliteDish size={24} />, path: "dth", link: "/DTH" },
    { name: "Electricity", icon: <MdElectricBolt size={24} />, path: "electricity", link: "/Electricity" },
    { name: "Credit Card", icon: <MdCreditCard size={24} />, path: "credit-card", link: "/credit-card" },
    { name: "Datacard", icon: <GiUsbKey size={24} />, path: "datacard", link: "/datacard" },
    { name: "Landline", icon: <BiPhoneCall size={24} />, path: "landline", link: "/landline" },
    { name: "Broadband", icon: <GiWifiRouter size={24} />, path: "broadband", link: "/broadband" },
    { name: "Piped Gas", icon: <FaGasPump size={24} />, path: "piped-gas", link: "/piped-gas" },
    { name: "Insurance", icon: <FaUmbrella size={24} />, path: "insurance", link: "/insurance" },
    { name: "Water", icon: <GiTap size={24} />, path: "water", link: "/water" },
    { name: "Google Play", icon: <FaGooglePlay size={24} />, path: "google-play", link: "/google-play" },
    { name: "Cable", icon: <GiTv size={24} />, path: "cable", link: "/cable" },
    { name: "Municipality", icon: <GiVikingLonghouse size={24} />, path: "municipality", link: "/municipality" },
    { name: "EMI", icon: <HiCurrencyRupee size={24} />, path: "emi", link: "/emi" },
    { name: "Housing", icon: <BsHouses size={24} />, path: "housing", link: "/housing" },
    { name: "LPG Booking", icon: <GiGasStove size={24} />, path: "lpg-booking", link: "/lpg-booking" },
    { name: "Challan", icon: <FaTrafficLight size={24} />, path: "challan", link: "/challan" },
    { name: "Education Fees", icon: <MdCastForEducation size={24} />, path: "education-fees", link: "/Education Fees" },
    { name: "Fastag", icon: <CiCreditCard2 size={24} />, path: "fastag", link: "/fastag" },
    { name: "Hospital", icon: <PiHospitalLight size={24} />, path: "hospital", link: "/hospital" },
    { name: "Donation", icon: <GiPayMoney size={24} />, path: "donation", link: "/donation" },
    { name: "Recurring Deposit", icon: <PiHandDepositLight size={24} />, path: "recurring-deposit", link: "/recurring-deposit" },
    { name: "Rental", icon: <RiMoneyRupeeCircleLine size={24} />, path: "rental", link: "/rental" },
    { name: "Subscription", icon: <MdOutlineSubscriptions size={24} />, path: "subscription", link: "/subscription" },
    { name: "NCMC", icon: <FaRegBuilding size={24} />, path: "ncmc", link: "/ncmc" },
    { name: "NPS", icon: <LuBuilding2 size={24} />, path: "nps", link: "/nps" },
    { name: "Prepaid Meter", icon: <MdOutlineElectricMeter size={24} />, path: "prepaid-meter", link: "/prepaid-meter" },
    { name: "Clubs and Associations", icon: <HiOutlineBuildingLibrary size={24} />, path: "clubs-associations", link: "/clubs-associations" },
  ];

  // Get active menu from URL
  const activePath = location.pathname.split('/')[2] || 'mobile';
  const activeMenu = allItems.find(item => item.path === activePath)?.name || 'Mobile';

  // Initialize states
  const [menuItems, setMenuItems] = useState([]);
  const [moreItems, setMoreItems] = useState([]);

  // Update menu items based on screen size
  const updateMenuItems = () => {
    const mobileView = window.innerWidth <= 768;
    setIsMobile(mobileView);
    
    const visibleCount = mobileView ? 3 : 9;
    const newMenuItems = allItems.slice(0, visibleCount);
    const newMoreItems = allItems.slice(visibleCount);
    
    setMenuItems([...newMenuItems, { name: "More", icon: `+${newMoreItems.length}` }]);
    setMoreItems(newMoreItems);
  };

  useEffect(() => {
    updateMenuItems();
    window.addEventListener("resize", updateMenuItems);
    return () => window.removeEventListener("resize", updateMenuItems);
  }, []);

  const handleServiceClick = async (service) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://finpay-backend.onrender.com/api/biller${service.link}`);
     
      // Navigate with URL parameters
      navigate({
        pathname: `/recharge/${service.path}`,
        search: `?category=${encodeURIComponent(response.data[0]?.billerCategory || '')}&alias=${encodeURIComponent(response.data[0]?.billerAliasName || '')}`
      });
    } catch (err) {
      setError(`Error fetching data for ${service.name}`);
      // Navigate with just the service name if API fails
      navigate({
        pathname: `/recharge/${service.path}`,
        search: `?service=${encodeURIComponent(service.name)}`
      });
    } finally {
      setLoading(false);
    }
  };



  const handleMenuClick = (menuName) => {
    if (menuName === "More") {
      setShowModal(true);
      return;
    }

    const selectedItem = allItems.find(item => item.name === menuName);
    if (selectedItem) {
      handleServiceClick(selectedItem);
    }
  };

  const handleMoreItemClick = (menuName) => {
    const selectedModalItem = moreItems.find(item => item.name === menuName);
    if (!selectedModalItem) return;

    // Call the API handler
    handleServiceClick(selectedModalItem);
    
    // Get the last visible item (before "More")
    const lastVisibleItem = menuItems[menuItems.length - 2];
    
    // Update menu items - replace last visible with selected modal item
    setMenuItems(prev => [
      ...prev.slice(0, -2), // All items except last visible and "More"
      selectedModalItem,    // Add selected modal item
      { name: "More", icon: `+${moreItems.length - 1}` } // Update count
    ]);
    
    // Update more items - replace selected with last visible
    setMoreItems(prev => [
      ...prev.filter(item => item.name !== menuName), // Remove selected
      lastVisibleItem                                // Add last visible
    ]);
    
    setShowModal(false);
  };

  return (
    <>
      <nav className="py-4 bg-light border-bottom" style={{ marginTop: "95px" }}>
        <Container>
          {/* {loading && <div className="text-center">Loading...</div>}
          {error && <div className="text-center text-danger">{error}</div>} */}
          <Row className="text-center">
            {menuItems.map((item, index) => (
              <Col
                key={`${item.name}-${index}`}
                onClick={() => handleMenuClick(item.name)}
                className="menu-item"
                style={{ cursor: "pointer" }}
              >
                <div
                  className={`d-flex flex-column align-items-center ${
                    item.name === activeMenu ? "active" : ""
                  }`}
                >
                  <div style={{
                    color: item.name === activeMenu 
                      ? "var(--themeht-primary-color)" 
                      : "var(--themeht-primary-color)"
                  }}>
                    {typeof item.icon === 'string' ? item.icon : item.icon}
                  </div>
                  <p
                    className="mb-0"
                    style={{
                      color: item.name === activeMenu 
                        ? "var(--themeht-primary-color)" 
                        : "var(--themeht-primary-color)",
                      fontWeight: "bold",
                      position: "relative",
                      display: "inline-block",
                    }}
                  >
                    {item.name}
                    {item.name === activeMenu && (
                      <span
                        style={{
                          position: "absolute",
                          bottom: "-5px",
                          left: "0",
                          right: "0",
                          height: "4px",
                          backgroundColor: "var(--themeht-primary-color)",
                          borderRadius: "20px",
                        }}
                      ></span>
                    )}
                  </p>
                </div>
              </Col>
            ))}
            <Col xs="auto">
              <img
                height={40}
                src="https://static.mobikwik.com/appdata/operator_icons/bbps_v2.png"
                alt="BBPS logo"
                className="mt-1"
              />
            </Col>
          </Row>
        </Container>
      </nav>
      
      <Outlet />
      
      <Modal show={showModal} onHide={() => setShowModal(false)} modal-dialog modal-xl>
        <Modal.Body>
          <Container>
            <Row className="text-center">
              {moreItems.map((item, index) => (
                <Col
                  xs={6}
                  md={4}
                  key={`more-${index}`}
                  className="d-flex flex-column align-items-center my-3"
                  onClick={() => handleMoreItemClick(item.name)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="icon" style={{ fontSize: "24px", color: "#872D67" }}>
                    {item.icon}
                  </div>
                  <p 
                    className="mb-0 mt-2" 
                    style={{ 
                      color: "#872D67",
                      fontSize: "0.9rem"
                    }}
                  >
                    {item.name}
                  </p>
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