import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getListingById, getImagesByListingId } from "../api/listingService";
import ListingPageGallery from "../components/ListingPageGallery";

const ListingPage = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListingDetails = async () => {
      try {
        const data = await getListingById(id);          
        const imgs = await getImagesByListingId(id);     
        setListing(data);
        setImages(imgs);
      } catch (err) {
        console.log("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchListingDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!listing) return <div>Listing not found</div>;


  const mainImage = images[0]?.imageUrl;
  const sideImages = images.slice(1).map((img) => img.imageUrl);

  return (
    <div className="listing-page">
      <ListingPageGallery mainImage={mainImage} sideImages={sideImages} />
    </div>
  );
};

export default ListingPage;
