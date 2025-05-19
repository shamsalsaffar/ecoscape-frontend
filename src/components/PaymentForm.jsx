import React, {useState } from "react";
import "../styles/payment.css";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement
} from "@stripe/react-stripe-js";
import Button from "./Button";
import api from "../api/axios"; 
import { useBooking } from "../contexts/BookingContext";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);


const CheckoutForm = ({ fullBookingData, goToNextStep }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const {triggerReloadDates, resetBooking}=useBooking();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      //  create payment intent بدون Authorization header
      const intentRes = await api.post(
        "/api/payments/create-payment-intent",
        {
          amount: fullBookingData.totalPrice * 100,  
          currency: "sek",
        }
      );

      const clientSecret = intentRes.data.clientSecret;
      console.log("Client secret:", clientSecret);

      
      const confirmResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: fullBookingData.firstName + " " + fullBookingData.lastName,
          },
        },
      });

      if (confirmResult.error) {
        throw new Error(confirmResult.error.message);
      }

      //  أرسال نتيجة الدفع لتحديث الحجز في قاعدة البيانات
      const finalizeRes = await api.post("/api/payments/finalize-payment", {
        paymentIntentId: confirmResult.paymentIntent.id,
        amount: confirmResult.paymentIntent.amount,
        currency: confirmResult.paymentIntent.currency,
        bookingId: fullBookingData.bookingId,
        paymentType: "STRIPE",
      });


      triggerReloadDates();
      resetBooking();

      goToNextStep(finalizeRes.data); //  move to the final step انتقل إلى الخطوة التالية مع البيانات النهائية
      console.log("Received fullBookingData in PaymentForm:", fullBookingData);

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <h2>Payment Details</h2>

      <p><strong>Booking for:</strong> {fullBookingData.firstName} {fullBookingData.lastName}</p>
      <p><strong>Total to pay:</strong> {fullBookingData?.totalPrice ?? "Not available"} SEK</p>
      <label>Card Number</label>
  <div className="cardelement"><CardNumberElement /></div>

  <label>Expiry Date</label>
  <div className="cardelement"><CardExpiryElement /></div>

  <label>CVC</label>
  <div className="cardelement"><CardCvcElement /></div>
  

      {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>}
      <Button type="submit" 
      text={loading ? "Processing..." : "Confirm payment"}
      disabled={!stripe || loading} />

    </form>
  );
};

const PaymentForm = ({ fullBookingData, goToNextStep }) => {
  return (
    <Elements stripe={stripePromise}>
      <div className="checkform">
       
      <CheckoutForm
        fullBookingData={fullBookingData}
        goToNextStep={goToNextStep}
      />
      </div>
    </Elements>
  );
};

export default PaymentForm;  