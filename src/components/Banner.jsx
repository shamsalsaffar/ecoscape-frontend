import SearchBar from "./SearchBar";
import CategoryBar from "./CategoryBar";
import "../styles/banner.css";
import background from "../images/tree_background.jpg";

//får onSearch function som props från Home
const Banner = ({ onSearch }) => {
  return (
    <div className="banner">
      <img src={background} alt="Forest image" className="banner-background" />

      <div className="banner-content">
        <h1 className="ecoscape-header">Ecoscape</h1>
        <div className="banner-toolbar">
          <h2 className="search-header">Find your sustainable accommodation</h2>
          {/* skicka onSearch function till categorybar componenten*/}
          <CategoryBar onSearch={onSearch} />
          {/* skicka onSearch function till searchbar componenten*/}
          <SearchBar onSearch={onSearch} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
