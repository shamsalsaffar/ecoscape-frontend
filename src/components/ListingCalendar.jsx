import React, { useState, useEffect} from 'react'
import { getAvailableDates } from '../api/listingService';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "../styles/ListingCalendar.css";
import { useBooking } from '../contexts/BookingContext';



const ListingCalendar = ({listingId, pricePerNight}) => {
    const [availableDates, setAvailableDates]= useState([]);
    const [selectedRangeMessage, setSelectedRangeMessage]= useState("");
    const {updateBookingData,reloadDates}= useBooking();


    useEffect (() => {
        const fetchDates = async () => {
            try {
                const data = await getAvailableDates(listingId);
                const dates= [];

                data.forEach((range) => {
                    const start = new Date(range.startDate);
                    const end = new Date(range.endDate);
                    for ( let d = new Date(start); d <=end; 
                    d.setDate(d.getDate()+ 1)) {
                        dates.push(new Date(d.getTime()));
                    }
                });
                setAvailableDates(dates);
             } catch (error){
                console.error("Failed to fetch availabledates:", error);
             }
            };
            fetchDates();
        }, [listingId, reloadDates]);


        const markAvailableDates=({date}) =>{
            const isAvailable = availableDates.some(d => d.toDateString() === date.toDateString());
            return isAvailable ? "available-date" : "unavailable-date";

        };

        const renderTileContent=({date}) => {
            const isAvailable = availableDates.some(d => d.toDateString() === date.toDateString());
            return isAvailable ? (
                <div className = "price-label">{pricePerNight} SEK</div>
            ): null; 
        };
    
  return (
    <div className="listing-calendar-container">
        <div style={{ marginBottom: "10px", fontSize: "0.9rem", color: "#333" }}>
         <p><span style={{
    display: "inline-block",
    width: "1em",
    height: "1em",
    backgroundColor: "#5e6b58",
    borderRadius: "2px",
    verticalAlign: "middle",
    marginRight: "6px"
  }}></span> Dark green = Available date</p>
         <p><span style={{
    display: "inline-block",
    width: "1em",
    height: "1em",
    backgroundColor: "#deefdf",
    borderRadius: "2px",
    verticalAlign: "middle",
    marginRight: "6px"
  }}></span>
  Light green = Unavailable date</p>
          </div>



        <Calendar 
        tileClassName={markAvailableDates}
        tileContent={renderTileContent}
        selectRange={true} // chanse to choose date 
        onChange={(range) => {
            if (Array.isArray(range)){
                const [start, end] = range;

                //DONT ALLOW TO BOOK IN THE SAME DATE 
                const nights = (end - start )/ (1000 * 60 * 60 * 24);
                console.log("Selected range:", start.toDateString(), "→", end.toDateString());
                console.log("Number of nights:", nights);



                if (nights < 1){
                    console.log("⛔ Not enough nights selected");
                    alert("You must select at least one night to book.");
                    return;
                }

                if (nights === 1) {
                    const isStartAvailable = availableDates.some(d => d.toDateString() === start.toDateString());
                    const isEndAvailable = availableDates.some(d => d.toDateString() === end.toDateString());
                    console.log("Start available?", isStartAvailable, "End available?", isEndAvailable);

                
                    // إذا كان كلا اليومين متاحين ولكن لا توجد ليلة فعليًا بينهم (أي فجوة)
                    if (isStartAvailable && isEndAvailable) {
                        console.log("⛔ Single night between two bookings, not allowed.");
                        alert("You cannot book only one night between two bookings. Please select a longer period.");
                        return;
                    }
                }

                const allDatesInRange = [];
                for (let d = new Date(start); d <end; d.setDate(d.getDate()+ 1)){
                    allDatesInRange.push(new Date(d).toDateString());
                }

                const allAreAvailable = allDatesInRange.every(dateStr =>
                    availableDates.some(d => d.toDateString() === dateStr)
                );


                console.log("Dates in range:", allDatesInRange);
                console.log("All dates available?", allAreAvailable);

                if (!allAreAvailable){
                    alert("Some days in your selected range are not available.Please select another range.");
                    return;
                }



                updateBookingData({
                    startDate: start.toISOString().split('T')[0],
                    endDate: end.toISOString().split('T')[0]
                });
                setSelectedRangeMessage(`Selected from ${start.toDateString()} to ${end.toDateString()}`);
            }
        }}

         />

         {selectedRangeMessage &&(
            <div style={{ marginTop: "10px", color: "#2c3e50", fontWeight: "bold" }}>
            {selectedRangeMessage}
          </div>
        )}
      
    </div>
  )
}

export default ListingCalendar
