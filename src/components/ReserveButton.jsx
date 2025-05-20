import { useNavigate } from "react-router-dom";
import "../styles/ReserveButton.css";
import { useBooking } from "../contexts/BookingContext";


const ReserveButton = ({listingId}) => {
    const navigate = useNavigate();
    const {bookingData}= useBooking();
   const isDateSelected = bookingData.startDate && bookingData.endDate;


    const goToBookingForm = () => {
        navigate(`/bookings/${listingId}`);
    };

    return (
        <button onClick={goToBookingForm}
        
        
        disabled={!isDateSelected}
       className="reserve-button"
        >
            Book Nu 
         { /*{isDateSelected ? "Book now" : "Select date to book"}*/}
        </button>
    );
};

export default ReserveButton;
