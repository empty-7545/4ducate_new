import React from 'react';
import CourseCard from './CourseCard';
import '../css/ProfileHome.css';

function ProfileHome() {
  return (
    <div className="profile-home">
      {/* Welcome Card */}
      <div className="welcome-card">
        <div className="welcome-text">
          <h2>Hello, Yasar</h2>
          <p>Lorem ipsum is simply Dummy Text Of The Printing And Typesetting Industry. Lorem ipsum Has Been The Industry's Standard</p>
          <p className="quote">"Lorem ipsum is Simply Dummy"</p>
        </div>
        <div className="book-icon">
          <div className="light-bulb">💡</div>
          <div className="book">📖</div>
        </div>
      </div>
      
      {/* Your Courses Section */}
      <div className="your-courses">
        <h3>Your Courses</h3>
        <div className="courses-grid">
          <CourseCard 
            title="Become Game Developer" 
            image="/api/placeholder/400/320" 
          />
          <CourseCard 
            title="Become Game Developer" 
            image="/api/placeholder/400/320" 
          />
        </div>
      </div>
      
      /* AI Banner */
      <div className="ai-banner">
        <div className="banner-content">
          <h2>Build Your Own AI</h2>
          <button className="pre-register-btn">Pre Register Now</button>
        </div>
        <div className="coming-soon">COMING SOON</div>
      </div>
    </div>
  );
}

export default ProfileHome;