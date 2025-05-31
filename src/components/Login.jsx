import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Login&signUp.css";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

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

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      // Handle login logic here
    }, 1500);
  };

  return (
    <div className={`auth-container login-container ${animateIn ? 'animate-in' : ''}`}>
      {/* Animated background shapes */}
      <div className="shape-container">
        <div className="shape shape-1 floating-shape"></div>
        <div className="shape shape-2 floating-shape"></div>
        <div className="shape shape-3 floating-shape"></div>
        <div className="shape shape-4 floating-shape"></div>
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
                <p className="quote">It is only paradoxical to those who have forgotten the purpose of education is to transform.</p>
              </div>
            </div>
          </div>
          
          <div className="auth-right animate-on-scroll">
            <div className="form-header">
              <h2 className="welcome-text">Welcome back</h2>
              <p className="instruction-text">Please enter your details to sign in</p>
            </div>
            
            <form className="auth-form" onSubmit={handleLogin}>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <div className="input-container">
                  <i className="bi bi-envelope input-icon"></i>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              
              <div className="input-group">
                <div className="label-row">
                  <label htmlFor="password">Password</label>
                  <Link to="/forgot-password" className="forgot-link">Forgot password?</Link>
                </div>
                <div className="input-container">
                  <i className="bi bi-lock input-icon"></i>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>
              
              <button 
                type="submit" 
                className={`auth-button ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <i className="bi bi-arrow-repeat spin"></i>
                    <span>Signing in...</span>
                  </>
                ) : (
                  <span>Log in</span>
                )}
              </button>
              
              <div className="divider">
                <span>OR</span>
              </div>
              
              <button type="button" className="google-button">
                <i className="bi bi-google"></i>
                <span>Continue with Google</span>
              </button>
            </form>
            
            <p className="switch-prompt">
              Don't have an account?{" "}
              <Link to="/register" className="switch-link">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;