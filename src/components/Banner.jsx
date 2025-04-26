import SearchBar from "./SearchBar";
import CategoryBar from "./CategoryBar";
import "../styles/banner.css";


const Banner = () => {
    return (
        
      <div className="banner">
        <h2 className="search-header">Find you sustainable accomodation</h2>
        <SearchBar />
        <CategoryBar />
      </div>
    );
  };
  
  export default Banner;
  