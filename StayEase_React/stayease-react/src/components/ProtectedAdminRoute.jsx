import { Navigate } from "react-router-dom";
import { isAdminLoggedIn } from "../utils/auth.js";

export default function ProtectedAdminRoute({ children }) {
  return isAdminLoggedIn() ? children : <Navigate to="/admin/login" replace />;
}
