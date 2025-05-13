import { useNavigate } from "react-router-dom";

const ReserveButton = ({listingId}) => {
    const navigate = useNavigate();

    const goToBookingForm = () => {
        navigate(`/bookings/${listingId}`);
    };

    return (
        <button onClick={goToBookingForm}>
            Book now
        </button>
    );
};

export default ReserveButton;
