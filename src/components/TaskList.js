import React from 'react';
import Task from './Task';

/**
 * TaskList component displays a list of tasks and allows for interaction with each task.
 * It provides functionality to toggle completion, edit task details, and delete tasks.
 *
 * Props:
 * - tasks: Array containing task objects.
 * - setTasks: Function to update the state of tasks.
 * - showCompleted: Boolean indicating whether completed tasks should be shown.
 */
const TaskList = ({ tasks, setTasks, showCompleted }) => {
    /**
     * Toggles the completed status of a task.
     * @param id The unique identifier of the task to be toggled.
     */
    const toggleCompleted = (id) => {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    /**
     * Updates the text of a task.
     * @param id The unique identifier of the task to be updated.
     * @param newText The new text for the task.
     */
    const editTask = (id, newText) => {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, text: newText } : task
        ));
    };

    /**
     * Deletes a task from the list.
     * @param id The unique identifier of the task to be deleted.
     */
    const deleteTask = (id) => {
        setTasks(tasks.filter(task => 
            task.id !== id
        ));
    };

    // Filters tasks based on whether they are completed and the value of showCompleted.
    const filteredTasks = tasks.filter(task => 
        showCompleted || !task.completed
    );

    return (
        <React.Fragment>
            <ul className="task-list">
                {filteredTasks.length > 0 ? (
                    // Renders Task components for each task in filteredTasks.
                    filteredTasks.map(task => (
                        <Task
                            key={task.id}
                            task={task}
                            toggleCompleted={toggleCompleted}
                            editTask={editTask}
                            deleteTask={deleteTask}
                        />
                    ))
                ) : (
                    // Displays a message if there are no tasks to show.
                    <div className="task-list__message">~ No tasks added yet ~</div>
                )}
            </ul>
        </React.Fragment>
    );
};

export default TaskList;
