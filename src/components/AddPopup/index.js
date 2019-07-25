import React from 'react';
import { AddItem } from '../Sidebar/AddItem';
import {togglePopup} from "../../actions";

const AddPopup = props => {
    const {common, addCategory} = props;

    const closePopup = () => {
        props.dispatch(togglePopup({
            isPopupVisible: false,
            parentToAdd: null
        }));
    };

    if (!common.isPopupVisible) {
        return null;
    }

    return (
        <div className='popup-holder'>
            <AddItem addCategory={addCategory} parent={common.parentToAdd} />
            <button onClick={closePopup}>x</button>
        </div>
    );
};

export default AddPopup;
