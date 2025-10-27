import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ adminOnly = false, children }) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  // 🔐 Belum login → arahkan ke login
  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  // 🧩 Deteksi role (support dua kemungkinan format dari backend)
  const userRole = user.role ?? (user.is_admin ? "admin" : "customer");

  // 🚫 Jika route adminOnly tapi user bukan admin → tolak
  if (adminOnly && userRole !== "admin") {
    return <Navigate to="/" replace />;
  }

  // ✅ Semua valid → tampilkan halaman
  return children;
};

export default ProtectedRoute;
