// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from "./logo.png";
import  { useState } from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillDiscord } from 'react-icons/ai';

const NAVBAR = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={logo} className="logo-image" />
        <span>C-Square</span>
      </div>
      <button className="value" onClick={()=> alert("Not available right now!")}>
        Registration
      </button>
      <button className="value" >
        <a href='https://forms.gle/aByuzg78jfjoNmXG7'>Core Team</a>
      </button>
      <button className="value">
        <a href='#event-s'>Events</a>
      </button>
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
            <a href="https://in.linkedin.com/company/csquare-club"><AiFillLinkedin /><b> LinkedIn</b></a>
            <a href="https://www.instagram.com/csquare_club?igsh=b3F4enU5OWk1ODRw"><AiFillInstagram /><b> Instagram</b></a>
            <a href="https://discord.gg/zVGd9ran"><AiFillDiscord /><b> Discord</b></a>
          </div>
        )}
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default NAVBAR;
