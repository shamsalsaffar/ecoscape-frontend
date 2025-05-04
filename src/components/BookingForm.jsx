// först import use state 
// bookingform
// funcktion som ska use
import React from "react";
import { submitBooking } from "../api/bookingsService";
import Button from "./Button";
import { useBookingForm } from "../hooks/useBookingForm";


const BookingForm = () => {

// USE useBookingform  HOOKS 
const {
  formData,
  handleChange,
  errors,
  validateForm,
} = useBookingForm();


  
// TO CONNECT BACKEND CONNECT FUNCATION THAT IS IN BOOKKINGS SERVICE
  const handleSubmit = async(e) =>{
    e.preventDefault();
    if (!validateForm()) return;
    try {
      const result = await submitBooking(formData);
      alert ("Booking success");

    } catch (error){
      alert ("An error occurred:" + error.message);
    }
  };




  return (
    <div>
      <h2> Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          />
        </div>
        <div>
          <label>Lsat Name</label>
          <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
          type="email"
          name="usersContactEmail"
          value={formData.usersContactEmail}
          onChange={handleChange}
          />
        </div>
        <div>
          <label>Phon Number</label>
          <input
          type="tel"
          name="usersContactPhoneNumber"
          value={formData.usersContactPhoneNumber}
          onChange={handleChange}
          />
        </div>
        <div>
          <label>Check-in </label>
          <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          />
        </div>
        <div>
          <label>Check-out</label>
          <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          />
        </div>
        <div>
          <label>Guests</label>
          <input
          type="number"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
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
        <Button type="submit"
        text="Send"
        onClick={handleSubmit} // Work with hanlesubmit to be ensur for "secondory", and primary button 
        variant="primary"
        disabled={false}
        />

      </form>
      
    </div>
  )
}

export default BookingForm
