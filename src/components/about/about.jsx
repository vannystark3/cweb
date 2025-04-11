// eslint-disable-next-line no-unused-vars
import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './about.css'
const ABOUT = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="features-section" data-aos='fade-up' data-aos-duration='2000'>
        <h2>What We Offer</h2>
        <div className="features">
          <div className="feature">
            <div className='coding'>
              <div className='img'>
              </div>
            </div>
            <h3>Competitive Coding</h3>
            <p>Sharpen your coding skills with our competitive coding challenges.</p>
          </div>
          <div className="feature">
            <div className='workshop'>
              <div className='img'>
              </div>
            </div>
            <h3>Technical Workshops</h3>
            <p>Learn new technologies and tools in our interactive workshops.</p>
          </div>
          <div className="feature">
            <div className='hackathon'>
              <div className='img'>
              </div>
            </div>
            <h3>Hackathons</h3>
            <p>Compete in hackathons and build innovative solutions.</p>
          </div>
        </div>
      </section>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default ABOUT;
