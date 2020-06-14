import React from 'react';

function TaskItem(props) {
    return (
        <li>{props.task} <button onClick={() => props.onDelete(props.index)}>Delete</button> </li>
    );
}

export default TaskItem;