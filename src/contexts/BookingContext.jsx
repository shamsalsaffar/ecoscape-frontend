import React, { Children } from 'react'
import { useState, createContext, useContext } from 'react';

const BookingContext= createContext();

export const BookingProvider = ({children}) => {
    const [bookingData, setBookingData]= useState({
     userId: '',
     listingId: '',
     firstName: '',
     lastName: '',
     usersContactPhoneNumber: '',
     usersContactEmail: '',
     startDate: '',
     endDate: '',
     status: 'PENDING',
     guests: 1,

    });

  //FINCTION TO UPDATE BOOKINGDATA
    const updateBookingData = (data) => {
        setBookingData((prevData) => ({
            ...prevData,
            ...data,
        }));
    };

   return (
    <BookingContext.Provider value={{ bookingData, updateBookingData}}>

    {children}
    </BookingContext.Provider>
   );
};

// USE THE CONTEXT IN COMPENTENTS 
 export const useBooking= () =>{
    return useContext(BookingContext);
 };