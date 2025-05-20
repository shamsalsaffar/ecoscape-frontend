import React, { useEffect, useState } from 'react';
import { getMyBookings } from '../api/bookingsService';
import "../styles/mybookings.css";
import "../styles/profile.css"

const MyBookings = () => {
    const [bookings, setBookings]=useState([]);
    const[loading, setLoading]= useState(true);


    useEffect (()=>{
        getMyBookings()
        .then((data) => setBookings(data))
        .catch((error)=> console.error("Error fetching bookings:", error))
        .finally(() => setLoading(false));

    },[]);

    if (loading) return <p>Loading Bookings...</p>

  return (
    <div className="my-bookings">
        <h3>My Bookings</h3>
        {bookings.length === 0 ? (
            <p>No bookings found.</p>
        ) : (
            <ul>
            {bookings.map((booking) => (
                <li key={booking.id}>
                    <strong>{booking.listingname}</strong> <br  />
                    From: {booking.startDate} - To: {booking.endDate} <br />
                    Total: { booking.totalPrice} SEK
                </li>
            ))}
            </ul>
        )}
      
    </div>
  );
};

export default MyBookings
