import { useNavigate } from "react-router-dom"; // لإجراء التنقل
import { useContext } from "react"; // لاستخدام useContext
import Button from "../components/Button";
import "../styles/listings.css";
import { AuthContext } from '../contexts/AuthContext'; // استيراد الـ Context

const ViewAllAccomodations = () => {
  const navigate = useNavigate(); // استخدام useNavigate من react-router-dom
  const { currentUser } = useContext(AuthContext); // استخدام useContext للحصول على currentUser من AuthContext

  // دالة التعامل مع الحجز
  const handleBooking = () => {
    if (currentUser) {
      // إذا كان المستخدم قد قام بتسجيل الدخول
      navigate("/bookings"); // توجيه المستخدم إلى صفحة الحجز
    } else {
      // إذا لم يكن المستخدم قد قام بتسجيل الدخول
      navigate("/login"); // توجيه المستخدم إلى صفحة تسجيل الدخول
    }
  };

  return (
    <div className="view-all-accomodations">
      <h6>View All Accommodations Page</h6>
      <Button text="Book" onClick={handleBooking}/> {/* زر الحجز */}
    </div>
  );
};

export default ViewAllAccomodations;
