import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faEdit, faSquare, faTimes } from '@fortawesome/free-solid-svg-icons';

/**
 * Represents a single task item in the task list.
 * Allows for displaying, editing, and managing the completion status and deletion of a task.
 *
 * Props:
 * - task: Object containing the task details (id, text, completed).
 * - toggleCompleted: Function to toggle the completed status of the task.
 * - editTask: Function to save edited task text.
 * - deleteTask: Function to remove the task from the list.
 */
const Task = ({ task, toggleCompleted, editTask, deleteTask }) => {
    // State to manage whether the task is in edit mode.
    const [editingTask, setEditingTask] = useState(false);
    // State to hold the edited text of the task.
    const [newTaskText, setNewTaskText] = useState(task.text);

    /**
     * Handles the submit event for task editing.
     * Prevents the default form submission, updates the task with the new text,
     * and exits editing mode.
     */
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form behavior.
        editTask(task.id, newTaskText); // Update the task with new text.
        setEditingTask(false); // Exit editing mode.
    }

    return (
        <li className="task-list__task">
            {/* Icon to indicate and toggle the completion status of the task */}
            <FontAwesomeIcon 
                icon={task.completed ? faCheckSquare : faSquare} // Dynamic icon based on task completion status.
                className="task-list__icon task-list__icon-check"
                onClick={() => toggleCompleted(task.id)} // Toggle completion status on click.
            />
            <div className="task-list__text">
                {editingTask ? (
                    // Form to edit the task text. Shown only in editing mode.
                    <form className="edit-task-form" onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            className="edit-task-form__input"
                            value={newTaskText} // Controlled component with the task text.
                            onChange={(e) => setNewTaskText(e.target.value)} // Update text on change.
                        />
                        <button type="submit" className="edit-task-form__btn">Update</button>
                    </form>
                ) : (
                    // Display task text if not in editing mode.
                    task.text
                )}
            </div>
            <div className="task-list__button-container">
                {/* Edit button - toggles editing mode */}
                <FontAwesomeIcon 
                    icon={faEdit} 
                    className="task-list__icon task-list__icon-action"
                    onClick={() => setEditingTask(!editingTask)} // Toggle editing mode on click.
                />
                {/* Delete button - removes the task */}
                <FontAwesomeIcon 
                    icon={faTimes} 
                    className="task-list__icon task-list__icon-action" 
                    onClick={() => deleteTask(task.id)} // Delete task on click.
                />
            </div>
        </li>
    );
}

export default Task; // Export Task component for use in the application.
