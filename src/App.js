import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';

function App() {
  return (
    <>
    <Navbar/>
    <Router>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/profile" element = {<Profile/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
