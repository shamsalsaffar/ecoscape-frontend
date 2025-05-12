import "../styles/listingpagegallery.css";

const ListingPageGallery = ({ mainImage, sideImages }) => {
  return (
    <>
    <div className="listing-gallery-container">
      <div className="main-image-container">
     
        <img src={mainImage} className="main-image" alt="Main Listing" />

        </div>
        <div className="side-images-container">
         
          {sideImages.map((image, id) => (
            <img key={id} src={image} alt={`Side Image ${id + 1}`} />
          ))}
        
      </div>
    </div>
    </>
  );
};

export default ListingPageGallery;
