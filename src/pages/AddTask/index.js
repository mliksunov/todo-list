import React, {useRef, useState} from 'react';
import { addTask } from "../../actions";

const AddTask = props => {
    const {match, tasks, history} = props;
    const [text, setText] = useState('');
    const [description, setDescription] = useState('');
    const input = useRef(null);

    const AddTaskAction = (task) => {
        props.dispatch(addTask(task));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        let task = {
            id: tasks[tasks.length - 1].id + 1,
            name: text,
            parentCategory: +match.params.id,
            description,
            done: false
        };

        AddTaskAction(task);

        setText('');
        setDescription('');

        history.goBack();
    };

    return (
        <form className='form' onSubmit={onSubmit}>
            <input type="text" placeholder='Task Name' ref={input} value={text} onChange={e => setText(e.target.value)}/>
            <input type="text" placeholder='Task Description' ref={input} value={description} onChange={e => setDescription(e.target.value)}/>
            <button className='button secondary' type='sumbit'>AddTask</button>
        </form>
    );
};

export default AddTask;