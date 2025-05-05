import React from 'react';
import { useState } from 'react';
import BookingForm from '../components/BookingForm';
import BookingUpdateForm from '../components/BookingUpdateForm';
import BookingUserUpdateForm from '../components/BookingUserUpdateForm';


const Bookings = () => {
   // will be use steps method in page so , we go i three steps
      // 1= bookingform , 2= payment , 3= confirmation 
      const [step, setStep] = useState(1);
      const [bookingData, setBookingData]= useState({});


     // FUNCTION TP PROGRESS BETWEEN STEPS 
     const goToNextStep = (data) => { 
      setBookingData(data);
      setStep(step+1);
      
     };

  return (
    <div className='booking-page'>

      <h1>Reservation page </h1>
      {step === 1 && <BookingForm goToNextStep={goToNextStep}/>}
     

     
      
      
    </div>
  );
};

export default Bookings
