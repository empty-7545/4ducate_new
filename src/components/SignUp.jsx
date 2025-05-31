import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Login&signUp.css";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 2;

  useEffect(() => {
    setAnimateIn(true);
    
    // Initialize the floating elements animation
    const floatingElements = document.querySelectorAll('.floating-shape');
    floatingElements.forEach(element => {
      // Random initial position
      const randomX = Math.random() * 10 - 5;
      const randomY = Math.random() * 10 - 5;
      element.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });
    
    // Scroll animation observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      // Handle registration logic here
    }, 1500);
  };

  return (
    <div className={`auth-container register-container ${animateIn ? 'animate-in' : ''}`}>
      {/* Animated background shapes */}
      <div className="shape-container">
        <div className="shape shape-1 floating-shape"></div>
        <div className="shape shape-2 floating-shape"></div>
        <div className="shape shape-3 floating-shape"></div>
        <div className="shape shape-4 floating-shape"></div>
        <div className="shape shape-5 floating-shape"></div>
      </div>
      
      <div className="auth-card">
        <div className="auth-content">
          <div className="auth-left animate-on-scroll">
            <div className="brand-section">
              <div className="logo-container">
                <h1 className="logo">4DUCATE</h1>
              </div>
              <div className="quote-section">
                <i className="bi bi-quote"></i>
                <p className="quote">Join our community today and start your journey towards knowledge and growth.</p>
              </div>
            </div>
          </div>
          
          <div className="auth-right animate-on-scroll">
            <div className="form-header">
              <h2 className="welcome-text">Join Now</h2>
              <p className="instruction-text">Create your account in a few steps</p>
              
              <div className="steps-indicator">
                {[...Array(totalSteps)].map((_, index) => (
                  <div 
                    key={index} 
                    className={`step ${currentStep >= index + 1 ? 'active' : ''}`}
                  ></div>
                ))}
              </div>
            </div>
            
            <form className="auth-form" onSubmit={handleRegister}>
              {currentStep === 1 && (
                <div className="step-content step-1">
                  <div className="input-group">
                    <label htmlFor="fullName">Full Name</label>
                    <div className="input-container">
                      <i className="bi bi-person input-icon"></i>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <div className="input-container">
                      <i className="bi bi-envelope input-icon"></i>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                  
                  <button 
                    type="button" 
                    className="auth-button next-button"
                    onClick={nextStep}
                  >
                    <span>Next Step</span>
                    <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              )}
              
              {currentStep === 2 && (
                <div className="step-content step-2">
                  <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <div className="input-container">
                      <i className="bi bi-lock input-icon"></i>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Create a password"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="input-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <div className="input-container">
                      <i className="bi bi-lock-fill input-icon"></i>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm your password"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="buttons-row">
                    <button 
                      type="button" 
                      className="auth-button back-button"
                      onClick={prevStep}
                    >
                      <i className="bi bi-arrow-left"></i>
                      <span>Back</span>
                    </button>
                    
                    <button 
                      type="submit" 
                      className={`auth-button ${isLoading ? 'loading' : ''}`}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <i className="bi bi-arrow-repeat spin"></i>
                          <span>Creating account...</span>
                        </>
                      ) : (
                        <span>Sign Up</span>
                      )}
                    </button>
                  </div>
                </div>
              )}
              
              {currentStep === 1 && (
                <>
                  <div className="divider">
                    <span>OR</span>
                  </div>
                  
                  <button type="button" className="google-button">
                    <i className="bi bi-google"></i>
                    <span>Continue with Google</span>
                  </button>
                </>
              )}
            </form>
            
            <p className="switch-prompt">
              Already have an account?{" "}
              <Link to="/login" className="switch-link">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;