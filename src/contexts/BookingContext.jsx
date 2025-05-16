import React, { Children } from 'react'
import { useState, createContext, useContext } from 'react';

const BookingContext= createContext();
export const useBooking = () => useContext(BookingContext);

export const BookingProvider = ({children}) => {
    const [bookingData, setBookingData]= useState({
     /* userId: '',
     listingId: '',
     firstName: '',
     lastName: '',
     usersContactPhoneNumber: '',
     usersContactEmail: '',
     startDate: '',
     endDate: '',
     status: 'PENDING',
     guests: 1,  */

    });

  //FINCTION TO UPDATE BOOKINGDATA
    const updateBookingData = (data) => {
        setBookingData((prevData) => ({
            ...prevData,
            ...data,
        }));
    };

    const resetBooking = () => {
        setBookingData({});
        localStorage.removeItem("bookingData");
        localStorage.removeItem("bookingStep");
    };


   return (
    <BookingContext.Provider value={{ bookingData, updateBookingData, resetBooking}}>

    {children}
    </BookingContext.Provider>
   );
};

// USE THE CONTEXT IN COMPENTENTS 
 