import React, { useState } from 'react';

// CourseCard component
const CourseCard = ({ title, image }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="col-lg-6 col-md-6 col-sm-12 mb-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="card h-100 shadow-sm border-0"
        style={{
          borderRadius: '15px',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
          boxShadow: isHovered ? '0 12px 30px rgba(0,0,0,0.15)' : '0 4px 15px rgba(0,0,0,0.08)',
          background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'
        }}
      >
        <div className="position-relative">
          <img 
            src={image} 
            className="card-img-top" 
            alt={title}
            style={{
              height: '200px',
              objectFit: 'cover',
              transition: 'transform 0.3s ease',
              transform: isHovered ? 'scale(1.05)' : 'scale(1)'
            }}
          />
          <div 
            className="position-absolute top-0 end-0 m-2"
            style={{
              background: 'rgba(255,255,255,0.9)',
              borderRadius: '20px',
              padding: '5px 10px',
              fontSize: '12px',
              fontWeight: '600',
              color: '#495057',
              backdropFilter: 'blur(10px)'
            }}
          >
            NEW
          </div>
        </div>
        <div className="card-body p-4">
          <h5 
            className="card-title mb-3"
            style={{
              color: '#212529',
              fontWeight: '700',
              fontSize: '18px',
              letterSpacing: '0.5px'
            }}
          >
            {title}
          </h5>
          <button 
            className="btn w-100"
            style={{
              background: isHovered ? 'linear-gradient(45deg, #0d6efd, #6610f2)' : 'linear-gradient(45deg, #6c757d, #495057)',
              border: 'none',
              borderRadius: '10px',
              color: 'white',
              fontWeight: '600',
              padding: '10px 20px',
              transition: 'all 0.3s ease',
              transform: isHovered ? 'scale(1.02)' : 'scale(1)'
            }}
          >
            Continue Learning
          </button>
        </div>
      </div>
    </div>
  );
};

function ProfileHome() {
  const [lightBulbGlow, setLightBulbGlow] = useState(false);
  const [bannerHover, setBannerHover] = useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setLightBulbGlow(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const profileHomeStyles = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #ffffff 100%)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: '20px 0'
  };

  const welcomeCardStyles = {
    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
    borderRadius: '20px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
    border: '1px solid rgba(255,255,255,0.2)',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
    position: 'relative'
  };

  const bookIconStyles = {
    width: '80px',
    height: '80px',
    background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    boxShadow: '0 4px 15px rgba(33,150,243,0.3)',
    transition: 'all 0.3s ease'
  };

  const lightBulbStyles = {
    position: 'absolute',
    top: '-15px',
    right: '5px',
    fontSize: '22px',
    transition: 'all 0.5s ease',
    filter: lightBulbGlow ? 'drop-shadow(0 0 8px rgba(255,235,59,0.8))' : 'drop-shadow(0 0 4px rgba(255,235,59,0.5))',
    transform: lightBulbGlow ? 'scale(1.1)' : 'scale(1)'
  };

  const aiBannerStyles = {
    background: bannerHover 
      ? 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)' 
      : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
    borderRadius: '20px',
    boxShadow: bannerHover ? '0 12px 40px rgba(0,0,0,0.15)' : '0 8px 30px rgba(0,0,0,0.1)',
    border: '1px solid rgba(0,0,0,0.05)',
    transition: 'all 0.4s ease',
    transform: bannerHover ? 'translateY(-5px)' : 'translateY(0)',
    position: 'relative',
    overflow: 'hidden'
  };

  return (
    <div style={profileHomeStyles}>
      <div className="container">
        {/* Welcome Card */}
        <div className="row mb-4">
          <div className="col-12">
            <div 
              className="p-4 p-md-5" 
              style={welcomeCardStyles}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
              }}
            >
              <div className="row align-items-center">
                <div className="col-lg-8 col-md-7 col-12 mb-3 mb-md-0">
                  <h2 
                    className="mb-3"
                    style={{
                      fontSize: '32px',
                      fontWeight: '700',
                      color: '#212529',
                      letterSpacing: '0.5px',
                      background: 'linear-gradient(45deg, #212529, #495057)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    Hello, Yasar
                  </h2>
                  <p 
                    className="mb-3"
                    style={{
                      fontSize: '16px',
                      color: '#6c757d',
                      lineHeight: '1.6',
                      fontWeight: '400'
                    }}
                  >
                    Welcome back to your learning journey! Continue exploring and mastering new skills with our comprehensive courses.
                  </p>
                  <p 
                    className="mb-0"
                    style={{
                      fontStyle: 'italic',
                      fontSize: '14px',
                      color: '#868e96',
                      fontWeight: '500',
                      letterSpacing: '0.3px'
                    }}
                  >
                    "Knowledge is the key to unlocking your potential"
                  </p>
                </div>
                <div className="col-lg-4 col-md-5 col-12 text-center">
                  <div 
                    style={bookIconStyles}
                    className="mx-auto"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(33,150,243,0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(33,150,243,0.3)';
                    }}
                  >
                    <div style={lightBulbStyles}>💡</div>
                    <div style={{ fontSize: '40px', color: '#2196f3' }}>📖</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Your Courses Section */}
        <div className="row mb-5">
          <div className="col-12">
            <h3 
              className="mb-4"
              style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#212529',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                position: 'relative',
                paddingBottom: '10px'
              }}
            >
              Your Courses
              <div 
                style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '60px',
                  height: '3px',
                  background: 'linear-gradient(45deg, #2196f3, #21cbf3)',
                  borderRadius: '2px'
                }}
              />
            </h3>
            <div className="row">
              <CourseCard 
                title="Become Game Developer" 
                image="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=320&fit=crop" 
              />
              <CourseCard 
                title="Web Development Mastery" 
                image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=320&fit=crop" 
              />
            </div>
          </div>
        </div>

        {/* AI Banner */}
        <div className="row">
          <div className="col-12">
            <div 
              className="p-4 p-md-5 position-relative"
              style={aiBannerStyles}
              onMouseEnter={() => setBannerHover(true)}
              onMouseLeave={() => setBannerHover(false)}
            >
              <div className="row align-items-center">
                <div className="col-lg-8 col-md-7 col-12">
                  <h2 
                    className="mb-3"
                    style={{
                      fontSize: '28px',
                      fontWeight: '700',
                      color: '#212529',
                      background: 'linear-gradient(45deg, #673ab7, #9c27b0)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    🤖 Build Your Own AI
                  </h2>
                  <p 
                    className="mb-4"
                    style={{
                      color: '#6c757d',
                      fontSize: '16px',
                      lineHeight: '1.6'
                    }}
                  >
                    Join the future of technology with our upcoming AI development course
                  </p>
                  <button 
                    className="btn btn-lg"
                    style={{
                      background: 'linear-gradient(45deg, #673ab7, #9c27b0)',
                      border: 'none',
                      borderRadius: '15px',
                      color: 'white',
                      fontWeight: '600',
                      padding: '12px 30px',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(156,39,176,0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.05)';
                      e.target.style.boxShadow = '0 6px 20px rgba(156,39,176,0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.boxShadow = '0 4px 15px rgba(156,39,176,0.3)';
                    }}
                  >
                    Pre Register Now
                  </button>
                </div>
                <div className="col-lg-4 col-md-5 col-12 text-end">
                  <div 
                    className="position-absolute top-0 end-0 m-3"
                    style={{
                      background: 'linear-gradient(45deg, #ff9800, #ffc107)',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: '700',
                      color: 'white',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      boxShadow: '0 2px 10px rgba(255,152,0,0.3)',
                      animation: 'pulse 2s infinite'
                    }}
                  >
                    Coming Soon
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div 
                style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  width: '100px',
                  height: '100px',
                  background: 'linear-gradient(45deg, rgba(103,58,183,0.1), rgba(156,39,176,0.1))',
                  borderRadius: '50%',
                  filter: 'blur(20px)'
                }}
              />
              <div 
                style={{
                  position: 'absolute',
                  bottom: '-30px',
                  left: '-30px',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(45deg, rgba(33,150,243,0.1), rgba(33,203,243,0.1))',
                  borderRadius: '50%',
                  filter: 'blur(15px)'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        .btn:focus {
          box-shadow: none !important;
          outline: none !important;
        }
        
        .card {
          border: none !important;
        }
        
        .card-img-top {
          border: none !important;
        }
        
        * {
          box-sizing: border-box !important;
        }
      `}</style>
    </div>
  );
}

export default ProfileHome;