// src/App.jsx
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Books from "./pages/Books";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";

import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      title: "Atomic Habits",
      desc: "An Easy & Proven Way to Build Good Habits & Break Bad Ones",
      img: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg"
    },
    {
      id: 2,
      title: "The Psychology of Money",
      desc: "Timeless lessons on wealth, greed, and happiness",
      img: "https://m.media-amazon.com/images/I/81Lb75rUhLL.jpg"
    },
    {
      id: 3,
      title: "Deep Work",
      desc: "Rules for Focused Success in a Distracted World",
      img: "https://m.media-amazon.com/images/I/71g2ednj0JL.jpg"
    },
    {
      id: 4,
      title: "Ikigai",
      desc: "The Japanese Secret to a Long and Happy Life",
      img: "https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg"
    },
    {
      id: 5,
      title: "Rich Dad Poor Dad",
      desc: "What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!",
      img: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg"
    },
    {
      id: 6,
      title: "Think and Grow Rich",
      desc: "The landmark bestseller on the secrets of success",
      img: "https://m.media-amazon.com/images/I/71UypkUjStL.jpg"
    },
  ];

  return (
    <Router>
      <div className="container">
        {/* Navbar */}
        <header className="d-flex flex-wrap align-items-center justify-content-between py-3 mb-4 border-bottom">
          {/* Logo */}
          <a
            href="/"
            className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"
          >
            <i className="fa-solid fa-book fa-2xl" style={{ color: "#74C0FC" }}></i>
            <span className="ms-2 fs-4">Book Store</span>
          </a>

          {/* Navigation */}
          <nav className="nav mx-auto">
            <NavLink to="/" end className="nav-link">
              Home
            </NavLink>
            <NavLink to="/books" className="nav-link">
              Books
            </NavLink>
            <NavLink to="/team" className="nav-link">
              Team
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </nav>

          {/* Login & Register */}
          <div className="text-end">
            <NavLink to="/login" className="btn btn-outline-primary me-2">
              Login
            </NavLink>
            <NavLink to="/register" className="btn btn-primary">
              Register
            </NavLink>
          </div>
        </header>

        {/* Routing */}
        <Routes>
          <Route path="/" element={<HomePage products={products} />} />
          <Route path="/books" element={<Books products={products} />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>

        {/* Footer */}
        <footer className="py-3 my-4 border-top">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  "nav-link px-2 " + (isActive ? "fw-bold text-primary" : "text-body-secondary")
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/books"
                className={({ isActive }) =>
                  "nav-link px-2 " + (isActive ? "fw-bold text-primary" : "text-body-secondary")
                }
              >
                Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/team"
                className={({ isActive }) =>
                  "nav-link px-2 " + (isActive ? "fw-bold text-primary" : "text-body-secondary")
                }
              >
                Team
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  "nav-link px-2 " + (isActive ? "fw-bold text-primary" : "text-body-secondary")
                }
              >
                Contact
              </NavLink>
            </li>
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
