import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from 'uuid'; // Import UUID to generate unique identifiers for new tasks.

/**
 * TaskForm component allows users to input and submit new tasks.
 * 
 * Props:
 * - tasks: Array of current tasks.
 * - setTasks: Function to update the tasks array.
 */
const TaskForm = ({ tasks, setTasks }) => {
    // State for the task input field value.
    const [taskInput, setTaskInput] = useState('');
    // State for managing validation error messages.
    const [error, setError] = useState('');

    /**
     * Handles form submission, creating a new task.
     * Validates the input to ensure it's not empty, trims whitespace,
     * then adds the new task to the tasks array with a unique ID and reset form.
     */
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents default form submission behavior.
        const taskText = taskInput.trim(); // Removes leading/trailing whitespace.

        // Validation: Check if the input is empty.
        if (!taskText) {
            setError("Please enter a task."); // Sets an error message.
            return; // Exits the function to prevent task creation.
        }

        // Adds a new task to the state.
        setTasks(prevTasks => [...prevTasks, {
            id: uuidv4(), // Generates a unique ID for each task.
            text: taskText,
            completed: false // Initializes task as not completed.
        }]);

        setTaskInput(''); // Resets the input field for the next task.
        setError(''); // Clears any error messages upon successful task addition.
    };

    return (
        <div className="task-form__wrapper">
            <form className="task-form" onSubmit={handleSubmit}>
                {/* Displays error messages to the user if any. */}
                {error && <div className="task-form__error">{error}</div>}
                <input
                    type="text"
                    className="task-form__input"
                    placeholder="Enter a task"
                    onChange={(e) => setTaskInput(e.target.value)} // Updates taskInput state with every keystroke.
                    value={taskInput} // Controlled component pattern for the input field.
                    aria-label="Task" // Enhances accessibility by providing a label for screen readers.
                />
                <button className="task-form__btn" type="submit" aria-label="Add task">
                    <FontAwesomeIcon icon={faPlusSquare} /> {/* Visually indicates the action to add a task. */}
                </button>
            </form>
        </div>
    );
}

export default TaskForm; // Exports TaskForm for use elsewhere in the application.
