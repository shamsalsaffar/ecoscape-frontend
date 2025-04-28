import DefaultListingImage from "../icons/DefaultListingImage.jsx";
import "../styles/listingbox.css";

const ListingBox = () => {
  return (
    
    <div className="listing-box">
      <DefaultListingImage className="placeholder-listing-image" />
      <div className="listing-short-description-box">
        <h2 className="listing-box-name">Listing name</h2>
        <p className="listing-box-location">Location, Country</p> 
      </div>
      </div>
    
    
  );
};

export default ListingBox;
