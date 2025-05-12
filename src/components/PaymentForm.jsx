 import React from 'react'
import Button from './Button';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';


const PaymentForm = ({fullBookingData, goToNextStep}) => {

  const stripe= useStripe(); //initalize strips تهيئة stripe
  const elements = useElements(); //  initalize elements (cared element)


    const handlePayment = async(e) =>{
        e.preventDefault();  // منع تحديث تلقايي prevent auto-refresh on click 

         if (!stripe || !elements){
          console.log("Stripe isnot ready yet")
          return ;
        }

         // to get the entered user card نحصل علب معلومات الكارت مدخله 
         const cardElement = elements.getElement(CardElement);
         const token = localStorage.getItem('token');
         
         try {
          // create paymentNethod by paymentElement 
          const {paymentMethod, error } = await stripe.createPaymentMethod ({
            type : 'card',
            card: cardElement, 

          });
          if (error){
            console.error("Card error", error.message);
            return;
          }

          // send paymentmethod and payment  to backend 
          const intentRes = await axios.post (
            'http://localhost:8080/api/payments/create-payment-intent',
             {
              amount: bookingData. totalPrice * 100, 
              currency: "sek",
            },
            {
              headers:{
                Authorization: `Bearer ${token}`,
              },
            }

          );
          

          const clientSecret= intentRes.data.clientSecret;
           // confirm pay by pk 
           const confirmResult = await stripe.confirmCardPayment(paymentIntent.clientSecret,{
            payment_method: paymentMethod.id,
           });

           if (confirmResult.error){
            cosole.error("فشل تاكيد الدفع ", confirmResult.error.message);
           } else if (confirmResult.paymentIntent.status === 'succeeded'){

            // efter pay , send payment data to finalize-payment
            const finalizeRes= await axios.post(
              'http://localhost:8080/api/payments/finalize-payment',
              {
              paymentIntentId: confirmResult.paymentIntent.id, 
              amount: confirmResult.paymentIntent.amount,
              currency: confirmResult.paymentIntent.currency,
              userId: bookingData.userId, 
              bookingId: bookingData.bookingId,
              paymentType: 'STRIPE',
              },
              {
                headers: {
                  Authorization:  `Bearer ${token}`,
                },
              }
            );

            console.log(finalizeRes.data.message);

            goToNextStep(finalizeRes.data);

           }
          } catch (error){
            console.error("خطا اثنا الدفع ", error);
          }
         };
       
          
  return (
    <form onSubmit={handlePayment}>
      <div style={{ marginBottom:'20px'}}>
        <CardElement/>
      
      </div>

     <Button text="Confirm payment" />
    </form>
  
  );
};

export default PaymentForm
 