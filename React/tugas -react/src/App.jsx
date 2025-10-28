import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Books from "./pages/Books";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";

// 🔹 Admin Dashboard
import DashboardPage from "./pages/Admin/DashboardPage";

import books from "./Utils/books";
import "./App.css";

// 🔹 PrivateRoute untuk admin
const AdminRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user || !user.is_admin) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Router>
      <div className="container">
        {/* Navbar */}
        <header className="d-flex flex-wrap align-items-center justify-content-between py-3 mb-4 border-bottom">
          <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
            <i className="fa-solid fa-book fa-2xl" style={{ color: "#74C0FC" }}></i>
            <span className="ms-2 fs-4">Book Store</span>
          </a>

          <nav className="nav mx-auto">
            <NavLink to="/" end className="nav-link">Home</NavLink>
            <NavLink to="/books" className="nav-link">Books</NavLink>
            <NavLink to="/team" className="nav-link">Team</NavLink>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>

            {/* Menu Dashboard hanya untuk admin */}
            {user?.is_admin && (
              <NavLink to="/admin" className="nav-link text-danger">Dashboard</NavLink>
            )}
          </nav>

          <div className="text-end">
            {!user ? (
              <>
                <NavLink to="/login" className="btn btn-outline-primary me-2">Login</NavLink>
                <NavLink to="/register" className="btn btn-primary">Register</NavLink>
              </>
            ) : (
              <button
                className="btn btn-outline-danger"
                onClick={() => {
                  localStorage.removeItem("user");
                  localStorage.removeItem("token");
                  window.location.href = "/login";
                }}
              >
                Logout
              </button>
            )}
          </div>
        </header>

        {/* Routing */}
        <Routes>
          <Route path="/" element={<HomePage products={books} />} />
          <Route path="/books" element={<Books products={books} />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* 🔹 Admin dashboard protected */}
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <DashboardPage />
              </AdminRoute>
            }
          />
        </Routes>

        {/* Footer */}
        <footer className="py-3 my-4 border-top">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li><NavLink to="/" end className="nav-link px-2">Home</NavLink></li>
            <li><NavLink to="/books" className="nav-link px-2">Books</NavLink></li>
            <li><NavLink to="/team" className="nav-link px-2">Team</NavLink></li>
            <li><NavLink to="/contact" className="nav-link px-2">Contact</NavLink></li>
            {user?.is_admin && (
              <li><NavLink to="/admin" className="nav-link px-2 text-danger">Dashboard</NavLink></li>
            )}
          </ul>
          <p className="text-center text-body-secondary">
            © {new Date().getFullYear()} Book Store, Muhammad Daffa
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
