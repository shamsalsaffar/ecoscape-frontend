import React from 'react'
import Button from './Button';

const PaymentForm = ({bookingData, goToNextStep}) => {
    const handlePayment = async(e) =>{
        e.preventDefault();
       
          const paymentData={
            ...bookingData,
          };
          goToNextStep(paymentData);
            
          } ;
  return (
    <div>
      <Button text="Confirm payment" onClick={{handlePayment}} />
    </div>
  )
}

export default PaymentForm
