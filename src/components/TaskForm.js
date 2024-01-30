import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from 'uuid';

// TaskForm component for adding new tasks
const TaskForm = ({ tasks, setTasks }) => {
    const [taskInput, setTaskInput] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submit action

        const taskText = taskInput.trim(); // Removes leading and trailing whitespace

        if (!taskText) {
            // If the input is empty (after trimming), show an alert
            alert("Please enter a task.");
            return; // Exits the function to prevent adding an empty task
        }

        // Adds the new task to the state, using the previous state to preserve existing tasks
        setTasks([
            ...tasks,
            {
                id: uuidv4(), // Generates a unique ID for each task
                text: taskText, // Uses the cleaned task text
                completed: false // Initially, the task is not completed
            }
        ]);

        setTaskInput(''); // Clears the input field after adding the task
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input
                type="text"
                className="task-form__input"
                placeholder="Enter a task"
                onChange={(e) => setTaskInput(e.target.value)}
                value={taskInput}
            />
            <button className="task-form__btn" type="submit">
                <FontAwesomeIcon icon={faPlusSquare} className="task-form__icon-btn" />
            </button>
        </form>
    );
}

export default TaskForm;