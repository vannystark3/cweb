// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import './collab.css'

export default function Collab() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='collab-section' data-aos='fade-up' data-aos-duration='2000'>
      <h2>Our Collaborations</h2>
      <div className='collaborators'>
          <div className='collab-card' id='geek-room'></div>
          <div className='collab-card' id='coding-ninjas'></div>
          <div className='collab-card' id='pandora'></div>
{/*           <div className='collab-card' id='crypto-connect'></div> */}
      </div>
    </div>
  );
}
