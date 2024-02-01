import React, { useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faEdit, faSquare, faTimes } from '@fortawesome/free-solid-svg-icons';

const Task = ({ task, toggleCompleted, editTask, deleteTask }) => {
    const [editingTask, setEditingTask] = useState(false);
    const [newTaskText, setNewTaskText] = useState(task.text);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        try {
            editTask(task.id, newTaskText);
            setEditingTask(false);
            alert('Tarea editada con éxito');
        } catch (error) {
            console.error('Error al editar la tarea: ', error);
        }
    }, [editTask, newTaskText, task.id]);

    const handleToggleCompleted = useCallback(() => {
        try {
            toggleCompleted(task.id);
        } catch (error) {
            console.error('Error al cambiar el estado de la tarea: ', error);
        }
    }, [toggleCompleted, task.id]);

    const handleDeleteTask = useCallback(() => {
        if (window.confirm('¿Estás seguro de que quieres eliminar esta tarea?')) {
            try {
                deleteTask(task.id);
                alert('Tarea eliminada con éxito');
            } catch (error) {
                console.error('Error al eliminar la tarea: ', error);
            }
        }
    }, [deleteTask, task.id]);

    return (
        <li className="task-list__task">
            <FontAwesomeIcon 
                icon={task.completed ? faCheckSquare : faSquare}
                className="task-list__icon task-list__icon-check"
                onClick={handleToggleCompleted}
                aria-label={task.completed ? 'Desmarcar tarea como completada' : 'Marcar tarea como completada'}
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
                        <button type="submit" className="edit-task-form__btn">Update</button>
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
                    aria-label='Editar tarea'
                />
                <FontAwesomeIcon 
                    icon={faTimes} 
                    className="task-list__icon task-list__icon-action" 
                    onClick={handleDeleteTask}
                    aria-label='Eliminar tarea'
                />
            </div>
        </li>
    );
}

export default Task;