import React from 'react';
import Task from './Task';

// TaskList component for displaying the list of tasks
const TaskList = ({ tasks, setTasks, showCompleted }) => {
    // Function to toggle the completed state of a task
    const toggleCompleted = (id) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    };

    // Function to edit the text of a task
    const editTask = (id, newText) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, text: newText } : task));
    };

    // Function to delete a task
    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <ul className="task-list">
            {tasks.length > 0 ? (
                tasks.map(task => (
                    (showCompleted || !task.completed) && (
                        <Task
                            key={task.id}
                            task={task}
                            toggleCompleted={toggleCompleted}
                            editTask={editTask}
                            deleteTask={deleteTask}
                        />
                    )
                ))
            ) : (
                <div className="task-list__message">~ No tasks added yet ~</div>
            )}
        </ul>
    );
};

export default TaskList;
