import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Listings from "./components/Listings";
import "./styles/header.css";
import "./styles/home.css";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Helpcenter from "./components/Helpcenter";
import HostPage from "./components/HostPage";
import Banner from "./components/Banner";
import { useState } from "react";
import ListingCollection from "./components/ListingCollection";
import Button from "./components/Button";
import { RiFontSize } from "react-icons/ri";
import "./styles/home.css";

const App = () => {
  const [listings, setListings] = useState([]);

  const fetchListings = () => {
    fetch("http://localhost:8080/api/listings")
      .then((res) => res.json())
      .then((data) => setListings(data))
      .catch((err) => console.error("Error fetching listings", err));
  };

  return (
    <Router>
      <div className="layout">
        <Header onFetch={fetchListings} />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route
            path="/home"
            element={
              <>
                <Banner />
                <ListingCollection></ListingCollection>
                <div homepage-button-container>
                  <Button
                    className="show-more-button"
                    style={{
                      display: "flex",
                      justifySelf: "center",
                      borderRadius: "80px",
                      paddingLeft: "8rem",
                      paddingRight: "8rem",
                      paddingTop: "2rem",
                      paddingBottom: "2rem",
                      backgroundColor: "#49613D",
                      color: "white",
                      width: "auto",
                      fontSize: "1rem",
                      cursor: "pointer",
                      border: "none",
                      textTransform: "uppercase",
                      fontFamily: "Montserrat",
                      fontWeight: "600",
                    }}
                  >
                    Show more
                  </Button>
                </div>
                <Home listings={listings} onFetch={fetchListings} />
              </>
            }
          />
          <Route
            path="/listings"
            element={<Listings listings={listings} onFetch={fetchListings} />}
          />
          <Route
            path="/signup-page"
            element={<Signup onFetch={fetchListings} />}
          />
          <Route
            path="/login-page"
            element={<Login onFetch={fetchListings} />}
          />
          <Route
            path="/helpcenter-page"
            element={<Helpcenter onFetch={fetchListings} />}
          />
          <Route path="/host-page" element={<HostPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
