import React, { useEffect, useRef, useState } from 'react';
import '../css/Home.css';

export default function HomePage() {
  // Refs for scroll animations
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const liveClassRef = useRef(null);
  const discoverRef = useRef(null);
  const learnersWorkRef = useRef(null);
  const hackerRef = useRef(null);
  const upcomingRef = useRef(null);
  const ourWorksRef = useRef(null);
  const tutorsRef = useRef(null);
  const accreditedRef = useRef(null);
  const whyLearnRef = useRef(null);
  
  // Mouse position for interactive gradients
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Handle mouse move for gradient effect
  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    });
  };
  
  useEffect(() => {
    // Add mousemove event listener
    window.addEventListener('mousemove', handleMouseMove);
    
    // Set up intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Elements to observe
    const sections = [
      heroRef.current,
      statsRef.current,
      liveClassRef.current, 
      discoverRef.current,
      learnersWorkRef.current,
      hackerRef.current,
      upcomingRef.current,
      ourWorksRef.current,
      tutorsRef.current,
      accreditedRef.current,
      whyLearnRef.current
    ];
    
    sections.forEach(section => {
      if (section) observer.observe(section);
    });
    
    // Animate stats with counters
    const animateStats = () => {
      const statNumbers = document.querySelectorAll('.stat-number');
      statNumbers.forEach(stat => {
        const target = parseFloat(stat.textContent);
        const duration = 2000;
        const startTime = performance.now();
        
        const updateNumber = (currentTime) => {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          
          if (stat.textContent.includes('LPA')) {
            stat.textContent = Math.floor(progress * target) + ' LPA';
          } else if (stat.textContent.includes('+')) {
            stat.textContent = Math.floor(progress * target) + '+';
          } else if (!isNaN(target)) {
            stat.textContent = (progress * target).toFixed(1);
          }
          
          if (progress < 1) {
            requestAnimationFrame(updateNumber);
          }
        };
        
        requestAnimationFrame(updateNumber);
      });
    };
    
    // Setup stats animation when visible
    const statsObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateStats();
          statsObserver.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    
    if (statsRef.current) {
      statsObserver.observe(statsRef.current);
    }
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
      statsObserver.disconnect();
    };
  }, []);
  
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section scroll-section" ref={heroRef}
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x/20}% ${mousePosition.y/20}%, #1a3e78, #0a2351)`
        }}>
        <div className="container">
          <div className="flex-row">
            <div className="hero-content fade-in">
              <h1 className="hero-title">
                Unlock Knowledge Within
                <span className="accent-text gradient-text"> 4Ducate</span> Your Potential Today!
              </h1>
              <p className="hero-subtitle">
                Join our innovative learning platform to gain practical experience
                to solve real-world problems and stay ready for 2 years+
              </p>
              <button className="explore-button pulse-btn">
                Explore our Courses
                <span className="arrow">→</span>
              </button>
            </div>
            <div className="hero-image float-animation">
              <img 
                src="/api/placeholder/400/400" 
                alt="Student with tablet" 
                className="image"
              />
            </div>
          </div>
        </div>
        <div className="wave-divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section scroll-section" ref={statsRef}>
        <div className="container">
          <div className="stats-container">
            <div className="stat-item slide-in">
              <h2 className="stat-number">4.1</h2>
              <p className="stat-title">Google Ratings</p>
            </div>
            <div className="stat-item slide-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="stat-number">12 LPA</h2>
              <p className="stat-title">Highest Package</p>
            </div>
            <div className="stat-item slide-in" style={{ animationDelay: '0.4s' }}>
              <h2 className="stat-number">100+</h2>
              <p className="stat-title">Student Trained</p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Class Section */}
      <section className="live-class-section scroll-section" ref={liveClassRef}>
        <div className="container">
          <div className="live-class-header fade-in">
            <div className="live-indicator pulse"></div>
            <h2 className="live-title">LIVE CLASS</h2>
          </div>
          <p className="live-subtitle fade-in" style={{ animationDelay: '0.2s' }}>Learning Unleashed, Live and Thriving !</p>
          
          <div className="live-class-card slide-up">
            <div className="class-image gradient-bg">
              <img src="/api/placeholder/150/150" alt="Class icons" />
            </div>
            <div className="class-info">
              <p className="time-info">01hrs | 30mins</p>
              <p className="class-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
              </p>
              <p className="tutor-info">Tutor From <span className="tutor-name">4Ducate</span></p>
              
              <div className="button-group">
                <button className="join-class-btn">Join Class</button>
                <button className="know-more-btn shine-effect">Know More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="diagonal-divider"></div>
      </section>

      {/* Discover Programs Section */}
      <section className="discover-section scroll-section" ref={discoverRef}>
        <div className="container">
          <h2 className="discover-title fade-in">
            Discover programs to explore and align with your career interests.
          </h2>
          <p className="discover-subtitle fade-in" style={{ animationDelay: '0.2s' }}>
            Explore the in-demand skills for the fields of content, marketing and technology.
          </p>
          
          <div className="programs-container">
            <div className="program-card slide-in">
              <h3 className="program-type">LIVE CLASSES</h3>
              <p className="program-description">
                Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
              </p>
            </div>
            <div className="program-image slide-in" style={{ animationDelay: '0.3s' }}>
              <img src="/api/placeholder/300/200" alt="Student learning" className="floating" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Learners Work At Section */}
      <section className="learners-work-section scroll-section" ref={learnersWorkRef}>
        <div className="container">
          <h2 className="section-title fade-in">Our Learners Work At</h2>
          <div className="brand-logos-container fade-in">
            <div className="brand-logo pop-in">
              <img src="/api/placeholder/100/50" alt="Brand logo" />
            </div>
            <div className="brand-logo pop-in" style={{ animationDelay: '0.1s' }}>
              <img src="/api/placeholder/100/50" alt="Brand logo" />
            </div>
            <div className="brand-logo pop-in" style={{ animationDelay: '0.2s' }}>
              <img src="/api/placeholder/100/50" alt="Brand logo" />
            </div>
            <div className="brand-logo pop-in" style={{ animationDelay: '0.3s' }}>
              <img src="/api/placeholder/100/50" alt="Brand logo" />
            </div>
          </div>
        </div>
        <div className="diagonal-divider light-to-dark"></div>
      </section>

      {/* Ethical Hacker Section */}
      <section className="ethical-hacker-section scroll-section" ref={hackerRef}>
        <div className="container">
          <div className="hacker-flex-container">
            <div className="hacker-image slide-in">
              <div className="featured-tag">FEATURED</div>
              <img src="/api/placeholder/400/300" alt="Ethical hacker" className="hacker-img" />
            </div>
            <div className="hacker-content slide-in" style={{ animationDelay: '0.3s' }}>
              <h2 className="hacker-title">How To Become Ethical Hacker</h2>
              <p className="hacker-description">
                Learn ethical hacking with step-by-step guidance from industry experts. Master cybersecurity skills that are in high demand and protect organizations from digital threats.
              </p>
              <button className="hacker-btn">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Features Section */}
      <section className="upcoming-features-section scroll-section" ref={upcomingRef}>
        <div className="container">
          <h2 className="section-title fade-in">Upcoming Features</h2>
          <p className="features-subtitle fade-in" style={{ animationDelay: '0.2s' }}>
            The features in development for enhanced learning and will be out in the coming days.
          </p>
          
          <div className="features-grid">
            <div className="feature-box slide-up" style={{ animationDelay: '0.1s' }}>
              <h3>New Courses</h3>
              <p>Explore new courses with industry experts, covering the latest technologies and business trends.</p>
            </div>
            <div className="feature-box slide-up" style={{ animationDelay: '0.2s' }}>
              <h3>Projects</h3>
              <p>Real-world projects guided by industry professionals to build your portfolio and expertise.</p>
            </div>
            <div className="feature-box slide-up" style={{ animationDelay: '0.3s' }}>
              <h3>Learning Path</h3>
              <p>Structured learning paths customized for different career goals and skill development needs.</p>
            </div>
            <div className="feature-box slide-up" style={{ animationDelay: '0.4s' }}>
              <h3>Mentorship</h3>
              <p>One-on-one mentorship sessions with industry experts to guide your learning journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Works Section */}
      <section className="our-works-section scroll-section" ref={ourWorksRef}>
        <div className="container">
          <h2 className="section-title fade-in">Our Works</h2>
          
          <div className="works-grid">
            <div className="work-card scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="work-image">
                <img src="/api/placeholder/300/200" alt="Project" />
              </div>
              <div className="work-content">
                <h3>Project Title</h3>
                <p>Brief description of the project</p>
                <button className="view-btn">View</button>
              </div>
            </div>
            <div className="work-card scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="work-image">
                <img src="/api/placeholder/300/200" alt="Project" />
              </div>
              <div className="work-content">
                <h3>Project Title</h3>
                <p>Brief description of the project</p>
                <button className="view-btn">View</button>
              </div>
            </div>
            <div className="work-card scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="work-image">
                <img src="/api/placeholder/300/200" alt="Project" />
              </div>
              <div className="work-content">
                <h3>Project Title</h3>
                <p>Brief description of the project</p>
                <button className="view-btn">View</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Tutors Section */}
      <section className="tutors-section scroll-section" ref={tutorsRef}>
        <div className="container">
          <h2 className="section-title fade-in">Our Tutors</h2>
          
          <div className="tutors-grid">
            <div className="tutor-card pop-in" style={{ animationDelay: '0.1s' }}>
              <div className="tutor-image">
                <img src="/api/placeholder/150/150" alt="Tutor" />
              </div>
              <h3 className="tutor-name">John Doe</h3>
              <p className="tutor-title">Senior Developer</p>
              <div className="tutor-rating">
                <span>★★★★★</span>
              </div>
            </div>
            <div className="tutor-card pop-in" style={{ animationDelay: '0.2s' }}>
              <div className="tutor-image">
                <img src="/api/placeholder/150/150" alt="Tutor" />
              </div>
              <h3 className="tutor-name">Jane Smith</h3>
              <p className="tutor-title">UI/UX Designer</p>
              <div className="tutor-rating">
                <span>★★★★★</span>
              </div>
            </div>
            <div className="tutor-card pop-in" style={{ animationDelay: '0.3s' }}>
              <div className="tutor-image">
                <img src="/api/placeholder/150/150" alt="Tutor" />
              </div>
              <h3 className="tutor-name">Mark Johnson</h3>
              <p className="tutor-title">Data Scientist</p>
              <div className="tutor-rating">
                <span>★★★★★</span>
              </div>
            </div>
            <div className="tutor-card pop-in" style={{ animationDelay: '0.4s' }}>
              <div className="tutor-image">
                <img src="/api/placeholder/150/150" alt="Tutor" />
              </div>
              <h3 className="tutor-name">Sarah Williams</h3>
              <p className="tutor-title">Marketing Expert</p>
              <div className="tutor-rating">
                <span>★★★★★</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation Section */}
      <section className="white-section scroll-section" ref={accreditedRef}>
        <div className="container">
          <h2 className="section-title fade-in">We Are Accredited By</h2>
          <div className="accredited-logos">
            <div className="logo pop-in">
              <div className="startup-india">#startupindia</div>
            </div>
            <div className="logo pop-in" style={{ animationDelay: '0.2s' }}>
              <div className="startup-tn">StartupTN</div>
            </div>
            <div className="logo pop-in" style={{ animationDelay: '0.4s' }}>
              <div className="circle-logo">
                <div className="inner-circle"></div>
              </div>
            </div>
            <div className="logo pop-in" style={{ animationDelay: '0.6s' }}>
              <div className="msme-logo">
                MSME
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Learn With Us Section */}
      <section className="why-learn-section scroll-section" ref={whyLearnRef}
        style={{
          backgroundImage: `linear-gradient(135deg, #0a2351 0%, #1a439e ${50 + mousePosition.x/50}%, #0a2351 100%)`
        }}>
        <div className="container">
          <h2 className="section-title fade-in">Why Learn with 4Ducate</h2>
          
          <div className="completion-grid">
            {[
              { icons: "✓", label: "Completion Rate", rate: "100%", delay: 0 },
              { icons: "💼", label: "Job Placement", rate: "95%", delay: 0.1 },
              { icons: "🖥️", label: "Online Support", rate: "24/7", delay: 0.2 },
              { icons: "🏆", label: "Certification", rate: "100%", delay: 0.3 },
              { icons: "👥", label: "Mentorship", rate: "1:1", delay: 0.4 },
              { icons: "💬", label: "Communication", rate: "100%", delay: 0.5 },
              { icons: "📚", label: "Content Quality", rate: "A+", delay: 0.6 },
              { icons: "🎓", label: "Graduation Rate", rate: "98%", delay: 0.7 },
              { icons: "💭", label: "Student Satisfaction", rate: "4.8/5", delay: 0.8 }
            ].map((item, index) => (
              <div className="completion-box scale-in" style={{ animationDelay: `${item.delay}s` }} key={index}>
                <div className="icons">{item.icons}</div>
                <p className="completion-label">{item.label}</p>
                <p className="completion-rate">{item.rate}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}