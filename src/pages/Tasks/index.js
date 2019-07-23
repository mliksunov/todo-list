import React from 'react';
import {get, isEmpty} from 'lodash';
import { Link } from "react-router-dom";

function Tasks (props) {
    const id = +get(props, 'match.params.id', {});
    const tasks = props.tasks.filter(task => task.parentCategory === id);

    if (isEmpty(tasks)) {
        return (
            <div>No tasks here</div>
        )
    }

    return (
        <div>
            {tasks.map( task => <div key={task.id}>{task.description}</div>)}
        </div>
    );
}

export default Tasks;