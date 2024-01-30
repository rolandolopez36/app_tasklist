import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from './ThemeContext';

// Header component displaying the title and a toggle button for showing/hiding completed tasks
const Header = ({ showCompleted, setShowCompleted }) => {
    // Function to toggle the visibility of completed tasks
    const toggleShowCompleted = () => {
      setShowCompleted(!showCompleted);
    };
  
    return (
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <header className={`header ${theme}`}>
            <h1 className="header__title">Task List</h1>
            {/* Unified button to show/hide completed tasks */}
            <div className="header__controls">
              {/* Direct use of toggleShowCompleted */}
              <button className="header__button" onClick={toggleShowCompleted}> 
                {/* Button text based on showCompleted state */}
                {showCompleted ? 'Hide Completed' : 'Show Completed'}
                <FontAwesomeIcon icon={showCompleted ? faEyeSlash : faEye} className="header__icon-button" />
                {/* Icon based on showCompleted state */}
              </button>
  
              {/* Button to toggle theme mode */}
              <button className="header__button" onClick={toggleTheme}>
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} className="header__icon-button" />
              </button>
            </div>
          </header>
        )}
      </ThemeContext.Consumer>
    );
  };
  
  export default Header;

