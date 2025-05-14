import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ListingPage from "./pages/ListingPage";
import ViewAllAccomodations from "./pages/ViewAllAccomodations";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Helpcenter from "./pages/Helpcenter";
import HostPage from "./pages/HostPage";
import { AuthProvider } from "./contexts/AuthContext";

import "./styles/home.css";
const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              {/* public routes */}
              <Route path="/" element={<Home />} />
              <Route path="/listing/:id" element={<ListingPage />} />
              <Route
                path="view-all-accomodations"
                element={<ViewAllAccomodations />}
              />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/helpcenter" element={<Helpcenter />} />
              <Route path="/host" element={<HostPage />} />
              <Route path="/profile/:userId" element={<Profile />} />
              {/* protected routes for all authenticated users */}

              {/* protected routes for admins only */}
            </Routes>

            <Footer />
          </main>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
