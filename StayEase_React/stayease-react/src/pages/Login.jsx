import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../utils/auth.js";

export default function Login() {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState(localStorage.getItem("lastRegisteredEmail") || "");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = loginUser(email, password);
    if (user) {
      alert("Login Successful! Welcome " + user.name);
      navigate("/");
    } else {
      alert("Invalid Email or Password. Please try again.");
    }
  };

  return (
    <div className="auth-page">
      <div className="form-container">
        <h1>StayEase</h1>
        <p>Welcome to StayEase Booking System</p>

        {!showForm ? (
          <>
            <h3>Select Login Type</h3>
            <button onClick={() => setShowForm(true)}>👤 User Login</button>
            <button onClick={() => navigate("/admin/login")}>🔐 Admin Login</button>
            <div className="message"><Link to="/">Back to Home</Link></div>
          </>
        ) : (
          <>
            <h3>User Login</h3>
            <form onSubmit={handleSubmit}>
              <input type="email" placeholder="Enter Your Email" value={email}
                onChange={(e) => setEmail(e.target.value)} required />
              <input type="password" placeholder="Enter Your Password" value={password}
                onChange={(e) => setPassword(e.target.value)} required />
              <button type="submit">Login</button>
            </form>
            <div className="message">Don't have an account? <Link to="/signup">Sign Up</Link></div>
            <div className="message">
              <a href="#" onClick={(e) => { e.preventDefault(); setShowForm(false); }}>
                Back to Login Selection
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
