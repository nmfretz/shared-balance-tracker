import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const RequireAuth = ({ children }) => {
  const { user, loading, error } = useAuth();
  if (loading) return; // could return a loading page here
  if (!user) return <Navigate to="/login" replace />; // Redirect to the /login page

  return children;
};

export default RequireAuth;
