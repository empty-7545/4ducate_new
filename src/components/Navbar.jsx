import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Add useNavigate
  const [activeTab, setActiveTab] = useState("home");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Update active tab when location changes
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setActiveTab("home");
    } else {
      setActiveTab(path.substring(1));
    }
  }, [location]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setShowMobileMenu(false); // Close mobile menu
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  // Navigation handlers
  const handleLoginClick = () => navigate("/login");
  const handleJoinNowClick = () => navigate("/register");

  return (
    <nav className="custom-navbar fixed-bottom">
      <ul className="nav-list">
        <li className="nav-item">
          <Link
            to="/"
            className={`nav-link ${activeTab === "home" ? "active" : ""}`}
            onClick={() => handleTabClick("home")}
          >
            <i className="bi bi-house-fill"></i>
            <span className="nav-text">Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/courses"
            className={`nav-link ${activeTab === "courses" ? "active" : ""}`}
            onClick={() => handleTabClick("courses")}
          >
            <i className="bi bi-book-fill"></i>
            <span className="nav-text">Courses</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/certificate"
            className={`nav-link ${activeTab === "certificate" ? "active" : ""}`}
            onClick={() => handleTabClick("certificate")}
          >
            <i className="bi bi-patch-check-fill"></i>
            <span className="nav-text">Verify</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/who"
            className={`nav-link ${activeTab === "who" ? "active" : ""}`}
            onClick={() => handleTabClick("who")}
          >
            <i className="bi bi-info-circle-fill"></i>
            <span className="nav-text">Who We Are</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/reach"
            className={`nav-link ${activeTab === "reach" ? "active" : ""}`}
            onClick={() => handleTabClick("reach")}
          >
            <i className="bi bi-envelope-fill"></i>
            <span className="nav-text">Reach</span>
          </Link>
        </li>
        {/* Desktop Buttons */}
        <li className="nav-item desktop-buttons">
          <button className="btn login-btn" onClick={handleLoginClick}>
            Login
          </button>
          <button className="btn join-btn" onClick={handleJoinNowClick}>
            Join Now
          </button>
        </li>
        {/* Mobile Menu Toggle */}
        <li className="nav-item mobile-menu-toggle">
          <a 
            href="#" 
            className="nav-link" 
            onClick={(e) => {
              e.preventDefault();
              toggleMobileMenu();
            }}
          >
            <i className="bi bi-three-dots"></i>
          </a>
          {showMobileMenu && (
            <div className="mobile-menu">
              <button className="btn mobile-login-btn" onClick={handleLoginClick}>
                Login
              </button>
              <button className="btn mobile-join-btn" onClick={handleJoinNowClick}>
                Join Now
              </button>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
