import { useParams } from "react-router-dom";
import ListingPageGallery from "../components/ListingPageGallery";

const ListingDetails = () => {
  const { listingId } = useParams(); 

  return (
    <div>
      <h2>Listing Details</h2>
      <ListingPageGallery listingId={listingId} />
   
    </div>
  );
};

export default ListingDetails;
