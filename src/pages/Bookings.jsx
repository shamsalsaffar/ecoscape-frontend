import React from 'react';
import { useState } from 'react';
import BookingForm from '../components/BookingForm';
import PaymentForm from '../components/PaymentForm';
import Confirmation from '../components/Confirmation';
import { useNavigate, useParams } from "react-router-dom";

import { useBooking } from '../contexts/BookingContext';
import BookingUpdateForm from '../components/BookingUpdateForm';
import BookingUserUpdateForm from '../components/BookingUserUpdateForm';


const Bookings = () => {

  const{listingId}= useParams();
  const navigate = useNavigate();
  const { bookingData,updateBookingData } = useBooking();

   // will be use steps method in page so , we go i three steps
      // 1= bookingform , 2= payment , 3= confirmation 
      const [step, setStep] = useState(1);
     

      

     // FUNCTION TP PROGRESS BETWEEN STEPS 
     const goToNextStep = (data) => { 
      updateBookingData(data);
      setStep(step+1);
      
     };

  return (
    <div className='booking-page'>

      <h1>Reservation page </h1>
      {step === 1 && <BookingForm listingId={listingId} goToNextStep={goToNextStep} />}

      {step === 2 && <PaymentForm fullBookingData={bookingData} goToNextStep={goToNextStep}/>}
      {step === 3 && <Confirmation bookingData = {bookingData}/>}
     

     
      
      
    </div>
  );
};

export default Bookings
