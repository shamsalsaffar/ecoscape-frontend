import { useParams } from "react-router-dom";

const ListingDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Listing Details</h2>
      <p>Du är på sidan för listing med ID: {id}</p>
    </div>
  );
};

export default ListingDetails;
