import "../styles/listingpagedescriptiobox.css";

const ListingPageDescriptionBox = ({ listing }) => {
  return (
    <>
      <div className="listing-page-description-box">

        <div className="listing-page-description-header">
          <h2 className="listing-name">{listing.name}</h2>

          <p className="listing-price-info">
            <strong >Price:</strong> {listing.pricePerNight} SEK / night
          </p>


          <p className="listing-capacity-info">
            These property can accommodate up to {listing.capacity} guests.
          </p>
          <p className="listing-location-info">{listing.location}</p>
        </div>
        <div className="listing-page-description"><h3 className="description-heading">Description</h3>{listing.description}</div>
      </div>
    </>
  );
};
export default ListingPageDescriptionBox;
