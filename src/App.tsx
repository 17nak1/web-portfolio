import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Projects from './pages/Projects';

const App: React.FC = () => {
  return (
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
      <section id='projects'>
        <Projects />
      </section>
      <div className='gradient-line'></div>
      <section id='contact'>
        <Contact />
      </section>
    </Router>
  );
}

export default App;