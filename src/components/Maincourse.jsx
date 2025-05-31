// CourseApp.jsx
import React, { useEffect, useState } from 'react';
import '../css/Maincourse.css';

const Maincourse = ({ title, weeks, featured }) => {
  return (
    <div className={`course-card ${featured ? 'featured' : ''}`}>
      <div className="course-image">
        {featured && <div className="course-badge">Featured</div>}
        <img src="/api/placeholder/400/320" alt="Course thumbnail" />
      </div>
      <div className="course-content">
        <h3>{title}</h3>
        <div className="course-meta">
          <span className="weeks-badge">
            <i className="time-icon"></i> {weeks} weeks
          </span>
        </div>
        <button className="enroll-btn">Enroll</button>
      </div>
    </div>
  );
};

const CourseApp = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      if (position > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Animate cards on load
    const cards = document.querySelectorAll('.course-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('visible');
      }, 100 * index);
    });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const courses = [
    { id: 1, title: 'Become UI & UX Designer', weeks: 12, category: 'design', featured: true },
    { id: 2, title: 'Frontend Development Masterclass', weeks: 10, category: 'development', featured: false },
    { id: 3, title: 'React & NextJS Complete Course', weeks: 8, category: 'development', featured: true },
    { id: 4, title: 'Mobile App Design Fundamentals', weeks: 6, category: 'design', featured: false },
    { id: 5, title: 'Full Stack Developer Bootcamp', weeks: 16, category: 'development', featured: true },
    { id: 6, title: 'UX Research & Prototyping', weeks: 8, category: 'design', featured: false },
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === 'all' || 
                       (activeTab === 'trending' && course.featured) ||
                       (activeTab === 'newest' && course.id > courses.length - 3);
    return matchesSearch && matchesTab;
  });

  const toggleMobileFilters = () => {
    setMobileFiltersOpen(!mobileFiltersOpen);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // Keep filters open on mobile after clicking a tab
    if (window.innerWidth > 768) {
      setMobileFiltersOpen(false);
    }
  };

  return (
    <div className={`courses-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-section">
        <h1 className="gradient-text">Courses</h1>
        <div className="gradient-divider"></div>
      </div>
      
      <div className="filters-section">
        <div 
          className="filter-icon" 
          onClick={toggleMobileFilters}
          aria-label="Toggle filters"
        >
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M4 6h16M4 12h16M4 18h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        
        <div className={`mobile-filters-container ${mobileFiltersOpen ? 'open' : ''}`}>
          <div className="tabs">
            <button 
              className={`tab ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => handleTabClick('all')}
            >
              All
            </button>
            <button 
              className={`tab ${activeTab === 'newest' ? 'active' : ''}`}
              onClick={() => handleTabClick('newest')}
            >
              Newest
            </button>
            <button 
              className={`tab ${activeTab === 'trending' ? 'active' : ''}`}
              onClick={() => handleTabClick('trending')}
            >
              Trending
            </button>
          </div>
          
          <div className="search-container">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <svg className="search-icon" viewBox="0 0 24 24" width="20" height="20">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>
      
      <div id="courses-results" className="courses-grid">
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <Maincourse 
              key={course.id}
              title={course.title}
              weeks={course.weeks}
              featured={course.featured}
            />
          ))
        ) : (
          <div className="no-courses-message">
            <p>No courses found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseApp;