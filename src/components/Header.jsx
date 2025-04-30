import Button from "./Button";
import "../styles/header.css";
import { PiUserListBold } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import HostPage from "../pages/HostPage";

const Header = ({ onFetch }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    // kan använda denna function för become a host i framtiden
    navigate("/host"); // flytta till host request sidan
  };
  const [dropdownOpen, setDropdownOpen] = useState(false); // skapar state för dropdown menyn
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); // Växla mellan true och false
  };

  return (
    <header className="header">
      <h1>ECOSCAPE</h1>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding: "0 1rem",
          width: "100%",
        }}
      >
        {/* Vänstra länkar */}
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <Link
            to="/"
            onClick={onFetch}
            style={{
              color: "white",
              cursor: "pointer",
              textDecoration: "none",
              marginLeft: "2rem",
            }}
          >
            Home
          </Link>

          <Link
            to="/listings"
            onClick={onFetch}
            style={{
              color: "white",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            View All Accommodation
          </Link>
        </div>

        {/* Högra knappar */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}>
          <Button
            onClick={handleClick}
            className="icon-button"
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "20px",
              backgroundColor: "white",
              paddingRight: "1rem",
              paddinLeft: "1rem",
              fontSize: "1rem",
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
              fontFamily: "Montserrat",
              fontWeight: "600",
            }}
          >
            Become A Host
          </Button>
          <Button
            onClick={toggleDropdown}
            className="icon-button"
            style={{
              paddingRight: "1rem",
              paddingLeft: "1rem",
              borderRadius: "20px",
              textAlign: "center",
              color: "#49613D",
              paddingTop: "0.2rem",
              paddingBottom: "0.2rem",
            }}
          >
            <PiUserListBold className="button" size="2em" />
          </Button>
          {dropdownOpen && ( // om dropdown är true , visa menyn med länkar
            <div className="dropdown-menu">
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
              <Link to="/helpcenter">Help Center</Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
