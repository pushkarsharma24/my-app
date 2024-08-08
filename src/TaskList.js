import React from 'react';

const TaskList = ({tasks, deleteTask, editTask}) => (
    <ul>
        {tasks.map(task => (
            <li key = {task.id}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <button onClick ={() =>
                    editTask(task)}>Edit</button>
                <button onClick={() =>
                    deleteTask(task.id)}>Delete</button>   
            </li>
        ))}
    </ul>
);

export default TaskList