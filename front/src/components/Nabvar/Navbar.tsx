import React from 'react';
import './Navbar.css'; // Import your CSS file

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className="nav-links">
        <a href="#pricing">Pricing</a>
        <a href="#faq">FAQ</a>
      </div>
      <div className="try-login">
        <a href="#login">Login</a>
        <button className="try-button">Try for FREE</button>
      </div>
    </nav>
  );
};

export default Navbar;
