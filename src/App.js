import React from 'react';
import Navbar from'./components/Navbar.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <section id='home'>
          <Home />
        </section>
        <div className='gradient-line'></div>
        <section id='about'>
          <About />
        </section>
        <div className='gradient-line'></div>
        <section id='contact'>
          <Contact />
        </section>
      </Router>
    </>
  );
}

export default App;
