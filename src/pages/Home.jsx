import Banner from "../components/Banner";
import ListingCollection from "../components/ListingCollection";
import { getAllListings, getImagesByListingId } from "../api/listingService";
import { searchAvailableListings } from "../api/listingService";
import Button from "../components/Button";
import { useState, useEffect } from "react";

const Home = () => {
  //skafar en state variablel listings för att spara listings, by default den är tom
  const [listings, setListings] = useState([]);
  //skafar en state variablel loading för att visa att listings collection laddar ff, behövs för bättre ui, by default det är true

  const [loading, setLoading] = useState(true);
  const fetchListingsWithImages = async () => {
    try {
      // Hämtar alla listings från API:et
      const data = await getAllListings();
      // hämtar och kombinerar listingar och dess bilder i nya objecter (listing + image) och s'tter de i listan listingsWithImages
      const listingsWithImages = await Promise.all(
        data.map(async (listing) => {
          const images = await getImagesByListingId(listing.id);
          return { ...listing, images };
        })
      );

      // set listan listingsWithImages + bilder i state-variabel
      setListings(listingsWithImages);
    } catch (err) {
      console.log("Error:", err);
    } finally {
      //slutar köra loading
      setLoading(false);
    }
  };
  // useEffect kör en funktion när Home komponenten visas på sidan
  useEffect(() => {
    //kallar på funtionen att fectha alla listingar
    fetchListingsWithImages();
  }, []);

  if (loading) return <div>Loading...</div>;

  //funcktionen som tar emot sök kriteria
  const handleSearch = async (searchParams) => {
    //sätter loadning till true för att visualisera att det laddas
    setLoading(true);
    try {
      //anroppar backend med parametrarna och hämtar ojekter (listing + image)
      const data = await searchAvailableListings(searchParams);
      const listingsWithImages = await Promise.all(
        data.map(async (listing) => {
          const images = await getImagesByListingId(listing.id);
          //spread operator "..." för att hämta all data samtidigt
          return { ...listing, images };
        })
      );
      //sätter listan till state variabelm
      setListings(listingsWithImages);
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      //sätter loadning till false
      setLoading(false);
    }
  };

  return (
    <div className="home-page">
      {/* skickar funktionen handleSearch till Banner komponent,
      då SearchBar, som finns i Banner, kan använda den när användaren gör en sökning,
      all söklogik händer i Home men det är Banner som startar den. */}
      <Banner onSearch={handleSearch} />
      {/* skickar listingar som ska visualiseras, samt loading state som props till listing collection */}
      <ListingCollection listings={listings} loading={loading} />
      <Button className="show-more-button" text="Show more" />
    </div>
  );
};

export default Home;
