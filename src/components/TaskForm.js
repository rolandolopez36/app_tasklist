import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from 'uuid';

const TaskForm = ({ tasks, setTasks }) => {
    const [taskInput, setTaskInput] = useState('');
    const [error, setError] = useState(''); // Estado para manejar errores de validación

    const handleSubmit = (e) => {
        e.preventDefault();
        const taskText = taskInput.trim();

        if (!taskText) {
            alert("Please enter a task."); // Configura un mensaje de error
            return;
        }

        setTasks(prevTasks => [...prevTasks, {
            id: uuidv4(),
            text: taskText,
            completed: false
        }]);

        setTaskInput('');
        setError(''); // Limpia el error si la tarea se agrega con éxito
    };

    return (
        <div className="task-form__wrapper">
        <form className="task-form" onSubmit={handleSubmit}>
            {error && <div className="task-form__error">{error}</div>} {/* Muestra errores de validación */}
            <input
                type="text"
                className="task-form__input"
                placeholder="Enter a task"
                onChange={(e) => setTaskInput(e.target.value)}
                value={taskInput}
                aria-label="Task" // Mejora en accesibilidad
            />
            <button className="task-form__btn" type="submit" aria-label="Add task">
                <FontAwesomeIcon icon={faPlusSquare} />
            </button>
        </form>
    </div>
    );
}

export default TaskForm;
