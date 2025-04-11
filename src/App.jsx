import './App.css'
//import { BrowserRouter as Router,Route,Link,Routes } from 'react-router-dom'
<<<<<<< HEAD
import NAVBAR from './components/navbar/NAVBAR'
import HERO from './components/hero/hero'
import ABOUT from './components/about/about'
import FOOTER from './components/footer/footer'
import COUNT from './components/count/count'
import COLLAB from './components/collab/collab'
import EVENTS from './components/event/event'
=======
import NAVBAR from './components/NAVBAR'
import LANDINGPAGE from './components/LandingPage'
import ABOUT from './components/ABOUT'
import FOOTER from './components/footer'
import COUNT from './components/count'
import COLLAB from './components/collab'
import EVENTS from './components/event'
>>>>>>> 42d319cd7c608afdd9762480ab33614f41c3eafe
// import { useEffect } from 'react'
// import AOS from 'aos';
// import 'aos/dist/aos.css';

function App() {
  return (
    <>
      <NAVBAR />
<<<<<<< HEAD
      <HERO />
=======
      <LANDINGPAGE />
>>>>>>> 42d319cd7c608afdd9762480ab33614f41c3eafe
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
