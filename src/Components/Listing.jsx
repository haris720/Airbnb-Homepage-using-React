import { useEffect, useState } from "react";
import listings from "../listing";
import "../Styles/ListingCard.css";

const Listings = () => {
  const [listingData, setListingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchListings = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (listings) {
          resolve(listings);
        } else {
          reject("Failed to load listings");
        }
      }, 1000);
    });
  };

  useEffect(() => {
    const loadListings = async () => {
      try {
        const data = await fetchListings();
        setListingData(data);
      } catch (error) {
        setError("Failed to fetch listings");
      } finally {
        setLoading(false);
      }
    };

    loadListings();
  }, []);

  if (loading) {
    return <p>Loading listings...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="listings-container">
      {listingData.map((listing) => (
        <div className="listing-card" key={listing.id}>
          <img
            src={listing.image}
            alt={listing.title}
            className="listing-image"
          />
          <h3 className="listing-title">{listing.title}</h3>
          <p className="listing-type">{listing.type}</p>
          <p className="listing-details">
            {listing.guests} Guests | {listing.bedrooms} Bedrooms |{" "}
            {listing.bathrooms} Bathrooms
          </p>
          <p className="listing-price">${listing.price} per night</p>
          <p className="listing-rating">Rating: {listing.rating} ★</p>
        </div>
      ))}
    </div>
  );
};

export default Listings;