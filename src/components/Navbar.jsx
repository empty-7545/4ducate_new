import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("home");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Update active tab based on current route
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
    setShowMobileMenu(false);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  // Inline styles to prevent external CSS interference
  const navbarStyles = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f8f9fa',
    boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
    borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px',
    zIndex: 1050,
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif'
  };

  const containerStyles = {
    width: '100%',
    maxWidth: '100%',
    margin: 0,
    padding: '0 15px'
  };

  const navListStyles = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '8px 0',
    margin: 0,
    listStyle: 'none',
    width: '100%'
  };

  const navItemStyles = {
    textAlign: 'center',
    flex: '1 1 0'
  };

  const navLinkStyles = {
    display: 'block',
    padding: '8px 4px',
    textDecoration: 'none',
    color: '#6c757d',
    borderRadius: '8px',
    transition: 'all 0.2s ease',
    border: 'none',
    background: 'none',
    cursor: 'pointer'
  };

  const activeLinkStyles = {
    ...navLinkStyles,
    color: '#0d6efd',
    backgroundColor: '#e7f1ff'
  };

  const iconStyles = {
    fontSize: '20px',
    display: 'block',
    marginBottom: '2px'
  };

  const textStyles = {
    fontSize: '11px',
    display: 'none',
    '@media (min-width: 768px)': {
      display: 'inline'
    }
  };

  const buttonStyles = {
    padding: '6px 12px',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '1.5',
    textAlign: 'center',
    textDecoration: 'none',
    verticalAlign: 'middle',
    cursor: 'pointer',
    userSelect: 'none',
    border: '1px solid transparent',
    borderRadius: '6px',
    transition: 'all 0.15s ease-in-out',
    margin: '0 2px'
  };

  const primaryButtonStyles = {
    ...buttonStyles,
    color: '#fff',
    backgroundColor: '#0d6efd',
    borderColor: '#0d6efd'
  };

  const outlineButtonStyles = {
    ...buttonStyles,
    color: '#6c757d',
    backgroundColor: 'transparent',
    borderColor: '#6c757d'
  };

  const mobileMenuStyles = {
    position: 'absolute',
    bottom: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    marginBottom: '8px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    width: '75%',
    padding: '8px',
    backgroundColor: '#fff',
    border: '1px solid #dee2e6',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    opacity: showMobileMenu ? 1 : 0,
    visibility: showMobileMenu ? 'visible' : 'hidden',
    transition: 'all 0.2s ease'
  };

  const mobileButtonStyles = {
    ...buttonStyles,
    width: '100%'
  };

  // Check if screen is mobile (you might want to use a proper hook for this)
  const isMobile = window.innerWidth < 768;

  return (
    <>
      <style>
        {`
          @media (min-width: 768px) {
            .navbar-text-show { display: inline !important; }
            .navbar-desktop-show { display: block !important; }
            .navbar-mobile-hide { display: none !important; }
          }
          @media (max-width: 767px) {
            .navbar-text-show { display: none !important; }
            .navbar-desktop-show { display: none !important; }
            .navbar-mobile-hide { display: block !important; }
          }
        `}
      </style>
      <nav style={navbarStyles}>
        <div style={containerStyles}>
          <ul style={navListStyles}>
            {/* Home Tab */}
            <li style={navItemStyles}>
              <Link
                to="/"
                style={activeTab === "home" ? activeLinkStyles : navLinkStyles}
                onClick={() => handleTabClick("home")}
              >
                <i style={iconStyles}>🏠</i>
                <span className="navbar-text-show" style={textStyles}>Home</span>
              </Link>
            </li>

            {/* Courses Tab */}
            <li style={navItemStyles}>
              <Link
                to="/courses"
                style={activeTab === "courses" ? activeLinkStyles : navLinkStyles}
                onClick={() => handleTabClick("courses")}
              >
                <i style={iconStyles}>📚</i>
                <span className="navbar-text-show" style={textStyles}>Courses</span>
              </Link>
            </li>

            {/* Certificate Tab */}
            <li style={navItemStyles}>
              <Link
                to="/certificate"
                style={activeTab === "certificate" ? activeLinkStyles : navLinkStyles}
                onClick={() => handleTabClick("certificate")}
              >
                <i style={iconStyles}>✅</i>
                <span className="navbar-text-show" style={textStyles}>Verify</span>
              </Link>
            </li>

            {/* Who We Are Tab */}
            <li style={navItemStyles}>
              <Link
                to="/who"
                style={activeTab === "who" ? activeLinkStyles : navLinkStyles}
                onClick={() => handleTabClick("who")}
              >
                <i style={iconStyles}>ℹ️</i>
                <span className="navbar-text-show" style={textStyles}>Who We Are</span>
              </Link>
            </li>

            {/* Reach Tab */}
            <li style={navItemStyles}>
              <Link
                to="/reach"
                style={activeTab === "reach" ? activeLinkStyles : navLinkStyles}
                onClick={() => handleTabClick("reach")}
              >
                <i style={iconStyles}>✉️</i>
                <span className="navbar-text-show" style={textStyles}>Reach</span>
              </Link>
            </li>

            {/* Login / Join Now - Desktop View */}
            <li style={navItemStyles} className="navbar-desktop-show">
              <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', paddingTop: '4px' }}>
                <button
                  style={outlineButtonStyles}
                  onClick={() => navigate("/login")}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#6c757d';
                    e.target.style.color = '#fff';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#6c757d';
                  }}
                >
                  Login
                </button>
                <button
                  style={primaryButtonStyles}
                  onClick={() => navigate("/register")}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#0b5ed7';
                    e.target.style.borderColor = '#0a58ca';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#0d6efd';
                    e.target.style.borderColor = '#0d6efd';
                  }}
                >
                  Join Now
                </button>
              </div>
            </li>

            {/* Mobile Menu Toggle Button */}
            <li style={navItemStyles} className="navbar-mobile-hide">
              <button
                style={{...navLinkStyles, padding: 0}}
                onClick={toggleMobileMenu}
                aria-expanded={showMobileMenu}
              >
                <i style={{fontSize: '24px'}}>⋮</i>
              </button>

              {/* Dropdown-style Mobile Menu */}
              <div style={mobileMenuStyles}>
                <button
                  style={{...mobileButtonStyles, ...outlineButtonStyles}}
                  onClick={() => {
                    navigate("/login");
                    setShowMobileMenu(false);
                  }}
                >
                  Login
                </button>
                <button
                  style={{...mobileButtonStyles, ...primaryButtonStyles}}
                  onClick={() => {
                    navigate("/register");
                    setShowMobileMenu(false);
                  }}
                >
                  Join Now
                </button>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;