import { useNavigate } from "react-router-dom";
import { logoutAdmin, getUsers } from "../utils/auth.js";

const read = (key) => JSON.parse(localStorage.getItem(key)) || [];

export default function AdminDashboard() {
  const navigate = useNavigate();
  const stats = [
    ["👥 Users", getUsers().length],
    ["🏨 Hotels", read("adminHotels").length],
    ["📅 Bookings", read("bookings").length],
    ["⭐ Reviews", read("hotelReviews").length],
  ];
  const links = [
    ["Manage Hotels", "/admin/admin-hotels.html"],
    ["Manage Bookings", "/admin/admin-bookings.html"],
    ["Manage Users", "/admin/admin-users.html"],
    ["Manage Reviews", "/admin/admin-reviews.html"],
    ["Analytics", "/admin/admin-analytics.html"],
  ];

  return (
    <>
      <nav>
        <h2>StayEase Admin</h2>
        <div>
          <a href="/">Home</a>
          <a href="#" onClick={(e) => { e.preventDefault(); logoutAdmin(); navigate("/admin/login"); }}>
            Logout
          </a>
        </div>
      </nav>
      <section className="destinations">
        <h2>Admin Dashboard</h2>
        <div className="feature-list">
          {stats.map(([label, value]) => (
            <div className="feature-card" key={label}>
              <h3>{label}</h3>
              <p style={{ fontSize: 32, fontWeight: "bold" }}>{value}</p>
            </div>
          ))}
        </div>
        <div className="destination-list">
          {links.map(([label, href]) => (
            <button key={label} onClick={() => (window.location.href = href)}>{label}</button>
          ))}
        </div>
      </section>
    </>
  );
}
