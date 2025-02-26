import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

// Define the button styles and sizes as types
const STYLES = ['btn--primary', 'btn--outline'] as const;
const SIZES = ['btn--medium', 'btn--large'] as const;

// Type definitions for the Button props
interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  buttonStyle?: typeof STYLES[number]; // 'btn--primary' | 'btn--outline'
  buttonSize?: typeof SIZES[number]; // 'btn--medium' | 'btn--large'
  to?: string; // Path or anchor link
  className?: string; 
}

export const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  onClick,
  buttonStyle = 'btn--primary',
  buttonSize = 'btn--medium',
  to = '/sign-up',
}) => {
  // Check if the button style and size are valid
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  // Determine if the button is an anchor (for smooth scrolling)
  const isAnchor = to.startsWith('#');

  return isAnchor ? (
    <a href={to} className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </a>
  ) : (
    <Link to={to} className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
