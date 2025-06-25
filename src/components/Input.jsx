

function Input({task, addTask,  setTask}) {

    function handleInputChange(e) {
        setTask(e.target.value);
    }
    


    return (
        <div  className="input-container">

            <label for="task_input">Add Task: </label>
            <input id="task_input" type="text" value={task} onChange={handleInputChange} />
            <button onClick={addTask}>Add</button>
        </div>
    )
}

export default Input;