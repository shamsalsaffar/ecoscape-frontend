import React from 'react'
import "../styles/confirmation.css";


const Confirmation = ({bookingData}) => {

  if (!bookingData){
    return <p>Loading booking details...</p>
  }
  return (
    <div className= "comfirmation-container">

        <h2>✅ Booking Confirmed!</h2>
        <p>{bookingData.message}</p>

        <div className="confirmation-details">

        <p><strong>Booking Number:</strong> {bookingData.bookingId}</p>
        <p><strong>Name:</strong> {bookingData.firstName} {bookingData.lastName}</p>
        <p><strong>Email:</strong> {bookingData.usersContactEmail}</p>
        <p><strong>Phone:</strong> {bookingData.usersContactPhoneNumber}</p>
        <p><strong>Listing ID:</strong> {bookingData.listingId}</p>
        <p><strong>Guests:</strong> {bookingData.guests}</p>
        <p><strong>Check-in:</strong> {bookingData.startDate}</p>
        <p><strong>Check-out:</strong> {bookingData.endDate}</p>
        <p><strong>Price per Night:</strong> {bookingData.pricePerNight} SEK</p>
        <p><strong>Cleaning Fee:</strong> {bookingData.cleaningFee} SEK</p>
        <p><strong>Website Fee:</strong> {bookingData.websiteFee} SEK</p>
        <p><strong>Total Price:</strong> <span className="total-price">{bookingData.totalPrice} SEK</span></p>
        <p><strong>Status:</strong> {bookingData.status}</p>
        
        </div>
      
    </div>
  )
}

export default Confirmation
