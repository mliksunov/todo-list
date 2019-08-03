import React from 'react';
import { find } from 'lodash'
import {Link} from "react-router-dom";

const TaskPage = props => {
    const {tasks, match, location} = props;
    const task = find(tasks, t => t.id === +match.params.id);

    return (
        <div>
            {task.description}
            <Link className='button secondary' to={`${location.pathname}/edit-task`}>Edit Task</Link>
        </div>
    );
};

export default TaskPage;