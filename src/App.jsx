import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Listings from "./components/Listings";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Footer />
    </div>
  );
}

export default App;
