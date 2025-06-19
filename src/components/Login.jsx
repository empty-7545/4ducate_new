import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  // Inline styles to prevent external CSS interference
  const containerStyles = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    padding: '20px',
    boxSizing: 'border-box'
  };

  const cardStyles = {
    border: 'none',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
    backgroundColor: '#fff',
    maxWidth: '900px',
    width: '100%',
    display: 'flex',
    flexDirection: window.innerWidth < 768 ? 'column' : 'row'
  };

  const gradientSideStyles = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    position: 'relative',
    overflow: 'hidden',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: window.innerWidth < 768 ? 'none' : '0 0 40%',
    minHeight: window.innerWidth < 768 ? '200px' : 'auto'
  };

  const formSideStyles = {
    backgroundColor: '#fff',
    padding: '40px',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  };

  const brandLogoStyles = {
    fontWeight: '800',
    letterSpacing: '1px',
    textShadow: '0 2px 4px rgba(0,0,0,0.1)',
    color: '#fff',
    fontSize: '2.5rem',
    marginBottom: '1.5rem'
  };

  const quoteStyles = {
    color: '#fff',
    position: 'relative',
    zIndex: 1
  };

  const formControlStyles = {
    borderRadius: '8px',
    padding: '12px 15px',
    border: '1px solid #e0e0e0',
    fontSize: '16px',
    width: '100%',
    boxSizing: 'border-box',
    transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out'
  };

  const inputGroupStyles = {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    overflow: 'hidden'
  };

  const inputGroupTextStyles = {
    backgroundColor: 'transparent',
    border: 'none',
    padding: '12px 15px',
    color: '#6c757d',
    display: 'flex',
    alignItems: 'center'
  };

  const inputGroupInputStyles = {
    ...formControlStyles,
    border: 'none',
    borderRadius: '0',
    flex: '1'
  };

  const buttonStyles = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    border: 'none',
    padding: '12px 24px',
    fontWeight: '600',
    letterSpacing: '0.5px',
    transition: 'all 0.3s ease',
    borderRadius: '25px',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '16px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px'
  };

  const googleButtonStyles = {
    border: '1px solid #e0e0e0',
    padding: '12px 24px',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    borderRadius: '25px',
    backgroundColor: '#fff',
    color: '#333',
    cursor: 'pointer',
    fontSize: '16px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px'
  };

  const labelStyles = {
    fontWeight: '600',
    marginBottom: '8px',
    display: 'block',
    color: '#333'
  };

  const linkStyles = {
    color: '#667eea',
    textDecoration: 'none',
    fontWeight: '600'
  };

  const dividerStyles = {
    position: 'relative',
    textAlign: 'center',
    margin: '20px 0',
    fontSize: '12px',
    color: '#6c757d'
  };

  const checkboxStyles = {
    marginRight: '8px',
    cursor: 'pointer'
  };

  const passwordToggleStyles = {
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#6c757d',
    padding: '12px 15px',
    display: 'flex',
    alignItems: 'center'
  };

  return (
    <>
      <style>
        {`
          @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .login-gradient-bg::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
            animation: rotate 15s linear infinite;
          }
          .login-spin {
            animation: spin 1s linear infinite;
          }
          .login-card:hover {
            transform: translateY(-5px);
          }
          .login-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
          }
          .login-google-btn:hover {
            background-color: #f8f9fa !important;
            border-color: #d3d3d3;
          }
          .login-input:focus {
            box-shadow: 0 0 0 0.25rem rgba(102, 126, 234, 0.25);
            border-color: #667eea;
            outline: none;
          }
          .login-input-group:focus-within {
            box-shadow: 0 0 0 0.25rem rgba(102, 126, 234, 0.25);
            border-color: #667eea;
          }
          @media (max-width: 767px) {
            .login-responsive-hide { display: none; }
            .login-mobile-center { text-align: center; }
          }
        `}
      </style>
      
      <div style={containerStyles}>
        <div className="login-card" style={cardStyles}>
          {/* Left side - Gradient with branding */}
          <div className="login-gradient-bg" style={gradientSideStyles}>
            <div style={quoteStyles}>
              <h1 style={brandLogoStyles}>4DUCATE</h1>
              <figure style={{margin: 0}}>
                <div style={{fontSize: '3rem', opacity: 0.5, marginBottom: '1rem'}}>❝</div>
                <blockquote style={{fontSize: '1.25rem', fontStyle: 'italic', margin: 0, lineHeight: '1.6'}}>
                  It is only paradoxical to those who have forgotten the purpose of education is to transform.
                </blockquote>
              </figure>
              
              <div style={{marginTop: '2rem', paddingTop: '1rem'}} className="login-responsive-hide">
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '12px'}}>
                  <span style={{marginRight: '8px'}}>✅</span>
                  <span>Personalized learning</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '12px'}}>
                  <span style={{marginRight: '8px'}}>✅</span>
                  <span>Expert instructors</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <span style={{marginRight: '8px'}}>✅</span>
                  <span>Interactive content</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Login form */}
          <div style={formSideStyles}>
            <div style={{textAlign: 'center', marginBottom: '2rem'}}>
              <h2 style={{fontWeight: 'bold', marginBottom: '8px', fontSize: '1.75rem', color: '#333'}}>Welcome Back</h2>
              <p style={{color: '#6c757d', margin: 0}}>Please enter your details to sign in to your account</p>
            </div>
            
            <form onSubmit={handleLogin}>
              <div style={{marginBottom: '1.5rem'}}>
                <label htmlFor="email" style={labelStyles}>Email Address</label>
                <div className="login-input-group" style={inputGroupStyles}>
                  <span style={inputGroupTextStyles}>
                    <span style={{fontSize: '16px'}}>✉️</span>
                  </span>
                  <input
                    type="email"
                    id="email"
                    className="login-input"
                    style={inputGroupInputStyles}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              
              <div style={{marginBottom: '1.5rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px'}}>
                  <label htmlFor="password" style={labelStyles}>Password</label>
                  <Link to="/forgot-password" style={{...linkStyles, fontSize: '14px'}}>Forgot password?</Link>
                </div>
                <div className="login-input-group" style={inputGroupStyles}>
                  <span style={inputGroupTextStyles}>
                    <span style={{fontSize: '16px'}}>🔒</span>
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="login-input"
                    style={inputGroupInputStyles}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                  <button 
                    type="button" 
                    style={passwordToggleStyles}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span style={{fontSize: '16px'}}>{showPassword ? '🙈' : '👁️'}</span>
                  </button>
                </div>
              </div>
              
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '1.5rem'}}>
                <input 
                  style={checkboxStyles} 
                  type="checkbox" 
                  id="rememberMe" 
                />
                <label style={{fontSize: '14px', color: '#6c757d', cursor: 'pointer'}} htmlFor="rememberMe">
                  Remember me
                </label>
              </div>
              
              <button 
                type="submit" 
                className="login-btn"
                style={buttonStyles}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="login-spin" style={{fontSize: '16px'}}>↻</span>
                    <span>Signing in...</span>
                  </>
                ) : (
                  'Sign In'
                )}
              </button>
              
              <div style={dividerStyles}>
                <div style={{position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', backgroundColor: '#e0e0e0', zIndex: 0}}></div>
                <span style={{backgroundColor: 'white', padding: '0 15px', position: 'relative', zIndex: 1}}>OR CONTINUE WITH</span>
              </div>
              
              <div style={{marginBottom: '1rem'}}>
                <button 
                  type="button" 
                  className="login-google-btn"
                  style={googleButtonStyles}
                >
                  <span style={{fontSize: '16px'}}>🔍</span>
                  <span>Google</span>
                </button>
              </div>
              
              <div style={{textAlign: 'center', marginTop: '1rem', paddingTop: '8px'}}>
                <p style={{fontSize: '14px', color: '#6c757d', margin: 0}}>
                  Don't have an account?{' '}
                  <Link to="/register" style={linkStyles}>
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;