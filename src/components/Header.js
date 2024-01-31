import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../App'; // Import ThemeContext to access theme-related state and functions.

// The Header component controls the display of tasks and the theme of the application.
const Header = ({ showCompleted, setShowCompleted }) => {
  // Use useContext hook to access the current theme and the function to toggle the theme from ThemeContext.
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Function to toggle the visibility of completed tasks.
  const toggleShowCompleted = () => setShowCompleted(!showCompleted);

  return (
    <div className='main'>
      <header className={`header ${theme}`}>
        <h1 className="header__title">Task List</h1> {/* Displays the title of the application. */}
        <div className="header__controls">
          {/* Button to toggle the visibility of completed tasks. Utilizes FontAwesomeIcon for visual representation. */}
          <button className="header__button" onClick={toggleShowCompleted}>
            {showCompleted ? 'Hide Completed' : 'Show Completed'} {/* Dynamically changes button text based on the showCompleted state. */}
            <FontAwesomeIcon icon={showCompleted ? faEyeSlash : faEye} className="header__icon-button" />
          </button>

          {/* Button to toggle the application theme between light and dark modes. */}
          <button className="header__button" onClick={toggleTheme}>
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'} {/* Dynamically changes button text based on the current theme. */}
            <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} className="header__icon-button" />
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header; // Exports the Header component for use in other parts of the application.
