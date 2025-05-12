import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getListingById } from "../api/listingService";
import Button from "../components/Button";
import { useContext } from "react"; // لاستخدام useContext
import { AuthContext } from '../contexts/AuthContext'; 
import { useNavigate } from "react-router-dom";

//import ListingPageGallery from "../components/ListingPageGallery";


const ListingDetails = () => {
  const { listingId } = useParams(); 
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // استخدام useNavigate من react-router-dom
  const { currentUser } = useContext(AuthContext); // استخدام useContext للحصول على currentUser من AuthContext

  // دالة التعامل مع الحجز
  const handleBooking = () => {
    if (currentUser) {
      // إذا كان المستخدم قد قام بتسجيل الدخول
      navigate(`/booking?listingId=${id}`);// توجيه المستخدم إلى صفحة الحجز
    } else {
      // إذا لم يكن المستخدم قد قام بتسجيل الدخول
      navigate("/login"); // توجيه المستخدم إلى صفحة تسجيل الدخول
    }
  };
 


  useEffect(() => {
    const fetchListing = async () => {
      try {
        console.log("listingId from URL:", listingId); 
        const data = await getListingById(Number(id));
        console.log("البيانات المستلمة:", data); 
        setListing(data);
      } catch (err) {
        console.error("خطأ في جلب تفاصيل الإعلان:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchListing();
  }, [listingId]);

  if (loading) return <div>جارٍ التحميل...</div>;
  if (!listing) return <div>لم يتم العثور على الإعلان.</div>;

  return (
    <div>
      <h2>{listing.name}</h2>
      <p>{listing.description}</p>
      <p>الموقع: {listing.location}</p>
      <p>السعر لليلة: ${listing.pricePerNight}</p>
     {/* <ListingPageGallery listingId={listingId} /> */}

     <Button text="Book" onClick={handleBooking}/> {/* زر الحجز */}
  

    </div>
  );
};

export default ListingDetails;
