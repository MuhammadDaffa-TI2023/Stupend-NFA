// src/App.jsx
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Books from "./pages/Books";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";

import books from "./Utils/books"; // ✅ pakai data dari utils
import "./App.css";

function App() {
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
          </nav>

          <div className="text-end">
            <NavLink to="/login" className="btn btn-outline-primary me-2">Login</NavLink>
            <NavLink to="/register" className="btn btn-primary">Register</NavLink>
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
        </Routes>

        {/* Footer */}
        <footer className="py-3 my-4 border-top">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li><NavLink to="/" end className="nav-link px-2">Home</NavLink></li>
            <li><NavLink to="/books" className="nav-link px-2">Books</NavLink></li>
            <li><NavLink to="/team" className="nav-link px-2">Team</NavLink></li>
            <li><NavLink to="/contact" className="nav-link px-2">Contact</NavLink></li>
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
