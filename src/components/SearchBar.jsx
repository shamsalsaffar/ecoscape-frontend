import "../styles/SearchBar.css";
import searchIcon from "../assets/round-search.svg";
import { useState } from "react";
//får onSearch som props från Banner, banner får det från Home
const SearchBar = ({ onSearch }) => {
  //skaffar ett state-objekt som håller all data från sökform, alla parametrar är toma by default
  const [formData, setFormData] = useState({
    propertyName: "",
    propertyLocation: "",
    checkInDate: "",
    checkOutDate: "",
    guests: 1,
  });

  //handleSubmit funktion triggas av search button click event,
  const handleSubmit = (e) => {
    //stoppar browser från default beteende, annars sidan skulle laddas om
    e.preventDefault();

    const searchParams = {
      name: formData.propertyName, // tar namet från formData
      location: formData.propertyLocation, // tar location från formData
      checkInDate: formData.checkInDate, // tar chechin datum från formData
      checkOutDate: formData.checkOutDate, // tar checkout  från formData
      capacity: formData.guests, // tar capacity  från formuläret
    };

    // kollar om det finns en sök-funktion att använda, och ifall det finns kör
    if (onSearch) {
      onSearch(searchParams);
    }
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <div className="search-section">
          <label className="label">Name</label>
          <input
            type="text"
            name="propertyName"
            value={formData.propertyName}
            onChange={(e) =>
              setFormData({ ...formData, propertyName: e.target.value })
            }
            className="value"
            placeholder="Search by name"
          />
        </div>

        <div className="search-section">
          <label className="label">Location</label>
          <input
            type="text"
            name="propertyLocation"
            value={formData.propertyLocation}
            onChange={(e) =>
              setFormData({ ...formData, propertyLocation: e.target.value })
            }
            className="value"
            placeholder="Where you want to go?"
          />
        </div>

        <div className="search-section">
          <label className="label">Check In</label>
          <input
            type="date"
            name="checkInDate"
            value={formData.checkInDate}
            onChange={(e) =>
              setFormData({ ...formData, checkInDate: e.target.value })
            }
            className="value"
          />
        </div>

        <div className="search-section">
          <label className="label">Check Out</label>
          <input
            type="date"
            name="checkOutDate"
            value={formData.checkOutDate}
            onChange={(e) =>
              setFormData({ ...formData, checkOutDate: e.target.value })
            }
            className="value"
          />
        </div>

        <div className="search-section">
          <label className="label guests">Guests</label>
          <select
            name="guests"
            value={formData.guests}
            onChange={(e) =>
              setFormData({ ...formData, guests: parseInt(e.target.value) })
            }
            className="value"
          >
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
