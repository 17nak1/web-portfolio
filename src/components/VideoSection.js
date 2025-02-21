import React from 'react';
import '../App.css';
import './VideoSection.css';
import { TypeAnimation } from 'react-type-animation';
import { Button } from './Button';

function VideoSection() {
  return (
    <div className='container'>
      <div class="text-column">
        <div className="introduction-section">
        <p style={{ fontSize: '3em', color: 'rgb(68 74 94)' }}>Hi! I’m Nazila.</p>
        </div>
        <TypeAnimation
          sequence={[
            'I’m a Software Developer.',
            1500, // wait for 1 second
            'Building innovative solutions.',
            1500, // wait for 1 second
          ]}
          speed={50}
          wrapper="span"
          repeat={Infinity}
          cursor={true}
          style={{ fontSize: '3.5em', color:'rgb(53 58 73)'}}
        />
        <div className="description-section">
          <p> 
            Passionate about building scalable solutions, solving complex problems, and turning ideas into reality.
            Bridging mathematics and software to create innovative and efficient applications.
          </p>
        </div>
        <div className='aboutme-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          to='/about'
        >
          More About Me
        </Button>
      </div>
      </div>
      <div class="image-column">
        <img  alt='' src='/images/woman-coder.jpg'/>
        {/* <p class="image-credit">
          Image by <a href="https://www.freepik.com/free-vector/cute-girl-hacker-operating-laptop-cartoon-vector-icon-illustration-people-technology-isolated-flat_65309450.htm" target="_blank" rel="noopener noreferrer">Freepik</a>
        </p> */}
      </div>
    </div>
  );
}

export default VideoSection;