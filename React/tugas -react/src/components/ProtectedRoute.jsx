import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ adminOnly = false, children }) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  
  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

 
  const userRole = user.role ?? (user.is_admin ? "admin" : "customer");

  
  if (adminOnly && userRole !== "admin") {
    return <Navigate to="/" replace />;
  }


  return children;
};

export default ProtectedRoute;
