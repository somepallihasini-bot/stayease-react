import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout.jsx";
import useLocalStorage from "../hooks/useLocalStorage.js";

const FALLBACK = "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800";

export default function Wishlist() {
  const [wishlist, setWishlist] = useLocalStorage("wishlist", []);
  const remove = (index) => setWishlist(wishlist.filter((_, i) => i !== index));

  return (
    <PageLayout title="StayEase 🏨 Wishlist ❤️">
      {wishlist.length === 0 ? (
        <div className="empty">
          Your Wishlist is Empty! ❤️<br /><br />
          <a href="/pages/hotels.html">Explore Hotels</a>
        </div>
      ) : (
        <div className="hotel-grid">
          {wishlist.map((hotel, index) => (
            <div className="hotel-card" key={index}>
              <img src={hotel.image} alt={hotel.name}
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = FALLBACK; }} />
              <div className="hotel-info">
                <h3>{hotel.name}</h3>
                <p>📍 {hotel.city} - {hotel.area}</p>
                <p>⭐ {hotel.rating || 4} / 5</p>
                <p className="price">₹{Number(hotel.price).toLocaleString("en-IN")} / night</p>
                <button onClick={() => remove(index)}>❤️ Remove from Wishlist</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </PageLayout>
  );
}
