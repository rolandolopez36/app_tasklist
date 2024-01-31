import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, setTasks, showCompleted }) => {
    const toggleCompleted = (id) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    };

    const editTask = (id, newText) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, text: newText } : task));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    // Filtrado de tareas basado en showCompleted
    const filteredTasks = tasks.filter(task => showCompleted || !task.completed);

    return (
        <React.Fragment>
            <ul className="task-list">
                {filteredTasks.length > 0 ? (
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
                    <div className="task-list__message">~ No tasks added yet ~</div>
                )}
            </ul>
        </React.Fragment>
    );
};

export default TaskList;
