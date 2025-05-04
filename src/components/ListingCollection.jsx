import ListingBox from "./ListingBox";
import "../styles/listingcollection.css";
import { useState, useEffect } from "react";
import { getAllListings } from "../api/listingService";

const ListingCollection = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const data = await getAllListings();
        setListings(data);
      } catch (err) {
        console.log("Error: " + err);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="listing-grid">
      {listings.map((listing) => (
        <div key={listing.id} className="listing-box">
          <div className="listing-info">
            <h3>(product.name)</h3>
            <h4>(product.location)</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListingCollection;
