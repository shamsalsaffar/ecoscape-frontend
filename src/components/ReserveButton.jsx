import { useNavigate } from "react-router-dom";

const ReserveButton = () => {
    const navigate = useNavigate();

    const goToBookingForm = () => {
        navigate('/bookingForm');
    };

    return (
        <button onClick={goToBookingForm}>
            Book now
        </button>
    );
};

export default ReserveButton;
