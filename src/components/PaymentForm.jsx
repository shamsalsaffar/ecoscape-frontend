import React, {useState } from "react";
import "../styles/payment.css";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Button from "./Button";
import api from "../api/axios"; 

const stripePromise = loadStripe('pk_test_51RLSChQEubero97NhRlRQDb7AHac3FKDb3NtjyaiBRWTG3i1eQeqiUDSYPECCqJgnk81SiqiSvg8NUr6b817hwOl00XhzHVWfT');


const CheckoutForm = ({ fullBookingData, goToNextStep }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // ✅ أنشئ payment intent بدون Authorization header
      const intentRes = await api.post(
        "/api/payments/create-payment-intent",
        {
          amount: fullBookingData.totalPrice * 100, // المبلغ بالـ öre (100 öre = 1 SEK)
          currency: "sek",
        }
      );

      const clientSecret = intentRes.data.clientSecret;

      const confirmResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (confirmResult.error) {
        throw new Error(confirmResult.error.message);
      }

      // ✅ أرسل نتيجة الدفع لتحديث الحجز في قاعدة البيانات
      const finalizeRes = await api.post("/api/payments/finalize-payment", {
        paymentIntentId: confirmResult.paymentIntent.id,
        amount: confirmResult.paymentIntent.amount,
        currency: confirmResult.paymentIntent.currency,
        bookingId: fullBookingData.bookingId,
        paymentType: "STRIPE",
      });

      goToNextStep(finalizeRes.data); // ✅ انتقل إلى الخطوة التالية مع البيانات النهائية
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
      <p><strong>Total to pay:</strong> {fullBookingData.totalPrice} SEK</p>
      <div className="cardelement">
      <CardElement />
      </div>

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