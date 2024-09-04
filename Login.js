import React, { useState } from 'react';
import './Login.css';

function Login({ onSignUpClick }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., API call)
    console.log('Email:', email);
    console.log('Password:', password);

    // Simulate a successful login
    // After successful login, redirect to the home page
    window.location.href = '/App.js'; // Redirect to home page
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <p className="sign-up-text">
        Don't have an account? <a href="#sign-up" onClick={onSignUpClick}>Sign Up</a>
      </p>
    </div>
  );
}

export default Login;
