import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Cards from './components/Cards'
import BothLandings from './components/BothLandings'
import Chooseus from './components/Chooseus'
import Expectations from './components/Expectations'
import Recentprojects from './components/Recentprojects'
import Footer from './components/Footer'
function App() {
  var img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbPmMDs40ePJdrbActQv2G15p9uI8Bu1vHg&usqp=CAU;"
  return (
    <div className='main'>
      <Navbar />
      <Landing />
      <Cards />
      <BothLandings />
      <Chooseus />
      <Expectations />
      <Recentprojects />
      <Footer />
    </div>
  )
}

export default App
