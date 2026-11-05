import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../utils/auth.js";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = signupUser(form);
    if (error) return alert(error);
    alert("Registration Successful! Please Login.");
    navigate("/login");
  };

  return (
    <div className="auth-page">
      <div className="form-container">
        <h1>StayEase</h1>
        <p>Create Your Account</p>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Enter Your Name" value={form.name} onChange={change} required />
          <input name="email" type="email" placeholder="Enter Your Email" value={form.email} onChange={change} required />
          <input name="password" type="password" placeholder="Create Password" value={form.password} onChange={change} required />
          <input name="confirmPassword" type="password" placeholder="Confirm Password" value={form.confirmPassword} onChange={change} required />
          <button type="submit">Sign Up</button>
        </form>
        <div className="message">Already have an account? <Link to="/login">Login</Link></div>
        <div className="message"><Link to="/">Back to Home</Link></div>
      </div>
    </div>
  );
}
