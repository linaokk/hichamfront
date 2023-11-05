import React from 'react';
import './Login.css';

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <h1>Sign-in to Your Account</h1>
      <form>
        <div className="form-group">
          <label>Email</label>
          <input type="email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" />
        </div>
        <div className="form-group">
          <p className="forgot-password-btn">Forget Password</p>
        </div>
        <button className="button-3d">Login</button>
      </form>
    </div>
  );
};

export default Login;
