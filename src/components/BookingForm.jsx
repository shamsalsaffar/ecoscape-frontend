// först import use state 
// bookingform
// funcktion som ska use
import React from "react";
import { submitBooking } from "../api/bookingsService";
import Button from "./Button";
import { useBookingForm } from "../hooks/useBookingForm";
import { useBooking } from "../contexts/BookingContext";
import "../styles/bookingForm.css";
import { AuthContext } from "../contexts/AuthContext";



const BookingForm = ({goToNextStep}) => {

// USE useBookingform  HOOKS 
const {
  formData,
  handleChange,
  errors,
  validateForm,
} = useBookingForm("bookings"); // use bookinf som type here



const {bookingData,updateBookingData}=useBooking();
  
// TO CONNECT BACKEND CONNECT FUNCATION THAT IS IN BOOKKINGS SERVICE
  const handleSubmit = async(e) =>{
    e.preventDefault();
    if (!validateForm()) return;

    console.log("formData being sent:", formData);
   /*  try {
      const result = await submitBooking(formData);
      alert ("Booking success");
      updateBookingData(formData); //update context with new booking
      goToNextStep(formData); // go to next step

    } catch (error){
      alert ("An error occurred:" + error.message);
    }
  }; 
 */
  try{
    const result = await submitBooking({
      ...formData,
      userId: 1, 
    
      listingId: 4, // رقم مؤقت حتى يتم ربطه بالصفحة لاحقًا
      pricePerNight: 250.00,
    
    
    });
    alert ("Booking success");
    updateBookingData({
      ...formData,
      listingId: 4,
      pricePerNight: 250.00,
      
     
    });
    goToNextStep({
      ...formData,
      listingId: 4,
      pricePerNight: 250.00,
      
      
    });
  } catch (error){
    alert ("An error occurred:" + error.message);
  }
};

{/* <div className="login-page">
      <div className="login-container">
        <div className="login-text">Login or Sign up</div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="username"
              placeholder="Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
 */}
  

 


  return (
    <div className ="booking-form">
      <div className="booking-container">
      <div className="booking-text">Fil in your details </div>
      <section className="booking-section"> <span style={{ fontSize: "20px", color: "#e67e22", marginRight: "6px" }}>⚠️</span>
        almost done! You only need to fill in the required fields marked with 
        <span className="required-star"> *</span>
         </section>
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
