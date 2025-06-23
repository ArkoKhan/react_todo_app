import Item from './Item';

function List({tasks, toggleCompleted, deleteTask}) {
    return (
        <div className="list">
        <ul>
        {tasks.map((task, index)=>(
            <Item 
                key={index} 
                task={task} 
                index={index}
                toggleCompleted={toggleCompleted}
                deleteTask={deleteTask}

            />
        ))}

        </ul>
        </div>
    );
}
export default List;