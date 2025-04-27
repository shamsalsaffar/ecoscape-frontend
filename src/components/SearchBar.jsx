import "../styles/SearchBar.css";
import searchIcon from "../assets/round-search.svg";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <form>
      <div className="search-section">
        <label htmlFor="property-name" className="label">
          Name
        </label>
        <input
          type="text"
          //id="property-name"
          //name="propertyName"
          className="value"
          placeholder="Search by name"
        />
      </div>

      <div className="search-section">
        <label htmlFor="location" className="label">
          Location
        </label>
        <input
          type="text"
          //id="location"
          //name="propertyLocation"
          className="value"
          placeholder="Where you want to go?"
        />
      </div>

      <div className="search-section">
        <label htmlFor="check-in" className="label">
          Check In
        </label>
        <input
          type="date"
          //id="check-in"
          //name="checkInDate" 
          className="value"
        />
      </div>

      <div className="search-section">
        <label htmlFor="check-out" className="label">
          Check Out
        </label>
        <input
          type="date"
          //id="check-out"
          //name="checkOutDate" 
          className="value"
        />
      </div>

      <div className="search-section">
        <label htmlFor="guests" className="label guests">
          Guests
        </label>
        <select id="guests" name="guests" className="value">
          <option value="" disabled>
            Add Guests
          </option>
          {[...Array(10)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>

      <div className="search-button">
        <button type="submit" className="search-button">
          <img src={searchIcon} alt="Search" />
        </button>
      </div>
      </form>
    </div>
  );
};

export default SearchBar;
