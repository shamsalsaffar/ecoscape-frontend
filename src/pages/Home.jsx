import { useEffect } from "react";
import "../styles/header.css";
import "../styles/home.css";
import Banner from "../components/Banner";

import ListingCollection from "../components/ListingCollection";
import Button from "../components/Button"; 
import ListingBox from "../components/ListingBox";




const Home = () => {

  return (
    <div className="home">
      <main className="content">
     
                <Banner />
                <ListingCollection></ListingCollection>
                <div className="homepage-button-container">
                  <Button
                    className="show-more-button"
                    style={{
                      display: "flex",
                      justifySelf: "center",
                      borderRadius: "80px",
                      paddingLeft: "8rem",
                      paddingRight: "8rem",
                      paddingTop: "2rem",
                      paddingBottom: "2rem",
                      backgroundColor: "#49613D",
                      color: "white",
                      width: "auto",
                      fontSize: "1rem",
                      cursor: "pointer",
                      border: "none",
                      textTransform: "uppercase",
                      fontFamily: "Montserrat",
                      fontWeight: "600",
                    }}
                  >
                    Show more
                  </Button>
                </div>
      
      </main>
    </div>
  );
};

export default Home;
 {/*  <h2 className="title">FIND YOUR NEXT ECOTOURISM DESTINION</h2>
        <div className="listing-grid">
          {listings.map((item, index) => (
            <div className="listing-card" key={index}>
              <img
                src={item.imageUrl || "/assets/images/background.jpg"}
                alt={item.title}
                className="listing-img"
              />
              <div className="listing-info">
                <h3>{item.title || "Well Furnished Apartment"}</h3>
                <p>{item.address || "100 Smart Street, LA, USA"}</p>
              </div>
            </div>
          ))}
        </div> */}

       /*  const Home = ({ listings, onFetch }) => {
          useEffect(() => {
            onFetch();
          }, []); */