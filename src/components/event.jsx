// eslint-disable-next-line no-unused-vars
import React,{ useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function Event() {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div className='event-section' >
        <h2>Events</h2>
        <div className='event-space' data-aos='fade-up' data-aos-duration='2000'>
            <div className='event-card'>
                <div className='img-space' id='first-event'>
                </div>
                <button><a href='https://unstop.com/o/4zdBnm9?lb=Aexm91xM&utm_medium=Share&utm_source=WhatsApp' >REGISTER</a></button>
            </div>
            <div className='event-card'>
                <div className='img-space' id='second-event'>
                </div>
                <button><a href='https://unstop.com/o/aJQEfLU?lb=7vD4WRl9&utm_medium=Share&utm_source=shortUrl' >REGISTER</a></button>
            </div>
            <div className='event-card'>
                <div className='img-space' id='third-event'>
                </div>
                <button><a href='https://unstop.com/o/y4zYGhK?lb=Eaz0y9gv&utm_medium=Share&utm_source=WhatsApp' >REGISTER</a></button>
            </div>
        </div>
    </div>
  )
}
