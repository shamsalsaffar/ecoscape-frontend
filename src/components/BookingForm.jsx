// först import use state 
// bookingform
// funcktion som ska use

import { submitBooking } from "../api/bookingsService";
import Button from "./Button";
import { useBookingForm } from "../hooks/useBookingForm";
import { useBooking } from "../contexts/BookingContext";
import "../styles/bookingForm.css";
import { AuthContext } from "../contexts/AuthContext";
import { useAuth } from "../hooks/useAuth";
import { useLocation , useNavigate} from "react-router-dom";
import React, { useEffect, useState } from "react";



const BookingForm = ({ listingId: propListingId, goToNextStep }) => {

  const location = useLocation();
  const navigate = useNavigate();
  const [listingId, setListingId] = useState(null);
  const [error, setError] = useState(null);
 
  const { user } = useAuth();

  

// USE useBookingform  HOOKS 
const {
  formData,
  handleChange,
  errors,
  validateForm,
} = useBookingForm("bookings"); // use bookinf som type here

const {updateBookingData}=useBooking();


useEffect(() => {
  const param = new URLSearchParams(location.search);
  const id = param.get("listingId");

  if (id) {
    setListingId(id);
    localStorage.setItem("listingId", id); // Save for fallback
    setError(null);
  } else {
    const storedId = localStorage.getItem("listingId");
    
    if (storedId) {
      setListingId(storedId);
      setError(null);
    } else {
      setError("(Listing ID is missing).");
    }
  }
 // تحقق من وجود المستخدم
 if (propListingId) {
  setListingId(propListingId);
} else {
  // fallback from query string
  const param = new URLSearchParams(location.search);
  const id = param.get("listingId");
  if (id) setListingId(id);
}
}, [propListingId, location.search]);






console.log("Listing ID from URL:", listingId);
console.log("user ID from URL:", user);





  
// TO CONNECT BACKEND CONNECT FUNCATION THAT IS IN BOOKKINGS SERVICE
  const handleSubmit = async(e) =>{
    e.preventDefault();
    
    if (!validateForm()) return;

    if(!listingId){
      alert("Listing ID missing, booking cannot be completed");
      return;
    }
    if (!user || !user.userId) {
      alert("You must be logged in to complete a booking.");
      navigate("/login", {state:{form:location}});
     
      return;
    }


    const enrichedFormData={
      ...formData,
      userId: user.userId,

    
      
    };
    
    console.log("Current user:", user);
    console.log("formData being sen:", enrichedFormData)

    
     try {
      const token = localStorage.getItem("authToken"); // الحصول على التوكن من localStorage
      const result = await submitBooking(listingId,enrichedFormData, token);
      alert ("Booking success");

      const fullBookingData={
        ...enrichedFormData,
        bookingId: result.bookingId
      };
      updateBookingData(fullBookingData); //update context with new booking
      goToNextStep(fullBookingData

      ); // go to next step

    } catch (error){
      console.error("Booking error: ", error );
      if (error.response && error.response.data){
        alert("Booking faild:\n" + error.response.data);
      }else{
      alert ("An error occurred:" + error.message);
    }
  }
  }; 

 

  return (
    <div className ="booking-form">
      <div className="booking-container">
      <div className="booking-text">Fil in your details </div>
      <section className="booking-section"> <span style={{ fontSize: "20px", color: "#e67e22", marginRight: "6px" }}>⚠️</span>
        almost done! You only need to fill in the required fields marked with 
        <span className="required-star"> *</span>
         </section>
         <p>Listing ID: {listingId}</p>
      <form  className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name 
          <span className="required-star"> *</span>
          </label>
          <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          autoComplete="off" 
          />
        </div>
        <div className="form-group">
          <label>Lsat Name
          <span className="required-star"> *</span>
          </label>
          <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          autoComplete="off" 
          />
        </div>
        <div className="form-group">
          <label>Email
          <span className="required-star"> *</span>
          </label>
          <input
          type="email"
          name="usersContactEmail"
          value={formData.usersContactEmail}
          onChange={handleChange}
          autoComplete="off" 
          />
        </div>
        <div className="form-group">
          <label>Phon Number
          <span className="required-star"> *</span>
          </label>
          <input
          type="tel"
          name="usersContactPhoneNumber"
          value={formData.usersContactPhoneNumber}
          onChange={handleChange}
          autoComplete="off" 
          />
        </div>
        <div className="form-group">
          <label>Check-in
          <span className="required-star"> *</span> </label>
          <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          autoComplete="off" 
          />
        </div>
        <div className="form-group">
          <label>Check-out
          <span className="required-star"> *</span>
          </label>
          <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          autoComplete="off" 
          />
        </div>
        <div className="form-group">
          <label>Guests
          <span className="required-star"> *</span>
          </label>
          <input
          type="number"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          autoComplete="off" 
          min="1"
          max="10"
          />
        </div>
        {errors.length >0 && (
          <div>
            <ul>
              {errors.map((error,index) => (
                <li key={index} style={{color: 'red'}} >{error}</li>

              ))}
            </ul>
          </div>
        )}
        <Button className="button-form" type="submit"
        text="Send"
       
        variant="primary"
        disabled={false}
        />

      </form>
      </div>
      
    </div>
  )
}

export default BookingForm

