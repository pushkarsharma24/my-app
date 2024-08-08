import React, {useState} from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './style.css';


const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState({id: null, title:'', description: ''});

    const addTask = (task) => {
      task.id = task.length +1;
      setTasks([...tasks, task]);
    };
    const deleteTask = (id) => {
      setTasks(tasks.filter(task => task.id !== id));
    };

    const editTask = (task) => {
      setEditing(true);
      setCurrentTask(task);
    };

    const updateTask = (updatedTask) => {
      setEditing(false);
      setTasks(tasks.map(task => (task.id === updatedTask.id ? updateTask : task)));
    };
    return  (
      <div>
        <h1>Task Manager</h1>
        <TaskForm 
        addTask={addTask}
        editTask={updateTask}
        editing={editing}
        currentTask={currentTask} />
        <TaskList tasks={tasks}
        deleteTask={deleteTask}
        editTask={editTask} />
      </div>
    );
  
};

export default App;
