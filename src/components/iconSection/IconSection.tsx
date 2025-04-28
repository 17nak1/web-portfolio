import React, { useState, useEffect } from 'react';
import './IconSection.css';

const IconeSection: React.FC = () => {
  
  const [activeIcon, setActiveIcon] = useState<number | null>(null);
  const [iconIndex, setIconIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIcon(iconIndex);
      setTimeout(() => setActiveIcon(null), 10000); // Reset after 10 second
      setIconIndex((prevIndex) => (prevIndex + 1) % 7);
    }, 1000); // Change icon every second

    return () => clearInterval(intervalId);
  }, [iconIndex]);

  return (
    <div className="icon-container">
      <div className="icon-circle">
        <i className={`ci ci-react ${activeIcon === 0 ? 'active' : ''}`}></i>
        <i className={`ci ci-nodejs ${activeIcon === 1 ? 'active' : ''}`}></i>
        <i className={`ci ci-express ${activeIcon === 2 ? 'active' : ''}`}></i>
        <i className={`ci ci-mysql ${activeIcon === 3 ? 'active' : ''}`}></i>
        <i className={`ci ci-typescript ${activeIcon === 4 ? 'active' : ''}`}></i>
        <i className={`ci ci-javascript ${activeIcon === 5 ? 'active' : ''}`}></i>
        <i className={`ci ci-ruby ${activeIcon === 6 ? 'active' : ''}`}></i>
      </div>
    </div>
  );
};

export default IconeSection