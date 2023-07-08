import React, { useState } from 'react';
import '../styles/login.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formInputs, setFormInputs] = useState({
    username: '',
    password: '',
  });

  const handleSwap = () => {
    setIsSignUp(!isSignUp);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Username:', formInputs.username);
    console.log('Password:', formInputs.password);
    // Reset the form fields
    setFormInputs({
      username: '',
      password: '',
    });
  };

  return (
    <div className="login-wrapper">
      <div className="login-page">
        <div className={`left-side ${isSignUp ? 'signup' : 'login'}`}>
          {isSignUp ? (
            <>
              <h2>Sign up for an account</h2>
              <p>Join us today to get amazing discounts</p>
              <button className="google-signin">
                <FontAwesomeIcon icon={faGoogle} id="google" />
                Sign in using Google
              </button>
              <form onSubmit={handleSubmit}>
                <div className="inputs">
                  <label htmlFor="usernameField" className="usernamelabel label">
                    Username
                  </label>
                  <input
                    type="text"
                    placeholder="@"
                    id="usernameField"
                    required
                    name="username"
                    value={formInputs.username}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="passwordField" className="usernamelabel label">
                    Password
                  </label>
                  <div className="password-input-wrapper">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder=""
                      id="usernameField"
                      required
                      name="password"
                      value={formInputs.password}
                      onChange={handleInputChange}
                    />
                    <button onClick={togglePasswordVisibility}></button>
                  </div>
                  <button className="login-btn">
                    <span className="btn">Signup</span>
                  </button>
                  <div className="sign-links">
                    <p>already have an account?</p>
                    <button onClick={handleSwap}>Login</button>
                  </div>
                </div>
              </form>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className={`right-side ${isSignUp ? 'Signup' : 'Login'}`}>
          {!isSignUp ? (
            <>
              <h2>{isSignUp ? 'Sign up for an account' : 'Welcome back!'}</h2>
              <p>Please login to your account</p>

              <button className="google-signin">
                <FontAwesomeIcon icon={faGoogle} id="google" />
                Sign in using Google
              </button>

              <form onSubmit={handleSubmit}>
                <div className="inputs">
                  <label htmlFor="usernameField" className="usernamelabel label">
                    Username
                  </label>
                  <input
                    type="text"
                    placeholder="@"
                    id="usernameField"
                    required
                    name="username"
                    value={formInputs.username}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="passwordField" className="usernamelabel label">
                    Password
                  </label>
                  <div className="password-input-wrapper">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder=""
                      id="usernameField"
                      required
                      name="password"
                      value={formInputs.password}
                      onChange={handleInputChange}
                    />
                    <button onClick={togglePasswordVisibility}></button>
                  </div>
                  <button className="login-btn">
                    <span className="btn">Login</span>
                  </button>
                  <div className="sign-links">
                    <p>don't have an account?</p>
                    <button onClick={handleSwap}>Sign up</button>
                  </div>
                </div>
              </form>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
