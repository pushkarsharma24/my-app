import React, {useState, useEffect} from 'react';

const TaskForm = ({addTask, editTask, editing, currentTask}) =>{
    const [task, setTask] = useState (currentTask);

    useEffect(() =>{
        setTask (currentTask);
    }, [currentTask]);

    const handleChange = (e) => {
        const { name, value} = e.target;
        setTask({...task, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(editing){
            editTask(task);
        } else{
            addTask(task);
        }
        setTask({id: null, title: '', description: ''});
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" value= {task.title}
            onChange={handleChange} placeholder="Task Title" required />
            <input type="text" name="description" value= {task.description}
            onChange={handleChange} placeholder="Description" required />
            <button type = "submit">{editing ? 'Update Task' : 'Add Task'}
            </button>
        </form>
    );
};

export default TaskForm