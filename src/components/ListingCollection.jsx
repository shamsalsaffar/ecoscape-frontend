import { Link } from "react-router-dom"; // Import Link for navigation
import DefaultListingImage from "../icons/DefaultListingImage";
import "../styles/listingcollection.css";
//får två props från home
const ListingCollection = ({ listings, loading }) => {
  //visualiserar loading med text så användaren vet att något är på gång
  if (loading) return <div>Loading...</div>;

  return (
    <div className="listing-grid">
      {listings.map((listing) => (
        <Link
          to={`/listing/${listing.id}`}
          key={listing.id}
          className="listing-box"
        >
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
        </Link>
      ))}
    </div>
  );
};

export default ListingCollection;
