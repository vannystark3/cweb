// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Count = () => {
  // Sample counts
  const memberCount = 1192;
  const eventCount = 8;
  const coreCount = 30;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='count-section' data-aos='fade-up' data-aos-duration='3000'>
      {
        [{title :"Club Members",fn:memberCount},{title :"Events",fn:eventCount},{title :"Core Team",fn:coreCount}].map((i)=>(
      <div className={`card ${i.title==="Core Team" && "core-count"}`} key={i.title}>
        <div>
            <h2>{i.title}</h2>
            <span>{i.fn}</span>
        </div>
      </div>
      ))
    }
    </div>
  );
};

export default Count;
