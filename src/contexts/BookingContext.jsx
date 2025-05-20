import React, { Children } from 'react'
import { useState, createContext, useContext } from 'react';

const BookingContext= createContext();
export const useBooking = () => useContext(BookingContext);

export const BookingProvider = ({children}) => {
    const [bookingData, setBookingData]= useState({
        startDate: '',
        endDate: '',
        guests: 1,
        firstName: '',
        lastName: '',
        usersContactPhoneNumber: '',
        usersContactEmail: '',

    });

  //FINCTION TO UPDATE BOOKINGDATA
    const updateBookingData = (data) => {
        setBookingData((prevData) => ({
            ...prevData,
            ...data,
        }));
    };

    const resetBooking = () => {
        setBookingData({
            startDate: '',
            endDate: '',
            guests: 1,
            firstName: '',
            lastName: '',
            usersContactPhoneNumber: '',
            usersContactEmail: '',
          });
        };

    const [reloadDates, setReloadDates]= useState(false);
    const triggerReloadDates = () => {
        setReloadDates(prev => !prev);
    };


   return (
    <BookingContext.Provider value={{
         bookingData, updateBookingData,
         resetBooking,reloadDates, triggerReloadDates}}>

    {children}
    </BookingContext.Provider>
   );
};

// USE THE CONTEXT IN COMPENTENTS 
 