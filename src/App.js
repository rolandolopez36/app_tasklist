import React, { createContext, useState, useEffect } from 'react';
import './App.css';
import './index.css';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
// Creación del contexto para el tema
export const ThemeContext = createContext();

const App = () => {
  // Estado y lógica para las tareas
  const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  const [tasks, setTasks] = useState(savedTasks);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Estado y lógica para mostrar tareas completadas
  const showCompletedConfig = JSON.parse(localStorage.getItem('showCompleted') || 'true');
  const [showCompleted, setShowCompleted] = useState(showCompletedConfig);

  useEffect(() => {
    localStorage.setItem('showCompleted', JSON.stringify(showCompleted));
  }, [showCompleted]);

  // Estado y lógica para el tema oscuro/claro
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(currentTheme => currentTheme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, tasks, setTasks, showCompleted, setShowCompleted }}>
      <div className="App" id={theme}>
      <Header showCompleted={showCompleted} setShowCompleted={setShowCompleted} />
        <TaskForm tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} showCompleted={showCompleted} />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
