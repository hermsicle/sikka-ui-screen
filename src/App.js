import React from 'react'
import { NavBar, PracticeProfile, GraphContainer, DentalDetails } from './containers' 
import './App.scss'

function App() {
  return (
    <div className="App">
      <NavBar />
      <PracticeProfile />
      <div className="user-info-container">
        <GraphContainer />
        <DentalDetails />
      </div>
    </div>
  );
}

export default App;
