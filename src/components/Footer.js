import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>NAK © 2025</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link github'
              to='/'
              target='_blank'
              aria-label='Github'
            >
              <i class='fab fa-github' />
            </Link>
            <Link
              class='social-icon-link gitlab'
              to='/'
              target='_blank'
              aria-label='Gitlab'
            >
              <i class='fab fa-gitlab' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;