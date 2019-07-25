import React from 'react';
import {get, isEmpty} from 'lodash';
import Task from '../../components/Task';

const TasksList = props => {
    const id = +get(props, 'match.params.id', {});
    const tasks = props.tasks.filter(task => task.parentCategory === id);

    if (isEmpty(tasks)) {
        return (
            <div>No tasks here</div>
        )
    }

    return (
        <div>
            {tasks.map( task => <Task key={task.id} task={task} categoryId={id} />)}
        </div>
    );
};

export default TasksList;