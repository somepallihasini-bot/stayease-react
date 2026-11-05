import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginAdmin } from "../utils/auth.js";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginAdmin(email, password)) {
      alert("Admin Login Successful!");
      navigate("/admin/dashboard");
    } else {
      alert("Invalid Admin Email or Password!");
    }
  };

  return (
    <div className="auth-page">
      <div className="form-container">
        <h1>StayEase Admin</h1>
        <p>Admin Dashboard Access</p>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Admin Email" value={email}
            onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Admin Password" value={password}
            onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Login</button>
        </form>
        <div className="message"><Link to="/">Back to Home</Link></div>
      </div>
    </div>
  );
}
