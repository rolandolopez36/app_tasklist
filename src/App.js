import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { ThemeContext } from './components/ThemeContext';

// Main App component
const App = () => {
  // Retrieve saved tasks from localStorage, defaulting to an empty array if none are found
  const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');

  // State for managing tasks, initialized with saved tasks
  const [tasks, setTasks] = useState(savedTasks);

  // Effect hook to save tasks to localStorage whenever tasks state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Retrieve the 'showCompleted' configuration from localStorage, defaulting to true
  const showCompletedConfig = JSON.parse(localStorage.getItem('showCompleted') || 'true');

  // State for managing the visibility of completed tasks
  const [showCompleted, setShowCompleted] = useState(showCompletedConfig);

  // Effect hook to save 'showCompleted' state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('showCompleted', showCompleted.toString());
  }, [showCompleted]);

  // State for managing theme
  const [theme, setTheme] = useState('light');

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`container ${theme}`}>
        <Header showCompleted={showCompleted} setShowCompleted={setShowCompleted} />
        <TaskForm tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} showCompleted={showCompleted} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;