import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import DisplayMovie from '../DisplayMovie';
import Home from '../Home';


function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="findmovie" element={ <DisplayMovie/> } />

      </Routes>
      
      
      {/* <DisplayMovie/> */}
    </div>
  );
}

export default App;
                    