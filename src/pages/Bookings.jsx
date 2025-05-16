import React, { useEffect } from 'react';
import { useState } from 'react';
import BookingForm from '../components/BookingForm';
import PaymentForm from '../components/PaymentForm';
import Confirmation from '../components/Confirmation';
import { useNavigate, useParams } from "react-router-dom";
import "../styles/bookingForm.css";
import { useBooking } from '../contexts/BookingContext';
import BookingUpdateForm from '../components/BookingUpdateForm';
import BookingUserUpdateForm from '../components/BookingUserUpdateForm';

 // will be use steps method in page so , we go i three steps
 // 1= bookingform , 2= payment , 3= confirmation 

const Bookings = () => {
  const { listingId } = useParams(); // Get listingId from URL
  const navigate = useNavigate();

  const { bookingData, updateBookingData, resetBooking } = useBooking();

  // Step state to control which stage the user is on 
  // (1. booking form, 2. payment form, 3. confirmation)
  
   const [step, setStep] = useState(() => {
    const savedStep = localStorage.getItem("bookingStep");
    return savedStep ? parseInt(savedStep) : 1;
    });

   
  // load saved bookingdata from localstorgewhen the component firts mounts
    useEffect(() => {
     const savedData = localStorage.getItem("bookingData");
      if (savedData) {
      updateBookingData(JSON.parse(savedData)); //update with saved data 
      }
    }, []);


  // save current booking step to localStorge whenever the step changes
    useEffect(() => {
     localStorage.setItem("bookingStep", step);
    }, [step]);

    
  // FUNCTION TP PROGRESS BETWEEN STEPS 
    const goToNextStep = (data) => { 
      updateBookingData(data);
      setStep(step+1);
      
    };


     
  //Optional reset function to clear all booking data and return to step 1
  // Useful to include in presentation or for debugging during development
     /* const handleReset = () => {
      resetBooking();
      setStep(1); // نرجع إلى أول خطوة
      localStorage.removeItem("bookingstep");
      window.scrollTo(0, 0); // نرجع المستخدم لأعلى الصفحة
    }; */
    

 

  return (
    <div className='booking-page'>

      <h1>Reservation page </h1>
      {step === 1 && <BookingForm listingId={listingId} goToNextStep={goToNextStep} />}

      {step === 2 && <PaymentForm fullBookingData={bookingData} goToNextStep={goToNextStep}/>}
      {step === 3 && <Confirmation bookingData = {bookingData}/>}
     

    {/*  <button onClick={handleReset} className="reset-button">
     🧹 Clear Booking Settings
    </button>
     */}
      
      
    </div>
  );
};

export default Bookings
