import React, { useEffect, useState } from "react";
import { Dropdown, Table, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { useDispatch, useSelector } from "react-redux";
import { planFetch, clearPlans } from "../../../Features/Recharge/rechargeSlice";

const MobileBrowsePlans = ({ onPlanSelect }) => {
  const [selectedOperator, setSelectedOperator] = useState("airtel");
  const [selectedRegion, setSelectedRegion] = useState("1");
  const [selectedCategory, setSelectedCategory] = useState("Smart Phone");


  const operators = [
    { name: "Airtel", id: "1" },
    { name: "Jio", id: "140" },
    { name: "Vi", id: "4" },
    { name: "BSNL", id: "5" },
  ];
const api_key = "987b141e5d6e46d4768d6617f8c753bb"

console.log(api_key)

  const circles = [
    { name: "Andhra Pradesh", id: "1" },
    { name: "Assam", id: "2" },
    { name: "Bihar & Jharkhand", id: "3" },
    { name: "Chennai", id: "4" },
    { name: "Delhi & NCR", id: "5" },
    { name: "Gujarat", id: "6" },
    { name: "Haryana", id: "7" },
    { name: "Himachal Pradesh", id: "8" },
    { name: "Jammu & Kashmir", id: "9" },
    { name: "Karnataka", id: "10" },
    { name: "Kerala", id: "11" },
    { name: "Kolkata", id: "12" },
    { name: "Maharashtra & Goa (except Mumbai)", id: "13" },
    { name: "MP & Chattisgarh", id: "14" },
    { name: "Mumbai", id: "15" },
    { name: "North East", id: "16" },
    { name: "Orissa", id: "17" },
    { name: "Punjab", id: "18" },
    { name: "Rajasthan", id: "19" },
    { name: "Tamilnadu", id: "20" },
    { name: "UP(EAST)", id: "21" },
    { name: "UP(WEST) & Uttarakhand", id: "22" },
    { name: "West Bengal", id: "23" },
    { name: "All India (except Delhi/Mumbai)", id: "51" },
  ];
  

  const categories = [
    "Smart Phone",
    "Jio Phone",
    "International Roaming",
    "Top up",
    "Special Offer",
  ];

  const dispatch = useDispatch();
const { plans} = useSelector((state) => state.plans);

useEffect(() => {
  dispatch(planFetch({ op_id: selectedOperator, cir_id: selectedRegion }));

  return () => {
    dispatch(clearPlans()); // Clear data on unmount
  };
}, [selectedOperator, selectedRegion, dispatch]);

  

  return (
    <div className="container">
      {/* Filters Section */}
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
      <Dropdown className="mb-2 mb-md-0">
          <Dropdown.Toggle
            id="dropdown-operator"
            style={{ backgroundColor: "var(--themeht-primary-color)" }}
          >
            {operators.find((op) => op.id === selectedOperator)?.name || "Select Operator"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {operators.map((op) => (
              <Dropdown.Item key={op.id} onClick={() => setSelectedOperator(op.id)}>
                {op.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

         {/* Circle Dropdown */}
         <Dropdown className="mb-2 mb-md-0">
          <Dropdown.Toggle
            id="dropdown-region"
            style={{ backgroundColor: "var(--themeht-primary-color)" }}
          >
            {circles.find((circle) => circle.id === selectedRegion)?.name || "Select Region"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {circles.map((circle) => (
              <Dropdown.Item key={circle.id} onClick={() => setSelectedRegion(circle.id)}>
                {circle.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

   
        <div className="align-items-center">
          <input
            type="text"
            className="form-control  mb-2 mb-md-0 mt-2 align-items-center"
            placeholder="Search by Amount"
          />
        </div>
      </div>

      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 mb-3">
          <Nav className="flex-column p-2 ">
            {categories.map((category, index) => (
              <Nav.Link
                key={index}
                href="#"
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category
                    ? "active text-white"
                    : "text-dark"
                }`}
                style={{
                  fontSize: "16px",
                  padding: "10px 10px",
                  cursor: "pointer",
                  borderRadius: "5px",
                  backgroundColor:
                    selectedCategory === category
                      ? "var(--themeht-primary-color)"
                      : "#fff",
                }}
              >
                {category}
              </Nav.Link>
            ))}
          </Nav>
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          <div style={{ maxHeight: "50vh", overflowY: "auto" }}>
            <Table bordered hover responsive className="bg-white">
              <thead className="bg-light">
                <tr>
                  <th>Talktime</th>
                  <th>Validity</th>
                  <th>Description</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {plans.map((plan, index) => (
                  <tr key={index}>
                    <td>{plan.talktime}</td>
                    <td>{plan.validity}</td>
                    <td style={{ whiteSpace: "pre-wrap" }}>
                      {plan.planDescription}
                    </td>
                    <td>
                      <button
                        className=" align-items-center p-2 "
                        style={{
                          color: "white",
                          backgroundColor: "#872D67",
                          borderRadius: "8px",
                          outline: "none",
                        }}
                        onClick={() => onPlanSelect(plan)}
                      >
                        ₹{plan.amount}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileBrowsePlans;
