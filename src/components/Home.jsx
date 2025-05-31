import React, { useEffect, useRef } from 'react';
import '../css/Home.css';

export default function HomePage() {
  const scrollProgress = useRef(null);

  useEffect(() => {
    const updateScrollProgress = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      if (scrollProgress.current) {
        scrollProgress.current.style.transform = `scaleX(${scrolled / 100})`;
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <>
      <div ref={scrollProgress} className="scroll-progress"></div>
      
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Unlock Knowledge Within
            <br />
            4Ducate Your Potential Today!
          </h1>
          <p className="hero-subtitle">
            Join our innovative learning platform to gain practical experience
            and solve real-world problems with confidence
          </p>
          <button className="explore-button">
            Explore our Courses
            <span className="arrow">→</span>
          </button>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <h2 className="stat-number">4.1</h2>
            <p className="stat-title">Google Ratings</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">12 LPA</h2>
            <p className="stat-title">Highest Package</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">100+</h2>
            <p className="stat-title">Students Trained</p>
          </div>
        </div>
      </section>

      <section className="live-class-section">
        <div className="container">
          <div className="live-class-header">
            <div className="live-indicator pulse"></div>
            <h2 className="live-title">LIVE CLASS</h2>
          </div>
          <p className="live-subtitle">Learning Unleashed, Live and Thriving !</p>
          
          <div className="live-class-card">
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

      <section className="discover-section">
        <div className="container">
          <h2 className="discover-title">
            Discover programs to explore and align with your career interests.
          </h2>
          <p className="discover-subtitle">
            Explore the in-demand skills for the fields of content, marketing and technology.
          </p>
          
          <div className="programs-container">
            <div className="program-card">
              <h3 className="program-type">LIVE CLASSES</h3>
              <p className="program-description">
                Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
              </p>
            </div>
            <div className="program-image">
              <img src="/api/placeholder/300/200" alt="Student learning" className="floating" />
            </div>
          </div>
        </div>
      </section>

      <section className="learners-work-section">
        <div className="container">
          <h2 className="section-title">Our Learners Work At</h2>
          <div className="brand-logos-container">
            <div className="brand-logo">
              <img src="/api/placeholder/100/50" alt="Brand logo" />
            </div>
            <div className="brand-logo">
              <img src="/api/placeholder/100/50" alt="Brand logo" />
            </div>
            <div className="brand-logo">
              <img src="/api/placeholder/100/50" alt="Brand logo" />
            </div>
            <div className="brand-logo">
              <img src="/api/placeholder/100/50" alt="Brand logo" />
            </div>
          </div>
        </div>
        <div className="diagonal-divider light-to-dark"></div>
      </section>

      <section className="ethical-hacker-section">
        <div className="container">
          <div className="hacker-flex-container">
            <div className="hacker-image">
              <div className="featured-tag">FEATURED</div>
              <img src="/api/placeholder/400/300" alt="Ethical hacker" className="hacker-img" />
            </div>
            <div className="hacker-content">
              <h2 className="hacker-title">How To Become Ethical Hacker</h2>
              <p className="hacker-description">
                Learn ethical hacking with step-by-step guidance from industry experts. Master cybersecurity skills that are in high demand and protect organizations from digital threats.
              </p>
              <button className="hacker-btn">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <section className="upcoming-features-section">
        <div className="container">
          <h2 className="section-title">Upcoming Features</h2>
          <p className="features-subtitle">
            The features in development for enhanced learning and will be out in the coming days.
          </p>
          
          <div className="features-grid">
            <div className="feature-box">
              <h3>New Courses</h3>
              <p>Explore new courses with industry experts, covering the latest technologies and business trends.</p>
            </div>
            <div className="feature-box">
              <h3>Projects</h3>
              <p>Real-world projects guided by industry professionals to build your portfolio and expertise.</p>
            </div>
            <div className="feature-box">
              <h3>Learning Path</h3>
              <p>Structured learning paths customized for different career goals and skill development needs.</p>
            </div>
            <div className="feature-box">
              <h3>Mentorship</h3>
              <p>One-on-one mentorship sessions with industry experts to guide your learning journey.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="our-works-section">
        <div className="container">
          <h2 className="section-title">Our Works</h2>
          
          <div className="works-grid">
            <div className="work-card">
              <div className="work-image">
                <img src="/api/placeholder/300/200" alt="Project" />
              </div>
              <div className="work-content">
                <h3>Project Title</h3>
                <p>Brief description of the project</p>
                <button className="view-btn">View</button>
              </div>
            </div>
            <div className="work-card">
              <div className="work-image">
                <img src="/api/placeholder/300/200" alt="Project" />
              </div>
              <div className="work-content">
                <h3>Project Title</h3>
                <p>Brief description of the project</p>
                <button className="view-btn">View</button>
              </div>
            </div>
            <div className="work-card">
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

      <section className="tutors-section">
        <div className="container">
          <h2 className="section-title">Our Tutors</h2>
          
          <div className="tutors-grid">
            <div className="tutor-card">
              <div className="tutor-image">
                <img src="/api/placeholder/150/150" alt="Tutor" />
              </div>
              <h3 className="tutor-name">John Doe</h3>
              <p className="tutor-title">Senior Developer</p>
              <div className="tutor-rating">
                <span>★★★★★</span>
              </div>
            </div>
            <div className="tutor-card">
              <div className="tutor-image">
                <img src="/api/placeholder/150/150" alt="Tutor" />
              </div>
              <h3 className="tutor-name">Jane Smith</h3>
              <p className="tutor-title">UI/UX Designer</p>
              <div className="tutor-rating">
                <span>★★★★★</span>
              </div>
            </div>
            <div className="tutor-card">
              <div className="tutor-image">
                <img src="/api/placeholder/150/150" alt="Tutor" />
              </div>
              <h3 className="tutor-name">Mark Johnson</h3>
              <p className="tutor-title">Data Scientist</p>
              <div className="tutor-rating">
                <span>★★★★★</span>
              </div>
            </div>
            <div className="tutor-card">
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

      <section className="white-section">
        <div className="container">
          <h2 className="section-title">We Are Accredited By</h2>
          <div className="accredited-logos">
            <div className="logo">
              <div className="startup-india">#startupindia</div>
            </div>
            <div className="logo">
              <div className="startup-tn">StartupTN</div>
            </div>
            <div className="logo">
              <div className="circle-logo">
                <div className="inner-circle"></div>
              </div>
            </div>
            <div className="logo">
              <div className="msme-logo">
                MSME
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-learn-section">
        <div className="container">
          <h2 className="section-title">Why Learn with 4Ducate</h2>
          
          <div className="completion-grid">
            {[
              { icons: "✓", label: "Completion Rate", rate: "100%" },
              { icons: "💼", label: "Job Placement", rate: "95%" },
              { icons: "🖥️", label: "Online Support", rate: "24/7" },
              { icons: "🏆", label: "Certification", rate: "100%" },
              { icons: "👥", label: "Mentorship", rate: "1:1" },
              { icons: "💬", label: "Communication", rate: "100%" },
              { icons: "📚", label: "Content Quality", rate: "A+" },
              { icons: "🎓", label: "Graduation Rate", rate: "98%" },
              { icons: "💭", label: "Student Satisfaction", rate: "4.8/5" }
            ].map((item, index) => (
              <div className="completion-box" key={index}>
                <div className="icons">{item.icons}</div>
                <p className="completion-label">{item.label}</p>
                <p className="completion-rate">{item.rate}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}