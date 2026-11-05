import PageLayout from "../components/PageLayout.jsx";

export default function LoyaltyPoints() {
  const points = Number(localStorage.getItem("loyaltyPoints")) || 0;
  const history = JSON.parse(localStorage.getItem("pointsHistory")) || [];

  return (
    <PageLayout title="⭐ StayEase Loyalty Program">
      <div className="points-card">
        <h2>My Loyalty Points</h2>
        <h1>{points}</h1>
        <p>Available Points</p>
      </div>

      <div className="card">
        <h2>🎁 Rewards</h2>
        <p>100 points = ₹100 discount</p>
        <p>200 points = ₹200 discount</p>
        <p>500 points = ₹500 discount</p>
        <p className="note">Redeem points during your next booking.</p>
      </div>

      <div className="card">
        <h2>🏆 Points History</h2>
        <table>
          <thead><tr><th>Date</th><th>Activity</th><th>Points</th></tr></thead>
          <tbody>
            {history.length === 0 ? (
              <tr><td colSpan="3">No points history available.</td></tr>
            ) : (
              history.map((item, i) => (
                <tr key={i}><td>{item.date}</td><td>{item.activity}</td><td>+{item.points}</td></tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </PageLayout>
  );
}
