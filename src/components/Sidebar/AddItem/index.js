import React, {useRef, useState} from 'react';
import { noop } from 'lodash';

export const AddItem = ({addCategory, addSubcategory, parent}) => {
    const [text, setText] = useState('');
    const input = useRef(null);

    const onSubmit = (e) => {
        e.preventDefault();

        addCategory(text, parent);

        setText('');
    };

    return (
        <form className='form' onSubmit={onSubmit}>
            <input type="text" ref={input} value={text} onChange={e => setText(e.target.value)}/>
            <button type="submit" onClick={addSubcategory}>+</button>
        </form>
    );
};

AddItem.defaultProps = {
    addCategory: noop,
    addSubcategory: noop,
    parent: null
};
