import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faEdit, faSquare, faTimes } from '@fortawesome/free-solid-svg-icons';

// Task component for displaying and managing a single task
const Task = ({ task, toggleCompleted, editTask, deleteTask }) => {
    const [editingTask, setEditingTask] = useState(false);
    const [newTaskText, setNewTaskText] = useState(task.text);

    // Handler for the submit event to update a task
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form behavior
        editTask(task.id, newTaskText); // Calls the editTask function with the ID and new text
        setEditingTask(false); // Exits edit mode
    }

    return (
        
        <li className="task-list__task">
            <FontAwesomeIcon 
                icon={task.completed ? faCheckSquare : faSquare}
                className="task-list__icon task-list__icon-check"
                onClick={() => toggleCompleted(task.id)}
            />
            <div className="task-list__text">
                {editingTask ? (
                    <form className="edit-task-form" onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            className="edit-task-form__input"
                            value={newTaskText}
                            onChange={(e) => setNewTaskText(e.target.value)}
                        />
                        <button type="submit" className="edit-task-form__btn">
                            Update
                        </button>
                    </form>
                ) : (
                    task.text
                )}
            </div>
            <div className="task-list__button-container">
                <FontAwesomeIcon 
                    icon={faEdit} 
                    className="task-list__icon task-list__icon-action"
                    onClick={() => setEditingTask(!editingTask)}
                />
                <FontAwesomeIcon 
                    icon={faTimes} 
                    className="task-list__icon task-list__icon-action" 
                    onClick={() => deleteTask(task.id)}
                />
            </div>
        </li>
        
    );
}

export default Task;
