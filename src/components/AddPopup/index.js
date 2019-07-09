import React from 'react';
import { AddItem } from '../Sidebar/AddItem';

function AddPopup ({isVisible, addCategory, parent, closePopup}) {
    if (!isVisible) {
        return null;
    }

    return (
        <div className='popup-holder'>
            <AddItem addCategory={addCategory} parent={parent} />
            <button onClick={closePopup}>x</button>
        </div>
    );
}

export default AddPopup;
