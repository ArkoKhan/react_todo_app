function Item({task, index, toggleCompleted, deleteTask}) {
    function handleDelete(e) {
        e.stopPropagation();
        deleteTask(index);
    }


    return (
        <li
            onClick={() => toggleCompleted(index)}
            style={{textDecoration: task.completed ? 'line-through' : 'none'}}
        >
            {task.text}
            <button onClick={handleDelete}>X</button>
        </li>
    )
}

export default Item;