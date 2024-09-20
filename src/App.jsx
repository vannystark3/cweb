import './App.css'
//import { BrowserRouter as Router,Route,Link,Routes } from 'react-router-dom'
import NAVBAR from './components/NAVBAR'
import LANDINGPAGE from './components/LandingPage'
import ABOUT from './components/ABOUT'
import FOOTER from './components/footer'
import COUNT from './components/count'
import COLLAB from './components/collab'
import EVENTS from './components/event'
// import { useEffect } from 'react'
// import AOS from 'aos';
// import 'aos/dist/aos.css';

function App() {
  return (
    <>
      <NAVBAR />
      <LANDINGPAGE />
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
