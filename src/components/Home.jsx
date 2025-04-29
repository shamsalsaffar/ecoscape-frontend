import { useEffect } from "react";
import "../styles/header.css";
import "../styles/home.css";

const Home = ({ listings, onFetch }) => {
  useEffect(() => {
    onFetch();
  }, []);

  return (
    <div className="home">
      <main className="content">
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
        </div>
      </main>
    </div>
  );
};

export default Home;
