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
                <button><a href='#' onClick={()=>alert("Sorry, The registrations for this event are closed!")}>REGISTERATION CLOSED</a></button>
            </div>
            <div className='event-card'>
                <div className='img-space' id='second-event'>
                </div>
                <button><a href='#' onClick={()=>alert("Sorry, The registrations for this event are closed!")}>REGISTERATION CLOSED</a></button>
            </div>
            <div className='event-card'>
                <div className='img-space' id='third-event'>
                </div>
                <button><a href='#' onClick={()=>alert("Sorry, The registrations for this event are closed!")}>REGISTERATION CLOSED</a></button>
            </div>
        </div>
    </div>
  )
}
