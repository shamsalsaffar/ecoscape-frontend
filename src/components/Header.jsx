import Button from "./Button";
import "../styles/header.css";
import User from "../icons/User";
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
    justifyContent: "space-between",  // يعطي توزيع أفضل
    padding: "0 2rem",                 // يعطي مسافة من اليمين واليسار
    width: "100%",
    gap: "4rem",                       // gap داخل JSX
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
            to="/viewAllAccomodations"
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
            text ="Become A Host"
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
              marginRight:"2rem"
            }}
          />
           
           <Button
            onClick={toggleDropdown}
            className="icon-button"
            style={{
              padding: 0,              
              margin: 0,                
              borderRadius: "12px",
              width: "50px",
              height: "55px",
              backgroundColor: "#fff",  
              display: "flex",          
              justifyContent: "center",
              alignItems: "center",
              border: "none"
              
              
            }}
            text={<User className="user-icon" />}   
          />

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


/* const Header = ({ onFetch }) => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest('.dropdown-menu') && !e.target.closest('.icon-button')) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', closeDropdown);
    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, []);

  const handleClick = () => {
    navigate("/host"); // المسار هنا يجب أن يتطابق مع /host في App.jsx
  };
 */
