import React, {useRef, useState} from 'react';
import { editTask } from "../../actions";
import _ from "lodash";

const EditTask = props => {
    const {match, tasks, history} = props;
    const initialTask = _.find(tasks, t => t.id === +match.params.id);
    const [text, setText] = useState(initialTask.name);
    const [description, setDescription] = useState(initialTask.description);
    const input = useRef(null);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTasks = tasks.filter(t => t.id !== initialTask.id);

        const task = {
            id: initialTask.id,
            name: text,
            parentCategory: initialTask.parentCategory,
            description,
            done: false
        };

        if (text.length && description.length) {
            setText('');
            setDescription('');
            newTasks.push(task);
            props.dispatch(editTask(newTasks));
            history.goBack();
        }
    };

    return (
        <form className='form' onSubmit={onSubmit}>
            <input type="text" placeholder='Task Name' ref={input} value={text} onChange={e => setText(e.target.value)}/>
            <input type="text" placeholder='Task Description' ref={input} value={description} onChange={e => setDescription(e.target.value)}/>
            <button className='button secondary' type='sumbit'>Edit Task</button>
        </form>
    );
};

export default EditTask;