
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



const BookingForm = ({goToNextStep, type, entityId}) => {


// USE useBookingform  HOOKS 
const {
  formData,
  handleChange,
  errors,
  validateForm,
} = useBookingForm(type,entityId); // use bookinf som type here

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  try {
    const response = await submitBooking(formData); // إرسال البيانات إلى السيرفر
    console.log("Booking submitted successfully", response);

    // انتقل إلى الخطوة التالية ومرر بيانات الحجز
    goToNextStep(formData);

  } catch (error) {
    console.error("Error submitting booking:", error);
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



