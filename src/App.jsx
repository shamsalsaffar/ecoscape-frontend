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
