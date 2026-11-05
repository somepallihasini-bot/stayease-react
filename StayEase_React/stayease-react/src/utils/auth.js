// All auth data lives in localStorage (same keys as the original HTML version,
// so the remaining pages keep working).
const ADMIN = { email: "admin@stayease.com", password: "admin123" };

export const getUsers = () => JSON.parse(localStorage.getItem("users")) || [];

export function signupUser({ name, email, password, confirmPassword }) {
  email = email.trim().toLowerCase();
  name = name.trim();
  if (name.length < 2) return "Please enter a valid name";
  if (password.length < 6) return "Password must contain at least 6 characters";
  if (password !== confirmPassword) return "Passwords do not match";
  const users = getUsers();
  if (users.some((u) => u.email.toLowerCase() === email))
    return "Email already registered. Please Login.";
  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("lastRegisteredEmail", email);
  return null; // no error
}

export function loginUser(email, password) {
  email = email.trim().toLowerCase();
  const user = getUsers().find(
    (u) => u.email.toLowerCase() === email && u.password === password
  );
  if (!user) return null;
  localStorage.setItem("userName", user.name);
  localStorage.setItem("userEmail", user.email);
  return user;
}

export const isUserLoggedIn = () =>
  !!(localStorage.getItem("userName") || localStorage.getItem("currentUser"));

export function logoutUser() {
  ["userName", "userEmail", "currentUser"].forEach((k) => localStorage.removeItem(k));
}

export function loginAdmin(email, password) {
  if (email.trim() === ADMIN.email && password === ADMIN.password) {
    localStorage.setItem("adminLogin", "true");
    return true;
  }
  return false;
}

export const isAdminLoggedIn = () => localStorage.getItem("adminLogin") === "true";
export const logoutAdmin = () => localStorage.removeItem("adminLogin");
