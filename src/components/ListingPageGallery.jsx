import "../styles/listingpagegallery.css";
import listingimage from "../images/tree_background.jpg";

const ListingPageGallery = () => {
  return (
    <div className="listing-gallery-container">
      <div className="main-image-container">
        <img src={listingimage} className="image-1" />
        <div className="side-images-container">
          <img src={listingimage} className="image-2" />
          <img src={listingimage} className="image-3" />
          <img src={listingimage} className="image-4" />
          <img src={listingimage} className="image-5" />
        </div>
      </div>
    </div>
  );
};

export default ListingPageGallery;
