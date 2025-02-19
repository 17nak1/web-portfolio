import React from 'react';
import '../App.css';
import './VideoSection.css';
import { TypeAnimation } from 'react-type-animation';
import { Button } from './Button';

function VideoSection() {
  return (
    <div className='video-container'>
      <div class="text-column">
        <TypeAnimation
          sequence={[
            'Hi! I’m Nazila.',
            1500, // wait for 1 second
            'I’m a Software Developer.',
            1500, // wait for 1 second
            'Building innovative solutions.',
            1500, // wait for 1 second
          ]}
          speed={40}
          wrapper="span"
          repeat={Infinity}
          cursor={true}
          style={{ fontSize: '2em', color:'rgb(74 81 106)'}}
        />
        <div className='aboutme-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
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