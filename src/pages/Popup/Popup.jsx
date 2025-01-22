import React from "react";
import "./Popup.css";

const Popup = ({ closePopup, children }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={closePopup}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
