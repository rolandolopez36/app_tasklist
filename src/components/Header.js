import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../App';

const Header = ({ showCompleted, setShowCompleted }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleShowCompleted = () => setShowCompleted(!showCompleted);

  return (
    <div className='main'>
    <header className={`header ${theme}`}>
      <h1 className="header__title">Task List</h1>
      <div className="header__controls">
        <button className="header__button" onClick={toggleShowCompleted}>
          {showCompleted ? 'Hide Completed' : 'Show Completed'}
          <FontAwesomeIcon icon={showCompleted ? faEyeSlash : faEye} className="header__icon-button" />
        </button>

        <button className="header__button" onClick={toggleTheme}>
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} className="header__icon-button" />
        </button>
      </div>
    </header>
    </div>
  );
}

export default Header;
