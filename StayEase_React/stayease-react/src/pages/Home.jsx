import { useState } from "react";
import Navbar from "../components/Navbar.jsx";

const DESTINATIONS = [
  ["Hyderabad", "📍"], ["Bangalore", "📍"], ["Goa", "🏖️"], ["Mumbai", "🌆"], ["Delhi", "🏛️"],
];
const FEATURES = [
  ["🏨 Best Hotels", "Explore comfortable hotels at your favourite destinations."],
  ["💰 Best Prices", "Find affordable prices for your perfect stay."],
  ["🔒 Secure Booking", "Enjoy a simple and secure hotel booking experience."],
];

function goToHotels(city) {
  localStorage.setItem("selectedDestination", city);
  window.location.href = "/pages/hotels.html?destination=" + encodeURIComponent(city);
}

export default function Home() {
  const [destination, setDestination] = useState("");

  const search = () => {
    if (destination.trim() === "") return alert("Please enter a destination!");
    goToHotels(destination.trim());
  };

  return (
    <>
      <Navbar />
      <section className="hero">
        <h1>Welcome to StayEase</h1>
        <p>Find Your Perfect Stay. Book Your Favourite Hotels at the Best Prices.</p>
        <div className="search-box">
          <input
            type="text"
            placeholder="Enter destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && search()}
          />
          <button onClick={search}>Search Hotels</button>
        </div>
      </section>

      <section className="destinations">
        <h2>Popular Destinations</h2>
        <div className="destination-list">
          {DESTINATIONS.map(([city, icon]) => (
            <button key={city} onClick={() => goToHotels(city)}>{icon} {city}</button>
          ))}
        </div>
      </section>

      <section className="features">
        <h2>Why Choose StayEase?</h2>
        <div className="feature-list">
          {FEATURES.map(([title, text]) => (
            <div className="feature-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <footer><p>© 2026 StayEase. All Rights Reserved.</p></footer>
    </>
  );
}
