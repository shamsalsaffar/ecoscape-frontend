import "../styles/listingpagegallery.css";

const ListingPageGallery = ({ images = [] }) => {
  if (images.length === 0) {
    return <p>No images available.</p>;
  }

  return (
    <div className="listing-gallery-container">
      <div className="main-image-container">
        <img src={images[0]} alt="main" className="image-1" />
        <div className="side-images-container">
          {images.map((img, index) => {
            if (index < 1 || index > 4) return null;
            return (
              <img
                key={index}
                src={img}
                alt="Gallery image"
                className="gallery-image"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListingPageGallery;
