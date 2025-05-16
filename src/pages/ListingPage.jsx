import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getListingById, getImagesByListingId } from "../api/listingService";
import { getUserByListingId } from "../api/userService";
import ListingPageGallery from "../components/ListingPageGallery";
import ListingPageHostInfoSmallBox from "../components/ListingPageHostInfoSmallBox";
import ListingPageDescriptionBox from "../components/ListingPageDescriptionBox";
import ListingPageRules from "../components/ListingPageRules";
import ListingPageAmenities from "../components/ListingPageAmenities";
import ListingPageSustainabilitySymbols from "../components/ListingPageSustainabilitySymbols";
import ListingPageHostInfoLargeBox from "../components/ListingPageHostInfoLargeBox";

import "../styles/listingpage.css"

const ListingPage = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchListingDetails = async () => {
      try {
        const data = await getListingById(id);          
        const imgs = await getImagesByListingId(id);  
        const userData = await getUserByListingId(id);
        setListing(data);
        setImages(imgs);
        setUser(userData)
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
    <div className="listing-page-layot">
      <ListingPageGallery mainImage={mainImage} sideImages={sideImages} />
      <ListingPageHostInfoSmallBox user={user} />
      <ListingPageDescriptionBox listing={listing} />
      <ListingPageRules className="listing-page-rules" listing={listing} />
      <ListingPageSustainabilitySymbols className="listing-page-sustainability-symbols" listing={listing}/>
      <ListingPageAmenities className="listing-page-amenities"listing={listing}/>
      <ListingPageHostInfoLargeBox user={user} />
    </div>
  );
};

export default ListingPage;
