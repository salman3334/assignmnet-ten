// src/components/PrivateRoute.jsx
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <div className="text-center mt-20">Loading...</div>;
  if (!user) return <Navigate to="/login" state={{ from: location }} replace />;

  return children;
}
