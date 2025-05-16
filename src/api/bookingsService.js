import api from "./axios";

import React from 'react'

export const submitBooking = async (listingId, bookingData) => {
    try {
      const response = await api.post(`/api/bookings?listingId=${listingId}`, bookingData);
      console.log("Booking response from backend:", response.data);

      
      return response.data;
     
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data);
      } else {
        throw new Error("Server error. Please try again later.");
      }
    }
  };



//  TO UPDATE BOOKING BY USER
export const updateBookingUser = async (bookingId, bookingData) => {
    try {
        const response = await api.patch(`/api/bookings/${bookingId}/update-contact`, bookingData);
        return response.data;
    } catch (error){
        throw new Error ('failed to update booking data:' + error.message);
    }
    
};


// TO UPDATE  BOOKING BY ADMIN OR HOST 
export const updateBooking = async(bookingId, bookingData) => {
    try {
        const response = await api.put(`/api/bookings/${bookingId}`, bookingData);
        return response.data;
    } catch (error){
        throw new Error ('Faild to update booking data:' + error.message);
        
    }
}