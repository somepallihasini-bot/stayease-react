import { useEffect } from "react";
import PageLayout from "../components/PageLayout.jsx";
import useLocalStorage from "../hooks/useLocalStorage.js";

export default function Notifications() {
  const [list, setList] = useLocalStorage("notifications", []);

  // Demo notification only when none exist
  useEffect(() => {
    if (list.length === 0) {
      setList([{
        id: Date.now(),
        title: "Welcome to StayEase!",
        message: "Thank you for using StayEase Hotel Booking.",
        date: new Date().toLocaleString(),
        read: false,
      }]);
    }
  }, []);

  const markRead = (id) => setList(list.map((n) => (n.id === id ? { ...n, read: true } : n)));
  const markAllRead = () => setList(list.map((n) => ({ ...n, read: true })));
  const clearAll = () => {
    if (confirm("Are you sure you want to clear all notifications?")) setList([]);
  };

  return (
    <PageLayout title="🔔 StayEase Notifications">
      <h2>My Notifications</h2>
      <button onClick={markAllRead}>Mark All as Read</button>
      <button onClick={clearAll}>Clear All</button>

      {list.length === 0 ? (
        <div className="empty"><h3>📭 No Notifications</h3><p>You are all caught up!</p></div>
      ) : (
        list.map((n) => (
          <div key={n.id} className={"notification" + (n.read ? "" : " unread")}>
            <h3>🔔 {n.title}</h3>
            <p>{n.message}</p>
            <div className="date">{n.date}</div>
            <button onClick={() => markRead(n.id)}>Mark as Read</button>
          </div>
        ))
      )}
    </PageLayout>
  );
}
