import React, { useState } from 'react';
import logo from "../../assets/images/logo1.png";
import { AiFillLinkedin, AiFillInstagram, AiFillDiscord } from 'react-icons/ai';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={logo} className="logo-image" alt="C-Square Logo" />
        <span>C-Square</span>
      </div>

      <a className="value" onClick={() => alert("Not available right now!")}>
        Registration
      </a>

      <a className="value" href="https://forms.gle/aByuzg78jfjoNmXG7" target="_blank" rel="noopener noreferrer">
        Core Team
      </a>

      <a className="value" href="#event-s">
        Events
      </a>

      <div 
        className="dropdown" 
        onMouseEnter={() => setIsOpen(true)} 
        onMouseLeave={() => setIsOpen(false)}
      >
        <button className="dropbtn">
          Community <span className={`arrow ${isOpen ? 'open' : ''}`}>&#9662;</span>
        </button>

        {isOpen && (
          <div className="dropdown-content">
            <a href="https://in.linkedin.com/company/csquare-club" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin /><b> LinkedIn</b>
            </a>
            <a href="https://www.instagram.com/csquare_club?igsh=b3F4enU5OWk1ODRw" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram /><b> Instagram</b>
            </a>
            <a href="https://discord.gg/zVGd9ran" target="_blank" rel="noopener noreferrer">
              <AiFillDiscord /><b> Discord</b>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
