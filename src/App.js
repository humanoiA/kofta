import React from 'react';
import './App.css';

import Navigationbar from './components/Navbar/Navbar';
import Registration from './components/Registration/Registration';

function App() {
  return(<div className="App">
    <Navigationbar />
    <Registration />
  </div>)
}

export default App;
