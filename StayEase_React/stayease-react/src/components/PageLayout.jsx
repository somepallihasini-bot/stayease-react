import { Link } from "react-router-dom";

export default function PageLayout({ title, children }) {
  return (
    <div className="sub-page">
      <div className="sub-header">
        <h1>{title}</h1>
        <Link to="/">← Back to Home</Link>
      </div>
      <div className="sub-container">{children}</div>
      <div className="sub-footer">© 2026 StayEase - Smart Hotel Booking Platform</div>
    </div>
  );
}
