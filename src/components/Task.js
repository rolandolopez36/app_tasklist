import React, { useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faEdit, faSquare, faTimes } from '@fortawesome/free-solid-svg-icons';

// Este es un componente de tarea individual
const Task = ({ task, toggleCompleted, editTask, deleteTask }) => {
    // Estado para controlar si la tarea está en modo edición
    const [editingTask, setEditingTask] = useState(false);
    // Estado para controlar el texto de la tarea mientras se edita
    const [newTaskText, setNewTaskText] = useState(task.text);

    // Función para manejar la edición de la tarea
    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        try {
            // Intenta editar la tarea
            editTask(task.id, newTaskText);
            // Si la edición es exitosa, sale del modo edición
            setEditingTask(false);
            // Notifica al usuario que la tarea fue editada con éxito
            alert('Tarea editada con éxito');
        } catch (error) {
            // Si hay un error, lo registra en la consola
            console.error('Error al editar la tarea: ', error);
        }
    }, [editTask, newTaskText, task.id]);

    // Función para manejar el cambio de estado de la tarea (completada/no completada)
    const handleToggleCompleted = useCallback(() => {
        try {
            // Intenta cambiar el estado de la tarea
            toggleCompleted(task.id);
        } catch (error) {
            // Si hay un error, lo registra en la consola
            console.error('Error al cambiar el estado de la tarea: ', error);
        }
    }, [toggleCompleted, task.id]);

    // Función para manejar la eliminación de la tarea
    const handleDeleteTask = useCallback(() => {
        // Pregunta al usuario si está seguro de que quiere eliminar la tarea
        if (window.confirm('¿Estás seguro de que quieres eliminar esta tarea?')) {
            try {
                // Intenta eliminar la tarea
                deleteTask(task.id);
                // Notifica al usuario que la tarea fue eliminada con éxito
                alert('Tarea eliminada con éxito');
            } catch (error) {
                // Si hay un error, lo registra en la consola
                console.error('Error al eliminar la tarea: ', error);
            }
        }
    }, [deleteTask, task.id]);

    // Renderiza la tarea
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
                    // Si la tarea está en modo edición, muestra un formulario para editarla
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
                    // Si la tarea no está en modo edición, muestra el texto de la tarea
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