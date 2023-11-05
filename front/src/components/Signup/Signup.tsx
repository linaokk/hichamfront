import React from 'react';
import './Sign.css'; // You can create a separate CSS file for Signup if needed
import Navbar from '../Nabvar/Navbar';

const Signup: React.FC = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="screen">
        <div className="screen__content">
          <h1>Sign up</h1>
          <form className="signup">
            <div className="signup__field">
              <i className="signup__icon fas fa-user"></i>
              <input type="text" className="signup__input" placeholder="First Name" />
            </div>
            <div className="signup__field">
              <i className="signup__icon fas fa-user"></i>
              <input type="text" className="signup__input" placeholder="Last Name" />
            </div>
            <div className="signup__field">
              <i className="signup__icon fas fa-lock"></i>
              <input type="password" className="signup__input" placeholder="Password" />
            </div>
            <div className="signup__field">
              <i className="signup__icon fas fa-lock"></i>
              <input type="password" className="signup__input" placeholder="Retype Password" />
            </div>
            <div className="signup__field">
              <i className="signup__icon fas fa-envelope"></i>
              <input type="email" className="signup__input" placeholder="Email" />
            </div>
            <button className="button signup__submit">
              <span className="button__text">Sign Up Now</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default Signup;
