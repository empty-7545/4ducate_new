// WhoweareComponent.jsx
import React, { useEffect, useState } from 'react';
import '../css/Whoweare.css';

const Whoweare = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeCard, setActiveCard] = useState(1);
  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      if (position > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Add animations on load
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('visible');
      }, 100 * index);
    });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const reasonData = [
    { 
      id: 1, 
      title: "Lorem ipsum is simply dummy text", 
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry." 
    },
    { 
      id: 2, 
      title: "Lorem ipsum is simply dummy text", 
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry." 
    },
    { 
      id: 3, 
      title: "Lorem ipsum is simply dummy text", 
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry." 
    }
  ];
  
  const titleCards = [
    {
      id: 1,
      title: "Title Number 1",
      description: "Digital, Video, Print and quite like an unordered C-suite-level explanation and thoughts sharing and it can add. See clients with the company we work over to a here.",
      imageUrl: "/api/placeholder/400/320"
    },
    {
      id: 2,
      title: "Title Number 2",
      description: "Digital solutions that transform how businesses connect with their audience. Our strategic approach ensures meaningful engagement.",
      imageUrl: "/api/placeholder/400/320"
    },
    {
      id: 3,
      title: "Title Number 3",
      description: "We craft experiences that resonate with users across all platforms, focusing on intuitive design and seamless functionality.",
      imageUrl: "/api/placeholder/400/320"
    }
  ];

  return (
    <div className="about-container">
      {/* WHO WE ARE SECTION */}
      <section className="who-we-are-section">
        <div className="content-wrapper">
          <div className="text-container animate-on-scroll">
            <div className="blue-box">
              <h2 className="section-title">WHO WE ARE</h2>
              <p className="section-description">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
              </p>
            </div>
          </div>
          
          <div className="image-container animate-on-scroll">
            <img 
              src="/api/placeholder/600/400" 
              alt="Team collaboration" 
              className="team-image"
            />
            <div className="blue-accent-box"></div>
          </div>
        </div>
      </section>
      
      {/* WHY 4DUCATE SECTION */}
      <section className="why-4ducate-section">
        <div className="content-wrapper">
          <h2 className="section-title animate-on-scroll">WHY <span className="gradient-text">4DUCATE</span></h2>
          
          <div className="reasons-container">
            {reasonData.map((reason) => (
              <div 
                key={reason.id} 
                className={`reason-item animate-on-scroll ${activeCard === reason.id ? 'active' : ''}`}
                onMouseEnter={() => setActiveCard(reason.id)}
              >
                <div className="reason-number">{reason.id}</div>
                <div className="reason-content">
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* TITLE CARDS SECTION */}
      <section className="title-cards-section">
        <div className="title-grid">
          {titleCards.map((card, index) => (
            <div 
              key={card.id} 
              className={`title-card animate-on-scroll ${index % 2 === 0 ? 'even' : 'odd'}`}
            >
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
              </div>
              <div className="card-image-container">
                <div className={`glow-effect glow-effect-${card.id}`}></div>
                <img 
                  src={card.imageUrl} 
                  alt={card.title} 
                  className="card-image" 
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="view-more-container animate-on-scroll">
          <button className="view-more-btn">
            View All Projects
            <span className="plus-badge">100+</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Whoweare;