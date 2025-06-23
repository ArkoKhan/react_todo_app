import { useState } from 'react';

function Input({addTask}) {

    const [task, setTask] = useState('');

    function handleInputChange(e) {
        setTask(e.target.value);
    }

    function handleAdd() {
        addTask(task);
        setTask('');
    }


    return (
        <div  className="input-container">

            <label for="task_input">Add Task: </label>
            <input id="task_input" type="text" value={task} onChange={handleInputChange} />
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default Input;