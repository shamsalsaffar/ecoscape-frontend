// components/ProfileBackground.jsx
import React from "react";
import "../styles/profilebackground.css";

const ProfileBackground = ({ children, minWidth, minHeight }) => {
  return (
    <div
      className="profile-container"
      style={{
        minWidth,
        minHeight,
      }}
    >
      {children}
    </div>
  );
};

export default ProfileBackground;
