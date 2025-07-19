import React, { useState } from 'react';
import './login.css';
import backgroundImage from './Rectangle 2756.png';
function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login logic
  };

  return (
    <div className="container-fluid">
      <div className="image-section">
        <img src={backgroundImage} alt="Background" />
        <div className="photo-credit">
          Photo by{' '}
          <a
            href="https://unsplash.com/@suprun"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alexander Suprun
          </a>
        </div>
      </div>
      <div className="login-section">
        <div className="login-container">
          <div className="logo">
            <div className="logo-icon">U</div>
            <span className="logo-text">UI Unicorn</span>
          </div>
          <h2 className="welcome-text">Nice to see you again</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Login</label>
              <input type="email" id="email" className="form-control" placeholder="Email or phone number" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <div className="password-field">
                <input type={passwordVisible ? 'text' : 'password'} id="password" className="form-control" placeholder="Enter password" />
                <button type="button" className="password-toggle" onClick={togglePassword}>
                  <i className={`fas ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                </button>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="remember" />
                <label className="form-check-label" htmlFor="remember">Remember me</label>
              </div>
              <a href="/" className="forgot-password">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
            <button type="button" className="btn btn-google">
              <svg className="me-2" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Or sign in with Google
            </button>
          </form>
          <div className="signup-link">
            Don't have an account? <a href="/">Sign up now</a>
          </div>
          <div className="footer">
            <div className="d-flex align-items-center justify-content-center mt-4">
              <div className="logo-icon me-2" style={{ width: '20px', height: '20px', fontSize: '12px' }}>U</div>
              <a href="/">@unicorn</a>
              <span className="ms-3">© Perfect Logic 2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
