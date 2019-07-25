import React, {Fragment} from 'react';
import { Link } from "react-router-dom";
import {get, isEmpty} from 'lodash';
import Task from '../../components/Task';

const TasksList = props => {
    const id = +get(props, 'match.params.id', {});
    const tasks = props.tasks.filter(task => task.parentCategory === id);

    if (isEmpty(tasks)) {
        return (
            <Fragment>
                <div>No tasks here</div>
                <Link className='button secondary' to={`/category/${id}/add-task`}>Add Task</Link>
            </Fragment>
        )
    }

    return (
        <Fragment>
            {tasks.map( task => <Task key={task.id} task={task} categoryId={id} />)}
            <Link className='button secondary' to={`/category/${id}/add-task`}>Add Task</Link>
        </Fragment>
    );
};

export default TasksList;