import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [click, setClick] = useState<boolean>(false);
  const [button, setButton] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('home');

  const handleClick = (): void => setClick(!click);
  const closeMobileMenu = (): void => setClick(false);

  const showButton = (): void => {
    setButton(window.innerWidth > 960);
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return () => window.removeEventListener('resize', showButton);
  }, []);

  useEffect(() => {
    const handleScroll = (): void => {
      const sections = ['home', 'about', 'projects', 'contact'];
      let currentSection = 'home';

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <a href='#home' className='navbar-logo' onClick={closeMobileMenu}>
          Nazila Akhavan
        </a>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {['home', 'about', 'projects', 'contact'].map((section) => (
            <li key={section} className={`nav-item ${activeSection === section ? 'active' : ''}`}>
              <a href={`#${section}`} className='nav-links' onClick={closeMobileMenu}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        {button && <Button buttonStyle='btn--outline' to='#contact'>Let's Talk!</Button>}
      </div>
    </nav>
  );
};

export default Navbar;