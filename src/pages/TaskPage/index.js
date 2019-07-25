import React from 'react';
import _ from 'lodash'

const TaskPage = props => {
    const {tasks, match} = props;
    const task = _.find(tasks, t => t.id === +match.params.id);

    return (
        <div>
            {task.description}
        </div>
    );
};

export default TaskPage;