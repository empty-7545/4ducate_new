import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
    setTimeout(() => {
      setIsLoading(false);
      alert("Registration successful!");
    }, 1500);
  };

  return (
    <div className="register-component-wrapper">
      <style>{`
        .register-component-wrapper {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
          line-height: 1.5 !important;
          color: #212529 !important;
          background-color: #fff !important;
          margin: 0 !important;
          padding: 0 !important;
          box-sizing: border-box !important;
        }
        
        .register-component-wrapper *,
        .register-component-wrapper *::before,
        .register-component-wrapper *::after {
          box-sizing: border-box !important;
        }

        /* Navbar Styles */
        .register-component-wrapper .custom-navbar {
          background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%) !important;
          border: none !important;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1) !important;
          padding: 0.75rem 0 !important;
        }

        .register-component-wrapper .navbar-brand {
          font-weight: 800 !important;
          font-size: 1.5rem !important;
          color: white !important;
          text-decoration: none !important;
          letter-spacing: 1px !important;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1) !important;
        }

        .register-component-wrapper .navbar-brand:hover {
          color: #f8f9fa !important;
        }

        .register-component-wrapper .navbar-nav .nav-link {
          color: rgba(255, 255, 255, 0.9) !important;
          font-weight: 500 !important;
          margin: 0 0.5rem !important;
          padding: 0.5rem 1rem !important;
          border-radius: 25px !important;
          transition: all 0.3s ease !important;
          text-decoration: none !important;
        }

        .register-component-wrapper .navbar-nav .nav-link:hover {
          background-color: rgba(255, 255, 255, 0.2) !important;
          color: white !important;
        }

        .register-component-wrapper .navbar-toggler {
          border: 1px solid rgba(255, 255, 255, 0.3) !important;
          padding: 0.25rem 0.5rem !important;
        }

        .register-component-wrapper .navbar-toggler-icon {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
        }

        /* Page Content Styles */
        .register-component-wrapper .register-page-content {
          min-height: calc(100vh - 76px) !important;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%) !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          padding: 2rem 0 !important;
        }

        .register-component-wrapper .register-card {
          border: none !important;
          border-radius: 20px !important;
          overflow: hidden !important;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1) !important;
          transition: transform 0.3s ease !important;
          background: white !important;
        }

        .register-component-wrapper .register-card:hover {
          transform: translateY(-5px) !important;
        }

        .register-component-wrapper .gradient-side {
          background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%) !important;
          position: relative !important;
          overflow: hidden !important;
          padding: 3rem !important;
          display: flex !important;
          flex-direction: column !important;
          justify-content: center !important;
        }

        .register-component-wrapper .gradient-side::before {
          content: '' !important;
          position: absolute !important;
          top: -50% !important;
          left: -50% !important;
          width: 200% !important;
          height: 200% !important;
          background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%) !important;
          animation: rotate 15s linear infinite !important;
        }

        @keyframes rotate {
          0% { transform: rotate(0deg) !important; }
          100% { transform: rotate(360deg) !important; }
        }

        .register-component-wrapper .brand-logo {
          font-weight: 800 !important;
          letter-spacing: 1px !important;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1) !important;
          color: white !important;
          font-size: 2.5rem !important;
          margin-bottom: 1.5rem !important;
        }

        .register-component-wrapper .form-control {
          border-radius: 8px !important;
          padding: 12px 15px !important;
          border: 1px solid #e0e0e0 !important;
          font-size: 1rem !important;
          line-height: 1.5 !important;
          color: #495057 !important;
          background-color: #fff !important;
          background-clip: padding-box !important;
          transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out !important;
        }

        .register-component-wrapper .form-control:focus {
          box-shadow: 0 0 0 0.25rem rgba(106, 17, 203, 0.25) !important;
          border-color: #6a11cb !important;
          outline: 0 !important;
        }

        .register-component-wrapper .input-group-text {
          background-color: transparent !important;
          border-right: none !important;
          border: 1px solid #e0e0e0 !important;
          padding: 12px 15px !important;
          display: flex !important;
          align-items: center !important;
          font-size: 1rem !important;
          border-radius: 8px 0 0 8px !important;
        }

        .register-component-wrapper .input-group .form-control {
          border-left: none !important;
          border-radius: 0 8px 8px 0 !important;
        }

        .register-component-wrapper .btn {
          display: inline-block !important;
          font-weight: 400 !important;
          line-height: 1.5 !important;
          color: #212529 !important;
          text-align: center !important;
          text-decoration: none !important;
          vertical-align: middle !important;
          cursor: pointer !important;
          user-select: none !important;
          border: 1px solid transparent !important;
          padding: 0.375rem 0.75rem !important;
          font-size: 1rem !important;
          border-radius: 0.375rem !important;
          transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out !important;
        }

        .register-component-wrapper .btn-primary {
          background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%) !important;
          border: none !important;
          padding: 12px !important;
          font-weight: 600 !important;
          letter-spacing: 0.5px !important;
          transition: all 0.3s ease !important;
          color: white !important;
        }

        .register-component-wrapper .btn-primary:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 5px 15px rgba(106, 17, 203, 0.4) !important;
          background: linear-gradient(135deg, #5a0bb3 0%, #1e63d4 100%) !important;
        }

        .register-component-wrapper .btn-outline-secondary {
          border: 1px solid #e0e0e0 !important;
          padding: 12px !important;
          font-weight: 500 !important;
          transition: all 0.3s ease !important;
          color: #6c757d !important;
          background-color: transparent !important;
        }

        .register-component-wrapper .btn-outline-secondary:hover {
          background-color: #f8f9fa !important;
          border-color: #d3d3d3 !important;
          color: #5a6268 !important;
        }

        .register-component-wrapper .step-indicator {
          position: relative !important;
          width: 40px !important;
          height: 40px !important;
          border-radius: 50% !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          font-weight: 600 !important;
          color: white !important;
          background-color: #dee2e6 !important;
          z-index: 1 !important;
        }

        .register-component-wrapper .step-indicator.active {
          background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%) !important;
        }

        .register-component-wrapper .step-indicator.completed {
          background-color: #198754 !important;
        }

        .register-component-wrapper .step-line {
          position: absolute !important;
          top: 50% !important;
          left: 0 !important;
          right: 0 !important;
          height: 2px !important;
          background-color: #dee2e6 !important;
          z-index: 0 !important;
        }

        .register-component-wrapper .step-line-active {
          background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%) !important;
        }

        .register-component-wrapper .step-line-completed {
          background-color: #198754 !important;
        }

        .register-component-wrapper .password-toggle {
          cursor: pointer !important;
          background-color: transparent !important;
          border: none !important;
          color: #6c757d !important;
          padding: 12px 15px !important;
          border-radius: 0 8px 8px 0 !important;
        }

        .register-component-wrapper .spinner-border {
          display: inline-block !important;
          width: 1rem !important;
          height: 1rem !important;
          vertical-align: -0.125em !important;
          border: 0.125em solid currentColor !important;
          border-right-color: transparent !important;
          border-radius: 50% !important;
          animation: spinner-border 0.75s linear infinite !important;
        }

        .register-component-wrapper .spinner-border-sm {
          width: 0.875rem !important;
          height: 0.875rem !important;
          border-width: 0.125em !important;
        }

        @keyframes spinner-border {
          0% { transform: rotate(0deg) !important; }
          100% { transform: rotate(360deg) !important; }
        }

        .register-component-wrapper .divider .line {
          height: 1px !important;
          background-color: #e0e0e0 !important;
        }

        .register-component-wrapper .text-muted {
          color: #6c757d !important;
        }

        .register-component-wrapper .text-primary {
          color: #6a11cb !important;
        }

        .register-component-wrapper .text-white {
          color: #fff !important;
        }

        .register-component-wrapper .fw-bold {
          font-weight: 700 !important;
        }

        .register-component-wrapper .fw-semibold {
          font-weight: 600 !important;
        }

        .register-component-wrapper .fs-5 {
          font-size: 1.25rem !important;
        }

        .register-component-wrapper .fst-italic {
          font-style: italic !important;
        }

        .register-component-wrapper .small {
          font-size: 0.875em !important;
        }

        .register-component-wrapper .form-text {
          margin-top: 0.25rem !important;
          font-size: 0.875em !important;
          color: #6c757d !important;
        }

        .register-component-wrapper .form-label {
          margin-bottom: 0.5rem !important;
          font-weight: 500 !important;
          color: #212529 !important;
        }

        .register-component-wrapper .text-decoration-none {
          text-decoration: none !important;
        }

        /* Bootstrap Grid System */
        .register-component-wrapper .container {
          width: 100% !important;
          padding-right: 0.75rem !important;
          padding-left: 0.75rem !important;
          margin-right: auto !important;
          margin-left: auto !important;
        }

        .register-component-wrapper .row {
          display: flex !important;
          flex-wrap: wrap !important;
          margin-right: -0.75rem !important;
          margin-left: -0.75rem !important;
        }

        .register-component-wrapper .col-lg-10 {
          padding-right: 0.75rem !important;
          padding-left: 0.75rem !important;
        }

        .register-component-wrapper .col-md-5,
        .register-component-wrapper .col-md-7 {
          padding-right: 0.75rem !important;
          padding-left: 0.75rem !important;
        }

        @media (min-width: 768px) {
          .register-component-wrapper .col-md-5 {
            flex: 0 0 auto !important;
            width: 41.66666667% !important;
          }
          .register-component-wrapper .col-md-7 {
            flex: 0 0 auto !important;
            width: 58.33333333% !important;
          }
        }

        @media (min-width: 992px) {
          .register-component-wrapper .col-lg-10 {
            flex: 0 0 auto !important;
            width: 83.33333333% !important;
          }
        }

        /* Utility Classes */
        .register-component-wrapper .d-flex {
          display: flex !important;
        }

        .register-component-wrapper .d-grid {
          display: grid !important;
        }

        .register-component-wrapper .align-items-center {
          align-items: center !important;
        }

        .register-component-wrapper .justify-content-center {
          justify-content: center !important;
        }

        .register-component-wrapper .justify-content-between {
          justify-content: space-between !important;
        }

        .register-component-wrapper .flex-column {
          flex-direction: column !important;
        }

        .register-component-wrapper .flex-fill {
          flex: 1 1 auto !important;
        }

        .register-component-wrapper .flex-grow-1 {
          flex-grow: 1 !important;
        }

        .register-component-wrapper .w-100 {
          width: 100% !important;
        }

        .register-component-wrapper .position-relative {
          position: relative !important;
        }

        .register-component-wrapper .position-absolute {
          position: absolute !important;
        }

        .register-component-wrapper .g-0 > * {
          padding-right: 0 !important;
          padding-left: 0 !important;
        }

        .register-component-wrapper .gap-2 {
          gap: 0.5rem !important;
        }

        .register-component-wrapper .gap-3 {
          gap: 1rem !important;
        }

        .register-component-wrapper .p-5 {
          padding: 3rem !important;
        }

        .register-component-wrapper .px-3 {
          padding-left: 1rem !important;
          padding-right: 1rem !important;
        }

        .register-component-wrapper .py-2 {
          padding-top: 0.5rem !important;
          padding-bottom: 0.5rem !important;
        }

        .register-component-wrapper .pt-4 {
          padding-top: 1.5rem !important;
        }

        .register-component-wrapper .mb-2,
        .register-component-wrapper .mb-3,
        .register-component-wrapper .mb-4,
        .register-component-wrapper .mb-5 {
          margin-bottom: 1rem !important;
        }

        .register-component-wrapper .mb-3 {
          margin-bottom: 1rem !important;
        }

        .register-component-wrapper .mb-4 {
          margin-bottom: 1.5rem !important;
        }

        .register-component-wrapper .mb-5 {
          margin-bottom: 3rem !important;
        }

        .register-component-wrapper .mt-2 {
          margin-top: 0.5rem !important;
        }

        .register-component-wrapper .mt-3 {
          margin-top: 1rem !important;
        }

        .register-component-wrapper .mt-4 {
          margin-top: 1.5rem !important;
        }

        .register-component-wrapper .mt-5 {
          margin-top: 3rem !important;
        }

        .register-component-wrapper .me-2 {
          margin-right: 0.5rem !important;
        }

        .register-component-wrapper .ms-2 {
          margin-left: 0.5rem !important;
        }

        .register-component-wrapper .my-4 {
          margin-top: 1.5rem !important;
          margin-bottom: 1.5rem !important;
        }

        .register-component-wrapper .rounded-pill {
          border-radius: 50rem !important;
        }

        .register-component-wrapper .text-center {
          text-align: center !important;
        }

        .register-component-wrapper .bg-white {
          background-color: #fff !important;
        }

        .register-component-wrapper .bg-transparent {
          background-color: transparent !important;
        }

        .register-component-wrapper .disabled {
          pointer-events: none !important;
          opacity: 0.65 !important;
        }

        /* Responsive utilities */
        @media (max-width: 767.98px) {
          .register-component-wrapper .register-page-content {
            padding: 1rem 0 !important;
          }
          
          .register-component-wrapper .gradient-side {
            padding: 2rem !important;
          }
          
          .register-component-wrapper .col-md-5,
          .register-component-wrapper .col-md-7 {
            width: 100% !important;
          }
        }
      `}</style>

      {/* Registration Page Content */}
      <div className="register-page-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="register-card">
                <div className="row g-0">
                  {/* Left Side Banner */}
                  <div className="col-md-5 gradient-side">
                    <div className="text-white">
                      <h1 className="brand-logo">4DUCATE</h1>
                      <blockquote className="fs-5 fst-italic mt-7">
                        Join our community today and start your journey towards knowledge and growth.
                      </blockquote>
                      <div className="mt-5 pt-4">
                        <div className="d-flex align-items-center mb-3">
                          <i className="bi bi-check-circle-fill me-2"></i>
                          <span>Personalized learning paths</span>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                          <i className="bi bi-check-circle-fill me-2"></i>
                          <span>Access to expert instructors</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <i className="bi bi-check-circle-fill me-2"></i>
                          <span>Interactive learning materials</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side Form */}
                  <div className="col-md-7 bg-white p-5">
                    <div className="text-center mb-5">
                      <h2 className="fw-bold mb-2">Create Your Account</h2>
                      <p className="text-muted">Sign up in just a few simple steps</p>
                    </div>

                    {/* Step Indicators */}
                    <div className="d-flex justify-content-between align-items-center mb-5 position-relative">
                      <div className={`step-line w-100 position-absolute ${currentStep > 1 ? 'step-line-completed' : currentStep === 1 ? 'step-line-active' : ''}`}></div>
                      {[1, 2].map((step) => (
                        <div key={step} className="d-flex flex-column align-items-center">
                          <div 
                            className={`step-indicator ${currentStep > step ? 'completed' : ''} ${currentStep === step ? 'active' : ''}`}
                          >
                            {currentStep > step ? <i className="bi bi-check"></i> : step}
                          </div>
                          <span className="small mt-2 text-muted">
                            {step === 1 ? 'Personal Info' : 'Account Setup'}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Multi-step Form */}
                    <form onSubmit={handleRegister}>
                      {/* Step 1: Name & Email */}
                      {currentStep === 1 && (
                        <div className="step-content">
                          <div className="mb-4">
                            <label htmlFor="fullName" className="form-label fw-semibold">Full Name</label>
                            <div className="input-group">
                              <span className="input-group-text bg-transparent">
                                <i className="bi bi-person text-muted"></i>
                              </span>
                              <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                className="form-control"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="John Doe"
                                required
                              />
                            </div>
                          </div>
                          <div className="mb-4">
                            <label htmlFor="email" className="form-label fw-semibold">Email Address</label>
                            <div className="input-group">
                              <span className="input-group-text bg-transparent">
                                <i className="bi bi-envelope text-muted"></i>
                              </span>
                              <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="example@example.com"
                                required
                              />
                            </div>
                          </div>
                          <button 
                            type="button" 
                            className="btn btn-primary w-100 rounded-pill py-2 mt-2"
                            onClick={nextStep}
                          >
                            Continue <i className="bi bi-arrow-right ms-2"></i>
                          </button>
                        </div>
                      )}

                      {/* Step 2: Password */}
                      {currentStep === 2 && (
                        <div className="step-content">
                          <div className="mb-4">
                            <label htmlFor="password" className="form-label fw-semibold">Password</label>
                            <div className="input-group">
                              <span className="input-group-text bg-transparent">
                                <i className="bi bi-lock text-muted"></i>
                              </span>
                              <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                className="form-control"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                                required
                              />
                              <button 
                                type="button" 
                                className="password-toggle bg-transparent border-0 px-3"
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                              </button>
                            </div>
                            <div className="form-text small">
                              Must be at least 8 characters with numbers and symbols
                            </div>
                          </div>
                          <div className="mb-4">
                            <label htmlFor="confirmPassword" className="form-label fw-semibold">Confirm Password</label>
                            <div className="input-group">
                              <span className="input-group-text bg-transparent">
                                <i className="bi bi-lock-fill text-muted"></i>
                              </span>
                              <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirmPassword"
                                name="confirmPassword"
                                className="form-control"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="••••••••"
                                required
                              />
                              <button 
                                type="button" 
                                className="password-toggle bg-transparent border-0 px-3"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                              >
                                <i className={`bi ${showConfirmPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                              </button>
                            </div>
                          </div>
                          <div className="d-flex gap-3 mt-4">
                            <button 
                              type="button" 
                              className="btn btn-outline-secondary flex-fill rounded-pill py-2"
                              onClick={prevStep}
                            >
                              <i className="bi bi-arrow-left me-2"></i> Back
                            </button>
                            <button 
                              type="submit" 
                              className={`btn btn-primary flex-fill rounded-pill py-2 ${isLoading ? 'disabled' : ''}`}
                              disabled={isLoading}
                            >
                              {isLoading ? (
                                <>
                                  <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                  Creating Account...
                                </>
                              ) : (
                                'Complete Registration'
                              )}
                            </button>
                          </div>
                        </div>
                      )}
                    </form>

                    {/* Social Login (only shown on first step) */}
                    {currentStep === 1 && (
                      <div className="mt-4">
                        <div className="divider d-flex align-items-center my-4">
                          <div className="line flex-grow-1"></div>
                          <span className="px-3 text-muted small">OR SIGN UP WITH</span>
                          <div className="line flex-grow-1"></div>
                        </div>
                        <div className="d-grid gap-2">
                          <button type="button" className="btn btn-outline-secondary rounded-pill py-2">
                            <i className="bi bi-google me-2"></i> Google
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Already have an account? */}
                    <p className="text-center mt-4 mb-0 small">
                      Already have an account?{" "}
                      <Link to="/login" className="text-primary fw-semibold text-decoration-none">
                        Sign in here
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;