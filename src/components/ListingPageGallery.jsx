import "../styles/listingpagegallery.css";

const ListingPageGallery = ({ mainImage, sideImages }) => {
  return (
    <>
    <div className="listing-gallery-container">
      <div className="main-image-container">
     
        <img src={mainImage} className="image-1" alt="Main Listing" />

        </div>
        <div className="side-images-container">
         
          {sideImages.map((image, index) => (
            <img key={index} src={image} className={`image-${index + 2}`} alt={`Side Image ${index + 1}`} />
          ))}
        
      </div>
    </div>
    </>
  );
};

export default ListingPageGallery;
