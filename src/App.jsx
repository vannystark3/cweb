import './App.css'
//import { BrowserRouter as Router,Route,Link,Routes } from 'react-router-dom'
import NAVBAR from './components/navbar/NAVBAR'
import HERO from './components/hero/hero'
import ABOUT from './components/about/about'
import FOOTER from './components/footer/footer'
import COUNT from './components/count/count'
import COLLAB from './components/collab/collab'
import EVENTS from './components/event/event'
// import { useEffect } from 'react'
// import AOS from 'aos';
// import 'aos/dist/aos.css';

function App() {
  return (
    <>
      <NAVBAR />
      <HERO />
      <div className="divider"></div>
      <COUNT />
      <div className="divider"></div>
      <ABOUT />
      <div className="divider"></div>
      <COLLAB />
      <div className="divider"></div>
     {/* collaborations  */}
     <div id='event-s'></div>
     <EVENTS />
      {/* gallery  */}
      <FOOTER />
    </>
  )
}

export default App
