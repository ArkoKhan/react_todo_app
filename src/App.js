import { useState, useEffect } from 'react';
import {
  addTaskToFirestore,
  getTasksFromFirestore,
  deleteTaskFromFirestore,
  toggleCompleteInFirestore
} from './firebaseUtils.js'; // Fixed import path
import Input from './components/Input.jsx';
import List from './components/List.jsx';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  useEffect(()=>{
    loadTasks();
  },[]);

  async function loadTasks() {
    const data = await getTasksFromFirestore();
    setTasks(data);
  }


  

  async function addTask(text) {
    await addTaskToFirestore({ text:task, completed: false });
    setTask('');
    loadTasks();
  };

  async function toggleCompleted(id, completed) {
    await toggleCompleteInFirestore(id, !completed);
    loadTasks();
  }

  async function deleteTask(id) {
    await deleteTaskFromFirestore(id);
    loadTasks();
  }

  return (
    <>
    <header>
      <h1>Todo List</h1>
    </header>
    <main>
      <Input task={task} addTask={addTask} setTask={setTask}/>
      <List
        tasks={tasks}
        toggleCompleted={toggleCompleted}
        deleteTask={deleteTask}
      />
    </main>
    </>
  );
}

export default App;
