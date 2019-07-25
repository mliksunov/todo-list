import React from 'react';
import { NavLink } from "react-router-dom";
import { isEmpty, noop } from 'lodash';
import {togglePopup} from "../../../actions";

const Item = props => {
    const {item, categories, dispatch} = props;

    const openPopup = e => {
        const parentToAdd = parseInt(e.target.getAttribute('data-id'));

        props.dispatch(togglePopup({
            isPopupVisible: true,
            parentToAdd
        }));
    };

    return (
        <li>
            <div className='item-name-holder'>
                <NavLink to={`/category/${item.id}`}>
                    <span className='item-name'>{ item.name }</span>
                </NavLink>
                <button className='button' data-id={item.id} onClick={openPopup} type="button">+</button>
            </div>
            <ItemsList categories={categories} dispatch={dispatch} parentId={item.id} openPopup={openPopup} />
        </li>
    )
};

const ItemsList = props => {
    const {categories, parentId} = props;

    if (isEmpty(categories)) {
        return null;
    }

    return (
        <ul className="items-list">
            { categories.filter(el => el.parent === parentId).map(item => (
                <Item key={item.id} item={item} {...props} />
            )) }
        </ul>
    )
};

ItemsList.defaultProps = {
    parentId: null,
    addChildren: noop
};

export default ItemsList;