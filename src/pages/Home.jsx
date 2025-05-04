import Banner from "../components/Banner";
import ListingCollection from "../components/ListingCollection";
import Button from "../components/Button";

const Home= () => {
  return (

    <div className="home-page">
      <Banner/>
      <ListingCollection/>
      <Button className="show-more-button">
        Show more
      </Button>
    </div>
  );
};

export default Home;
