import React from 'react';
import {Link} from "react-router-dom";

const Task = props => {
    const {task, categoryId} = props;

    return (
        <div className='task-item'>
            <Link to={`/category/${categoryId}/task/${task.id}`}>{task.name}</Link>
        </div>
    );
};

export default Task;