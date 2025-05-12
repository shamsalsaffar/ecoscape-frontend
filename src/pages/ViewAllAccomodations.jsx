import { useNavigate } from "react-router-dom"; // لإجراء التنقل
import { useContext } from "react"; // لاستخدام useContext
import Button from "../components/Button";
import "../styles/listings.css";
import { AuthContext } from '../contexts/AuthContext'; // استيراد الـ Context

const ViewAllAccomodations = () => {
  
  return (
    <div className="view-all-accomodations">
      <h6>View All Accommodations Page</h6>
   </div>
  );
};

export default ViewAllAccomodations;
