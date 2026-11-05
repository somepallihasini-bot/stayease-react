import { Link, useNavigate } from "react-router-dom";
import { isUserLoggedIn, logoutUser } from "../utils/auth.js";

export default function Navbar() {
  const navigate = useNavigate();
  const loggedIn = isUserLoggedIn();

  const handleLogout = (e) => {
    e.preventDefault();
    logoutUser();
    alert("Logged out successfully!");
    navigate("/");
  };

  return (
    <nav>
      <h2>StayEase 🏨</h2>
      <div>
        <Link to="/">Home</Link>
        <a href="/pages/hotels.html">Hotels</a>
        <a href="/pages/my-bookings.html">My Bookings</a>
        <Link to="/wishlist">Wishlist ❤️</Link>
        {loggedIn ? (
          <>
            <a href="/pages/profile.html">Profile</a>
            <a href="#" onClick={handleLogout}>Logout</a>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Register</Link>
          </>
        )}
        <a href="/pages/chatbot.html">AI Assistant 🤖</a>
        <a href="/pages/compare-hotels.html">Compare Hotels</a>
        <Link to="/notifications">🔔 Notifications</Link>
        <Link to="/loyalty-points">⭐ Loyalty Points</Link>
        <a href="/pages/room-service.html">🛎️ Room Service</a>
        <Link to="/admin/login">Admin</Link>
      </div>
    </nav>
  );
}
