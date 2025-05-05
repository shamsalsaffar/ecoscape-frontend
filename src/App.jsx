import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ViewAllAccomodations from "./pages/ViewAllAccomodations";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Helpcenter from "./pages/Helpcenter";
import HostPage from "./pages/HostPage";
import { AuthProvider } from "./contexts/AuthContext";

import "./styles/home.css";
import Bookings from "./pages/Bookings";
import ProtectedBookingRoute from "./router/ProtectedBookingRoute";
import { BookingProvider } from "./contexts/BookingContext";
const App = () => {

  return (
    <BrowserRouter>
      <AuthProvider>
        <BookingProvider>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              {/* public routes */}
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home />} />
              <Route path="/viewAllAccomodations" element={<ViewAllAccomodations />} />

              <Route path="/signup-page" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/helpcenter" element={<Helpcenter />} />
              <Route path="/host" element={<HostPage />} />
              
              {/* protected routes for all authenticated users */}
              <Route path="/bookings" element={
                <ProtectedBookingRoute>
                  <Bookings/>
                </ProtectedBookingRoute>
              }
              />

              {/* protected routes for admins only */}

            </Routes>

            <Footer />
          </main>
        </div>
        </BookingProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
