import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import '../css/BottomNavbar.css';

function BottomNavbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { 
      path: '/dashboard', 
      icon: 'bi-house-fill', 
      label: 'Home',
      isActive: location.pathname === '/dashboard'
    },
    { 
      path: '/dashboard/coursecard', 
      icon: 'bi-book-fill', 
      label: 'Courses',
      isActive: location.pathname === '/dashboard/coursecard'
    },
    { 
      path: '/dashboard/challenges', 
      icon: 'bi-patch-check-fill', 
      label: 'Challenges',
      isActive: location.pathname === '/dashboard/challenges'
    },
    { 
      path: '/dashboard/community', 
      icon: 'bi-info-circle-fill', 
      label: 'Community',
      isActive: location.pathname === '/dashboard/community'
    },
    { 
      path: '/dashboard/intern', 
      icon: 'bi-briefcase-fill', 
      label: 'Opprotunities',
      isActive: location.pathname === '/dashboard/intern'
    }
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="bottom-navbar">
      {navItems.map((item, index) => (
        <div 
          key={index}
          className={`nav-item1 ${item.isActive ? 'active' : ''}`}
          onClick={() => handleNavigation(item.path)}
        >
          <i className={`bi ${item.icon}`}></i>
          <span className="nav-label">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default BottomNavbar;