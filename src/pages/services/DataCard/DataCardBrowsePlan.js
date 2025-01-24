import React, { useState } from "react";
import { Dropdown, Table, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const DataCardBrowsePlan = () => {
  const [selectedOperator, setSelectedOperator] = useState("Jio");
  const [selectedRegion, setSelectedRegion] = useState("Panjab");
  const [selectedCategory, setSelectedCategory] = useState("Smart Phone");

  const categories = [
    "Smart Phone",
    "Jio Phone",
    "International Roaming",
    "Top up",
    "Special Offer",
  ];

  const plans = [
    {
      talktime: "-",
      validity: "14 days",
      description:
        "True 5G Unlimited Plan\nData: 2 GB/day\nVoice: Unlimited Calls\nSMS: 100 SMS/day\nComplimentary subscription to Jio Apps",
      price: "₹198",
    },
    {
      talktime: "-",
      validity: "18 days",
      description:
        "Data: 1.5 GB/day\nVoice: Unlimited Calls\nSMS: 100 SMS/day\nComplimentary subscription to Jio Apps",
      price: "₹199",
    },
    {
      talktime: "-",
      validity: "18 days",
      description:
        "Data: 1.5 GB/day\nVoice: Unlimited Calls\nSMS: 100 SMS/day\nComplimentary subscription to Jio Apps",
      price: "₹199",
    },
    {
      talktime: "-",
      validity: "18 days",
      description:
        "Data: 1.5 GB/day\nVoice: Unlimited Calls\nSMS: 100 SMS/day\nComplimentary subscription to Jio Apps",
      price: "₹199",
    },
  ];

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Dropdown>
          <Dropdown.Toggle variant="outline-primary" id="dropdown-operator">
            {selectedOperator}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setSelectedOperator("Jio")}>
              Jio
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSelectedOperator("Airtel")}>
              Airtel
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle variant="outline-primary" id="dropdown-region">
            {selectedRegion}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setSelectedRegion("Bihar/Jharkhand")}>
              Bihar/Jharkhand
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSelectedRegion("Delhi NCR")}>
              Delhi NCR
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <input
          type="text"
          className="form-control w-25"
          placeholder="Search by Amount"
        />
      </div>

      <div className="d-flex" style={{ height: "50vh" }}>
        {/* side bar */}
        <div
          className="text-white p-2"
          style={{ width: "250px", minWidth: "210px" }}
        >
          <Nav className="flex-column">
            {categories.map((category, index) => (
              <Nav.Link
                key={index}
                href="#"
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category ? "active bg-primary" : ""
                }`}
                style={{
                  fontSize: "16px",
                  padding: "10px 15px",
                  cursor: "pointer",
                  display: "inline-block",
                  color: selectedCategory === category ? "white" : "black",
                  borderRadius: selectedCategory === category ? "5px" : "0px",
                }}
              >
                {category}
              </Nav.Link>
            ))}
          </Nav>
        </div>

        {/* Main Content */}
        <div className="flex-grow-1 p-2">
          {/* Plans Table */}
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
                      {plan.description}
                    </td>
                    <td>
                      <div className="d-flex justify-content-between align-items-center">
                        <span>{plan.price}</span>
                        <button
                          className="btn btn-primary btn-sm ms-2"
                          onClick={() => alert(`Plan selected: ${plan.price}`)}
                        >
                          Select
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataCardBrowsePlan;
