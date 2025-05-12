import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ListingPage from "./pages/ListingPage";
import ViewAllAccomodations from "./pages/ViewAllAccomodations";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Helpcenter from "./pages/Helpcenter";
import HostPage from "./pages/HostPage";
import ListingDetails from "./pages/ListingDetails";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./router/ProtectedRoute";

import "./styles/home.css";
import Bookings from "./pages/Bookings";

import { BookingProvider } from "./contexts/BookingContext";
import BookingForm from "./components/BookingForm";
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

              <Route path="/" element={<Home />} />
              <Route path="/listing/:id" element={<ListingPage />} /> 
             {/* <Route path="/listings/:listingId" element={<ListingDetails />} />  */}
              <Route
                path="/viewAllAccomodations"
                element={<ViewAllAccomodations />}
              />

              <Route path="/signup-page" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/helpcenter" element={<Helpcenter />} />
              <Route path="/host" element={<HostPage />} />
              
              {/* protected routes for all authenticated users */}
              <Route element={<ProtectedRoute requiredRoles={['USER']}/>}>
              <Route path="/bookings/:listingId" element={<Bookings/>}/>
              <Route path="/booking" element={<BookingForm/>}/>
             
              

              </Route>
              

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
