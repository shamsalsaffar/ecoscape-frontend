import React from "react";
import MyBookings from "./MyBookings";
import "../styles/modal.css";

const MyBookingsModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>❌</button>
        <MyBookings />
      </div>
    </div>
  );
};

export default MyBookingsModal;