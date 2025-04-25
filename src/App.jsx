import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Listings from "./components/Listings";
import { useState } from "react";
import "./styles/header.css";  // Kontrollera att dessa CSS-filer finns
import "./styles/home.css";


import Signup from "./components/Signup";
import Login from "./components/Login";
import Helpcenter from "./components/Helpcenter";
import HostPage from "./components/HostPage";

function App() {
  const [listings, setListings] = useState([]);

  const fetchListings = () => {
    fetch("http://localhost:8080/api/listings")
    .then((res) => res.json()) // Konverterar svaret till JSON-format
    .then((data) => setListings(data)) // Uppdaterar state med listorna
    .catch((err) => console.error("Error fetching listings", err)); // Fångar och loggar eventuella fel
};

  return (
    <Router>
      <div className="layout">
        <Header onFetch={fetchListings} />
        <Routes>
          {/* Omdirigera till startsidan */}
          <Route path="/" element={<Navigate to="/home" replace />} />

          {/* Startsidan - visar listings */}
          <Route
            path="/home"
            element={<Home listings={listings} onFetch={fetchListings} />}
          />

          {/* Reservsida: visa alla listor i enklare format  */}
          <Route
            path="/listings"
            element={
              <Listings listings={listings}
              onFetch={fetchListings}/>}
              />
              // Vi skickar `fetchListings` till Signup-sidan så att när användaren registrerar sig framgångsrikt,
              // så hämtas och uppdateras listan med tillgängliga listings. Detta säkerställer att användaren
             // ser de senaste listings efter att ha registrerat sig.

            <Route
            path="/signup-page"
            element={<Signup  onFetch={fetchListings} />}
          />
          <Route
          path="/login-page"
          element={<Login onFetch={fetchListings} />} 
          />
           <Route
          path="/helpcenter-page"
          element={<Helpcenter onFetch={fetchListings} />} 
          />
          <Route
          path="/host-page"
          element={<HostPage />}
          />
          
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
