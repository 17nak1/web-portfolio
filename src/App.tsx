import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Projects from './pages/projects/Projects';

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