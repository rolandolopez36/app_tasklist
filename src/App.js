import React, { createContext, useState, useEffect } from 'react';
import './App.css'; // Global styles for the entire application.
import './index.css'; // Base styles, typically for resetting or setting global properties.
import Header from './components/Header'; // Header component importation, responsible for rendering the app's header.
import TaskForm from './components/TaskForm'; // TaskForm component for handling task creation.
import TaskList from './components/TaskList'; // TaskList component for displaying the list of tasks.

// Creation of the context for theming, providing a way to share the theme state across components without prop drilling.
export const ThemeContext = createContext();

const App = () => {
  // State and logic for task management. Initializes tasks from localStorage to persist data across sessions.
  const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  const [tasks, setTasks] = useState(savedTasks);

  // Effect hook to update localStorage when tasks change, ensuring data persistence.
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // State and logic for toggling the visibility of completed tasks, with default visibility set through localStorage.
  const showCompletedConfig = JSON.parse(localStorage.getItem('showCompleted') || 'true');
  const [showCompleted, setShowCompleted] = useState(showCompletedConfig);

  // Effect hook to update localStorage when showCompleted state changes.
  useEffect(() => {
    localStorage.setItem('showCompleted', JSON.stringify(showCompleted));
  }, [showCompleted]);

  // State and logic for dark/light theme toggling.
  const [theme, setTheme] = useState("light"); // Default theme set to "light".

  // Function to toggle between light and dark themes.
  const toggleTheme = () => {
    setTheme(currentTheme => currentTheme === "light" ? "dark" : "light");
  };

  // Rendering of the app with conditional theming and provision of shared state via Context API.
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, tasks, setTasks, showCompleted, setShowCompleted }}>
      <div className="App" id={theme}> {/* Dynamic theme assignment for styling */}
        <Header showCompleted={showCompleted} setShowCompleted={setShowCompleted} />
        <TaskForm tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} showCompleted={showCompleted} />
      </div>
    </ThemeContext.Provider>
  );
};

export default App; // Exporting App component for use in index.js.
