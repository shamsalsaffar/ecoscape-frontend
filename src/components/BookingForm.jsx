// först import use state 
// bookingform
// funcktion som ska use
import React from "react";
import { submitBooking } from "../api/bookingsService";
import Button from "./Button";
import { useBookingForm } from "../hooks/useBookingForm";
import { useBooking } from "../contexts/BookingContext";



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
       
        variant="primary"
        disabled={false}
        />

      </form>
      
    </div>
  )
}

export default BookingForm
