import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Listings from "./components/Listings";
import "./styles/header.css";
import "./styles/home.css";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Helpcenter from "./components/Helpcenter";
import HostPage from "./components/HostPage";
import Banner from "./components/Banner";
import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="layout">
          <Header />
          <Routes>
            <Route path="/" element={<Banner />} />

            <Route path="/listings" element={<Listings />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/helpcenter" element={<Helpcenter />} />
            <Route path="/host" element={<HostPage />} />
          </Routes>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
