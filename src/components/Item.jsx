function Item({task, toggleCompleted, deleteTask}) {
    function handleDelete(e) {
        e.stopPropagation();
        deleteTask(task.id);
    }


    return (
        <li
            onClick={() => toggleCompleted(task.id, task.completed)}
            style={{textDecoration: task.completed ? 'line-through' : 'none'}}
        >
            {task.text}
            <button onClick={handleDelete}>X</button>
        </li>
    )
}

export default Item;