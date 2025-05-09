import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllListings, getImagesByListingId } from "../api/listingService";
import DefaultListingImage from "../icons/DefaultListingImage";
import "../styles/listingcollection.css";

const ListingCollection = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchListingsWithImages = async () => {
      try {
        const data = await getAllListings();
        const listingsWithImages = await Promise.all(
          data.map(async (listing) => {
            const images = await getImagesByListingId(listing.id);
            return { ...listing, images };
          })
        );
        setListings(listingsWithImages);
      } catch (err) {
        console.log("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchListingsWithImages();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="listing-grid">
      {listings.map((listing) => (
        <div key={listing.id} className="listing-box"
          onClick={() => navigate(`/listings/${listing.name}`)}>

          <div className="listing-short-description-box">
            <h3 className="listing-box-name">{listing.name}</h3>
            <h4 className="listing-box-location">{listing.location}</h4>
          </div>

          <div className="listing-images">
            {listing.images && listing.images.length > 0 ? (
              <img
                key={listing.images[0].id}
                src={listing.images[0].imageUrl}
                alt={listing.name}
                className="listing-image"
              />
            ) : (
              <DefaultListingImage />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListingCollection;
