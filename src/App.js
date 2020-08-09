import React from 'react';

import './App.css';
import Particles from 'react-particles-js';
import Navigationbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Registration from './components/Registration/Registration';
import ParticlesBg from 'particles-bg'
function App() {
  return(<div className="App">
    <Navigationbar />
          <ParticlesBg type="square" num={20} bg={true} />
  <Banner></Banner>
  </div>)
}

export default App;
