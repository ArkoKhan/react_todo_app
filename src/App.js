import { useState } from 'react';
import Input from './components/Input.jsx';
import List from './components/List.jsx';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(text) {
    setTasks([...tasks, {text, completed: false}]);
  };

  function toggleCompleted(index) {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !==index));
  }

  return (
    <>
    <header>
      <h1>Todo List</h1>
    </header>
    <main>
      <Input addTask={addTask}/>
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
