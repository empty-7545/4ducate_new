import React, { useEffect, useState, useRef } from 'react';
import '../css/Reachus.css';

const Reachus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);
  
  useEffect(() => {
    // Trigger visibility animation when component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    // Add scroll animation detection with more variety
    const handleScroll = () => {
      // Calculate scroll progress percentage for the progress bar
      const scrollTop = window.scrollY;
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const totalScrollable = docHeight - winHeight;
      const scrolled = (scrollTop / totalScrollable) * 100;
      setScrollProgress(scrolled);
      
      // Add body class when scrolling for background gradient change
      if (scrollTop > 100) {
        document.body.classList.add('scroll-active');
      } else {
        document.body.classList.remove('scroll-active');
      }
      
      // Animate elements when they enter viewport
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight * 0.8;
        
        if (isInViewport) {
          el.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initially
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Add animation for form submission
    const form = e.target;
    form.classList.add('submitted');
    
    // Reset after "submission"
    setTimeout(() => {
      alert('Message sent!');
      setFormData({ name: '', email: '', message: '' });
      form.classList.remove('submitted');
    }, 1000);
  };
  
  return (
    <>
      {/* Add scroll progress bar */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      
      <div 
        ref={containerRef}
        className={`contact-container ${isVisible ? 'visible' : ''}`}
      >
        <div className="blue-section">
          <h1 className="title animate-on-scroll">Reach Us</h1>
        </div>
        
        <div className="content-wrappers">
          <div className="text-section animate-on-scroll from-left">
            <h2>Les't talk <br />on something <span className="highlight">great</span><br />together</h2>
            
            <div className="contact-info">
              <div className="info-item">
                <span className="icon email-icon">✉️</span>
                <span>andreaDesign@gmail.com</span>
              </div>
              
              <div className="info-item">
                <span className="icon phone-icon">📱</span>
                <span>+34 123 456 789</span>
              </div>
              
              <div className="info-item">
                <span className="icon location-icon">📍</span>
                <span>123 Street 487 House</span>
              </div>
              
              <div className="social-links animate-on-scroll">
                <span className="social-icon linkedin">in</span>
                <span className="social-icon github">GH</span>
              </div>
            </div>
          </div>
          
          <div className="form-section animate-on-scroll from-right">
            <form onSubmit={handleSubmit}>
              <div className="form-group animate-on-scroll scale">
                <label>Your name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange}
                  placeholder="Ron Smith"
                  required
                />
              </div>
              
              <div className="form-group animate-on-scroll scale">
                <label>Your email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange}
                  placeholder="email@gmail.com"
                  required
                />
              </div>
              
              <div className="form-group animate-on-scroll scale">
                <label>Your message</label>
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  required
                />
              </div>
              
              <div className="animate-on-scroll">
                <button 
                  type="submit" 
                  className={`submit-btn ${isButtonHovered ? 'hovered' : ''}`}
                  onMouseEnter={() => setIsButtonHovered(true)}
                  onMouseLeave={() => setIsButtonHovered(false)}
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reachus;