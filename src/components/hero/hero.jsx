// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from "../../assets/images/logo1.png"
import './hero.css'
const Hero = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to C Square</h1>
          <p>Your gateway to competitive coding and development.</p>
          <button className="cta-button" onClick={()=> alert("Not available right now!")}>Become a Member</button>
        </div>
        <div className="hero-image">
          <img src={logo} alt="Hero" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
