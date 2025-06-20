import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Animation for card entrance (similar to Navbar's slideUp)
  const cardAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(100%)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 200, friction: 20, duration: 600 },
  });

  // Animation for form elements
  const formAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(30px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    delay: 200,
    config: { tension: 200, friction: 20 },
  });

  // Animation for gradient side
  const gradientAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(-30px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    delay: 100,
    config: { tension: 200, friction: 20 },
  });

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard");
    }, 1500);
  };

  const containerStyles = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #f5f7fa 0%, #c3dfe5 100%)",
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
    padding: "20px",
    boxSizing: "border-box",
  };

  const cardStyles = {
    borderRadius: "20px",
    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    maxWidth: "900px",
    width: "100%",
    display: "flex",
    flexDirection: window.innerWidth < 768 ? "column" : "row",
    overflow: "hidden",
  };

  const gradientSideStyles = {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flex: window.innerWidth < 768 ? "none" : "0 0 40%",
    minHeight: window.innerWidth < 768 ? "200px" : "auto",
    position: "relative",
  };

  const formSideStyles = {
    backgroundColor: "#fff",
    padding: "40px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const brandLogoStyles = {
    fontWeight: "800",
    letterSpacing: "1px",
    color: "#fff",
    fontSize: "2.5rem",
    marginBottom: "1.5rem",
  };

  const quoteStyles = {
    color: "#fff",
    position: "relative",
    zIndex: 1,
  };

  const inputGroupStyles = {
    display: "flex",
    alignItems: "center",
    border: "1px solid #e0e0e0",
    borderRadius: "10px",
    overflow: "hidden",
    marginBottom: "1rem",
  };

  const inputStyles = {
    padding: "12px 15px",
    border: "none",
    fontSize: "16px",
    flex: 1,
    borderRadius: "10px",
  };

  const inputGroupTextStyles = {
    padding: "12px 15px",
    color: "#6c757d",
    display: "flex",
    alignItems: "center",
  };

  const buttonStyles = {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    border: "none",
    padding: "12px 24px",
    fontWeight: "600",
    borderRadius: "25px",
    color: "#fff",
    cursor: "pointer",
    fontSize: "16px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
  };

  const googleButtonStyles = {
    border: "1px solid #e0e0e0",
    padding: "12px 24px",
    borderRadius: "25px",
    backgroundColor: "#fff",
    color: "#333",
    fontSize: "16px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
  };

  const labelStyles = {
    fontWeight: "600",
    marginBottom: "8px",
    display: "block",
    color: "#333",
  };

  const linkStyles = {
    color: "#667eea",
    textDecoration: "none",
    fontWeight: "600",
  };

  const dividerStyles = {
    textAlign: "center",
    margin: "20px 0",
    fontSize: "14px",
    color: "#6c757d",
    position: "relative",
  };

  const passwordToggleStyles = {
    cursor: "pointer",
    background: "none",
    border: "none",
    color: "#6c757d",
    padding: "12px 15px",
  };

  return (
    <>
      <style>
        {`
          @keyframes slideUp {
            from {
              transform: translateY(100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes bounce {
            0%, 20%, 53%, 80%, 100% {
              transform: translate3d(0, 0, 0) scale(1);
            }
            40%, 43% {
              transform: translate3d(0, -8px, 0) scale(1.05);
            }
            70% {
              transform: translate3d(0, -4px, 0) scale(1.02);
            }
            90% {
              transform: translate3d(0, -2px, 0) scale(1.01);
            }
          }

          @keyframes pulse {
            0% {
              box-shadow: 0 0 0 0 rgba(102, 126, 234, 0.4);
            }
            70% {
              box-shadow: 0 0 0 10px rgba(102, 126, 234, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(102, 126, 234, 0);
            }
          }

          .login-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.3);
            animation: bounce 0.6s ease;
          }

          .login-btn:active {
            transform: translateY(-1px);
          }

          .login-btn::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 4px;
            height: 4px;
            background-color: #fff;
            border-radius: 50%;
            animation: pulse 2s infinite;
          }

          .login-input:focus {
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
            outline: none;
          }

          .login-google-btn:hover {
            background-color: #f8f9fa;
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          }

          @media (max-width: 767px) {
            .login-responsive-hide { display: none; }
            .login-mobile-center { text-align: center; }
          }
        `}
      </style>
      <div style={containerStyles}>
        <animated.div style={{ ...cardStyles, ...cardAnimation }} className="login-card">
          <animated.div style={{ ...gradientSideStyles, ...gradientAnimation }}>
            <div style={quoteStyles}>
              <h1 style={brandLogoStyles}>4DUCATE</h1>
              <figure style={{ margin: 0 }}>
                <div style={{ fontSize: "3rem", opacity: 0.5, marginBottom: "1rem" }}>❝</div>
                <blockquote style={{ fontSize: "1.25rem", fontStyle: "italic", margin: 0, lineHeight: "1.6" }}>
                  It is only paradoxical to those who have forgotten the purpose of education is to transform.
                </blockquote>
              </figure>
              <div style={{ marginTop: "2rem", paddingTop: "1rem" }} className="login-responsive-hide">
                <div style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
                  <span style={{ marginRight: "8px" }}>✅</span>
                  <span>Personalized learning</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
                  <span style={{ marginRight: "8px" }}>✅</span>
                  <span>Expert instructors</span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ marginRight: "8px" }}>✅</span>
                  <span>Interactive content</span>
                </div>
              </div>
            </div>
          </animated.div>
          <animated.div style={{ ...formSideStyles, ...formAnimation }}>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <h2 style={{ fontWeight: "bold", marginBottom: "8px", fontSize: "1.75rem", color: "#333" }}>
                Welcome Back
              </h2>
              <p style={{ color: "#6c757d", margin: 0 }}>Please enter your details to sign in</p>
            </div>
            <div onSubmit={handleLogin}>
              <div style={{ marginBottom: "1.5rem" }}>
                <label htmlFor="email" style={labelStyles}>
                  Email Address
                </label>
                <div className="login-input-group" style={inputGroupStyles}>
                  <span style={inputGroupTextStyles}>✉️</span>
                  <input
                    type="email"
                    id="email"
                    className="login-input"
                    style={inputStyles}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              <div style={{ marginBottom: "1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <label htmlFor="password" style={labelStyles}>
                    Password
                  </label>
                  <Link to="/forgot-password" style={{ ...linkStyles, fontSize: "14px" }}>
                    Forgot password?
                  </Link>
                </div>
                <div className="login-input-group" style={inputGroupStyles}>
                  <span style={inputGroupTextStyles}>🔒</span>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="login-input"
                    style={inputStyles}
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
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "1.5rem" }}>
                <input style={{ marginRight: "8px", cursor: "pointer" }} type="checkbox" id="rememberMe" />
                <label style={{ fontSize: "14px", color: "#6c757d", cursor: "pointer" }} htmlFor="rememberMe">
                  Remember me
                </label>
              </div>
              <button
                type="button"
                className="login-btn"
                style={buttonStyles}
                onClick={handleLogin}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="login-spin" style={{ fontSize: "16px" }}>
                      ↻
                    </span>
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
              <div style={dividerStyles}>
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    right: 0,
                    height: "1px",
                    backgroundColor: "#e0e0e0",
                    zIndex: 0,
                  }}
                ></div>
                <span style={{ backgroundColor: "white", padding: "0 15px", position: "relative", zIndex: 1 }}>
                  OR CONTINUE WITH
                </span>
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <button type="button" className="login-google-btn" style={googleButtonStyles}>
                  <span style={{ fontSize: "16px" }}>🔍</span>
                  Google
                </button>
              </div>
              <div style={{ textAlign: "center", marginTop: "1rem", paddingTop: "8px" }}>
                <p style={{ fontSize: "14px", color: "#6c757d", margin: 0 }}>
                  Don't have an account?{" "}
                  <Link to="/register" style={linkStyles}>
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </animated.div>
        </animated.div>
      </div>
    </>
  );
};

export default Login;