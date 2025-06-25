import Item from './Item';

function List({tasks, toggleCompleted, deleteTask}) {
    return (
        <div className="list">
        <ul>
        {tasks.map((task)=>(
            <Item 
                key={task.id} 
                task={task} 
                toggleCompleted={toggleCompleted}
                deleteTask={deleteTask}

            />
        ))}

        </ul>
        </div>
    );
}
export default List;