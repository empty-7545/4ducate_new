import React, { useState } from 'react';
import { Menu, Bell, User } from 'lucide-react';
import { useNavigate } from "react-router-dom";

function ProfileNav({ isMobile }) {
  const [menuHover, setMenuHover] = useState(false);
  const [bellHover, setBellHover] = useState(false);
  const [profileHover, setProfileHover] = useState(false);
  const navigate = useNavigate();

  const navStyles = {
    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    borderRadius: '15px',
    margin: '10px 20px',
    padding: '12px 24px',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden'
  };

  const titleStyles = {
    fontSize: '22px',
    fontWeight: '700',
    color: '#212529',
    letterSpacing: '0.5px',
    margin: '0',
    textTransform: 'uppercase',
    background: 'linear-gradient(45deg, #495057, #6c757d)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  };

  const menuIconStyles = {
    cursor: 'pointer',
    color: menuHover ? '#0d6efd' : '#6c757d',
    transition: 'all 0.3s ease',
    width: '24px',
    height: '24px',
    transform: menuHover ? 'translateY(-2px) rotate(5deg)' : 'translateY(0) rotate(0)',
    filter: menuHover ? 'drop-shadow(0 2px 4px rgba(13, 110, 253, 0.3))' : 'none'
  };

  const bellIconStyles = {
    cursor: 'pointer',
    color: bellHover ? '#dc3545' : '#6c757d',
    transition: 'all 0.3s ease',
    width: '24px',
    height: '24px',
    transform: bellHover ? 'translateY(-2px) rotate(-10deg)' : 'translateY(0) rotate(0)',
    filter: bellHover ? 'drop-shadow(0 2px 4px rgba(220, 53, 69, 0.3))' : 'none'
  };

  const profileIconStyles = {
    width: '38px',
    height: '38px',
    background: profileHover 
      ? 'linear-gradient(45deg, #0d6efd, #6610f2)' 
      : 'linear-gradient(45deg, #6c757d, #495057)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: profileHover 
      ? '0 6px 20px rgba(13, 110, 253, 0.4)' 
      : '0 2px 10px rgba(0, 0, 0, 0.15)',
    transform: profileHover ? 'scale(1.1)' : 'scale(1)',
    border: '2px solid rgba(255, 255, 255, 0.9)'
  };

  // Mobile responsive styles
  const mobileNavStyles = {
    ...navStyles,
    padding: '10px 16px',
    margin: '8px 10px',
    borderRadius: '12px'
  };

  const mobileTitleStyles = {
    ...titleStyles,
    fontSize: '18px'
  };

  const mobileIconStyles = {
    width: '20px',
    height: '20px'
  };

  const mobileProfileIconStyles = {
    ...profileIconStyles,
    width: '32px',
    height: '32px'
  };

  // Check if screen is mobile (780px or less)
  const isMobileScreen = window.innerWidth <= 780;

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <nav 
              className="d-flex justify-content-between align-items-center"
              style={isMobileScreen ? mobileNavStyles : navStyles}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 6px 25px rgba(0, 0, 0, 0.12)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Left Side */}
              <div className="d-flex align-items-center">
                {isMobileScreen && (
                  <div className="me-3">
                    <Menu
                      style={isMobileScreen ? { ...menuIconStyles, ...mobileIconStyles } : menuIconStyles}
                      onMouseEnter={() => setMenuHover(true)}
                      onMouseLeave={() => setMenuHover(false)}
                      onClick={() => navigate('/dashboard/profile')}
                    />
                  </div>
                )}
                <h2 style={isMobileScreen ? mobileTitleStyles : titleStyles}>
                  📚 Classroom
                </h2>
              </div>

              {/* Right Side */}
              <div className="d-flex align-items-center" style={{ gap: isMobileScreen ? '10px' : '16px' }}>
                {/* Notification Bell */}
                <div className="position-relative">
                  <Bell
                    style={isMobileScreen ? { ...bellIconStyles, ...mobileIconStyles } : bellIconStyles}
                    onMouseEnter={() => setBellHover(true)}
                    onMouseLeave={() => setBellHover(false)}
                    onClick={() => navigate('/dashboard/profile')}
                  />
                  {/* Notification Badge */}
                  <span 
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                    style={{
                      background: 'linear-gradient(45deg, #dc3545, #fd7e14)',
                      fontSize: '10px',
                      padding: '2px 6px',
                      boxShadow: '0 2px 4px rgba(220, 53, 69, 0.3)',
                      border: '2px solid white',
                      animation: 'pulse 2s infinite'
                    }}
                  >
                    3
                  </span>
                </div>

                {/* Profile Icon */}
                <div
                  style={isMobileScreen ? mobileProfileIconStyles : profileIconStyles}
                  onMouseEnter={() => setProfileHover(true)}
                  onMouseLeave={() => setProfileHover(false)}
                  onClick={() => navigate('/dashboard/profile')}
                >
                  <User size={isMobileScreen ? 16 : 18} />
                </div>
              </div>

              {/* Decorative Background Elements */}
              <div 
                style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '-10px',
                  width: '30px',
                  height: '30px',
                  background: 'linear-gradient(45deg, rgba(13, 110, 253, 0.1), rgba(102, 16, 242, 0.1))',
                  borderRadius: '50%',
                  filter: 'blur(10px)',
                  zIndex: 0
                }}
              />
              <div 
                style={{
                  position: 'absolute',
                  bottom: '-15px',
                  right: '-15px',
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(45deg, rgba(220, 53, 69, 0.1), rgba(253, 126, 20, 0.1))',
                  borderRadius: '50%',
                  filter: 'blur(15px)',
                  zIndex: 0
                }}
              />
            </nav>
          </div>
        </div>
      </div>

      {/* Inline Styles to prevent external CSS conflicts */}
      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        
        .badge {
          z-index: 10 !important;
        }
        
        nav * {
          box-sizing: border-box !important;
        }
        
        nav {
          z-index: 1 !important;
        }
        
        /* Override any external styles */
        .container-fluid {
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
        
        .row {
          margin-left: 0 !important;
          margin-right: 0 !important;
        }
        
        .col-12 {
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
        
        h2 {
          margin: 0 !important;
          padding: 0 !important;
        }
        
        /* Enhanced interactive states */
        @media (hover: hover) {
          nav:hover {
            background: linear-gradient(135deg, #ffffff 0%, #f1f3f4 100%) !important;
          }
        }
        
        /* Mobile responsive adjustments */
        @media (max-width: 780px) {
          nav {
            margin: 8px 10px !important;
            padding: 10px 16px !important;
          }
        }
        
        /* Ensure icons are clickable */
        svg {
          pointer-events: auto !important;
        }
      `}</style>
    </>
  );
}

export default ProfileNav;