import React from 'react';
import Navbar from'./components/Navbar.js';
import Home from './pages/Home.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" Component={Home} />
          {/* <Route path="/about" component={About} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
