import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import LoyaltyPoints from "./pages/LoyaltyPoints.jsx";
import Notifications from "./pages/Notifications.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute.jsx";

export default function App() {
  return (
    <Routes>
      {/* User module */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/loyalty-points" element={<LoyaltyPoints />} />
      <Route path="/notifications" element={<Notifications />} />

      {/* Admin module */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedAdminRoute>
            <AdminDashboard />
          </ProtectedAdminRoute>
        }
      />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
