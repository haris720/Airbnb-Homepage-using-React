import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../Styles/SearchBar.css"; // Import your custom CSS file

const SearchBar = () => {
  const [formData, setFormData] = useState({
    destination: "",
    checkin: "",
    checkout: "",
    guests: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Form submission logic here
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="input-group" id="input1">
        <label htmlFor="destination">Where</label>
        <input
          type="text"
          id="destination"
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          placeholder="Search destinations"
        />
      </div>

      <div className="input-group" id="input2">
        <label htmlFor="checkin">Check In</label>
        <input
          type="text"
          id="checkin"
          name="checkin"
          value={formData.checkin}
          onChange={handleChange}
          placeholder="Add dates"
        />
      </div>

      <div className="input-group" id="input3">
        <label htmlFor="checkout">Check Out</label>
        <input
          type="text"
          id="checkout"
          name="checkout"
          value={formData.checkout}
          onChange={handleChange}
          placeholder="Add dates"
        />
      </div>

      <div className="input-group" id="input4">
        <div className="label-input-wrapper">
          <label htmlFor="guests">Who</label>
          <input
            type="text"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            placeholder="Add guests"
          />
        </div>
        <button type="submit" className="search-button">
          <FaSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;